import User from "../models/user.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        // Get headers for verification
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        };

        // Verify signature
        await whook.verify(JSON.stringify(req.body), headers);

        const { data, type } = req.body;

        // Build user object
        const userData = {
            _id: data.id,
            email: data.email_addresses[0].email_address,
            username: data.first_name + " "+ data.last_name,
            image: data.image_url,
        };

        // Handle webhook event
        switch (type) {
            case "user.created":{
                await User.create(userData);
                break;
            }
            case "user.updated":{
                await User.findByIdAndUpdate(data.id ,userData);
            break;
            }
            case "user.deleted":{
                await User.findByIdAndDelete(data.id,);
            break;
            }
            default:
            break;
        }
        res.json({ success: true ,message:"Webhook recieved"})
    } catch (error) {
        console.error("Webhook Error:", error.message);
        res.json({ error: "Webhook processing failed" });
    }
};

export default clerkWebhooks;
