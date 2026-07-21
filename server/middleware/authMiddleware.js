import User from "../models/user.js";

export const protect = async (req, res, next) => {
  try {

    const { userId } = req.auth();

    console.log("Clerk User ID:", userId);


    if (!userId) {
      return res.status(401).json({
        success:false,
        message:"No Clerk authentication"
      });
    }


    const user = await User.findById(userId);


    console.log("Database User:", user);


    if (!user) {
      return res.status(401).json({
        success:false,
        message:"User not found in database"
      });
    }


    req.user = user;

    next();


  } catch(error){

    console.log("AUTH ERROR:", error);

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};