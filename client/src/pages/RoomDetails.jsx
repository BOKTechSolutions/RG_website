import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { roomsDummyData } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const RoomDetails = () => {

    const { id } = useParams()
    const { axios, getToken, navigate } = useAppContext()

    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)

    const [checkInDate, setCheckInDate] = useState('')
    const [checkOutDate, setCheckOutDate] = useState('')
    const [guests, setGuests] = useState(1)

    const [isAvailable, setIsAvailable] = useState(false)


    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)

        if(room){
            setRoom(room)
            setMainImage(room.images[0])
        }

    }, [id])


    // Check Availability
    const checkAvailability = async () => {

        try {

            if(!checkInDate || !checkOutDate){
                toast.error("Select check-in and check-out dates")
                return
            }


            if(checkInDate >= checkOutDate){
                toast.error("Check-out date must be after check-in date")
                return
            }


            const {data} = await axios.post(
                '/api/bookings/check-availability',
                {
                    room1:id,
                    checkInDate,
                    checkOutDate
                }
            )


            if(data.success){

                if(data.isAvailable){

                    setIsAvailable(true)
                    toast.success("Room is available")

                }else{

                    setIsAvailable(false)
                    toast.error("Room is not available")

                }

            }else{

                toast.error(data.message)

            }


        } catch(error){

            toast.error(error.message)

        }

    }



    // Booking
    const onSubmitHandler = async(e)=>{

        e.preventDefault()


        try{


            if(!isAvailable){

                return checkAvailability()

            }


            const {data} = await axios.post(
                '/api/bookings/book',
                {
                    room1:id,
                    checkInDate,
                    checkOutDate,
                    guests,
                    paymentMethod:"Pay At Hotel"
                },
                {
                    headers:{
                        Authorization:`Bearer ${await getToken()}`
                    }
                }
            )


            if(data.success){

                toast.success(data.message)

                navigate('/my-bookings')

                window.scrollTo(0,0)

            }else{

                toast.error(data.message)

            }

        }catch(error){

            toast.error(error.message)

        }

    }


    return room && (

        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>


            {/* Room Header */}

            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>

                <h1 className='text-3xl md:text-4xl font-playfair'>

                    {room.guesthouse?.name || room.hotel?.name}

                    <span className='font-inter text-sm'>
                        ({room.roomType})
                    </span>

                </h1>

            </div>



            {/* Images */}

            <div className='flex flex-col lg:flex-row mt-6 gap-6'>


                <div className='lg:w-1/2 w-full'>

                    <img
                    src={mainImage}
                    alt="Room"
                    className='w-full rounded-xl shadow-lg object-cover'
                    />

                </div>

                <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>

                    {room.images.map((image,index)=>(

                        <img

                        key={index}

                        onClick={()=>setMainImage(image)}

                        src={image}

                        alt="Room"

                        className={`w-full rounded-xl shadow-md cursor-pointer ${
                            mainImage===image 
                            ? "outline outline-3 outline-orange-500"
                            :""
                        }`}

                        />

                    ))}


                </div>


            </div>

            {/* Room Highlights */}

            <div className='flex flex-col md:flex-row md:justify-between mt-10'>

                <div className='flex flex-col'>

                    <h1 className='text-3xl md:text-4xl font-playfair mb-4'>Relax and Unwind</h1>

                    <p className='text-gray-700 text-base max-w-2xl mb-6'>
                        Relax in this spacious and stylish exclusive room. Have a restful night’s sleep and work in comfort at a spacious desk with ergonomic desk chair. <br /><br />
                        Enjoy a program on the 40-inch HDTV or surf the web with complimentary Wi-Fi. <br /><br />
                        This room also features a shower, mini-fridge, adjustable air-conditioning and personal safe to make you feel at home. <br /><br />
                        <strong>Bed:</strong> 1 King size bed <br />
                        <strong>Check-in time:</strong> 12:00 hr <br />
                        <strong>Check-out time:</strong> 11:30 hr
                    </p>

                </div>

                {/* Room Price */}
                <p className='text-2xl font-medium mt-6 md:mt-0'>
                    GH₵{room.pricePerNight}/night
                </p>

            </div>

            {/* Booking Form */}
            <form
            onSubmit={onSubmitHandler}
            className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-xl p-6 rounded-xl mx-auto mt-16 max-w-6xl'
            >


            <div className='flex flex-wrap gap-5'>


                <div>

                <label>Check-in</label>

                <input

                type="date"

                value={checkInDate}

                onChange={(e)=>setCheckInDate(e.target.value)}

                className='border p-2 block rounded'

                required

                />

                </div>


                <div>

                <label>Check-out</label>

                <input

                type="date"

                value={checkOutDate}

                onChange={(e)=>setCheckOutDate(e.target.value)}

                className='border p-2 block rounded'

                required

                />

                </div>
                <div>

                <label>Guests</label>

                <input

                type="number"

                value={guests}

                min="1"

                onChange={(e)=>setGuests(e.target.value)}

                className='border p-2 block rounded w-20'

                required

                />

                </div>
            </div>
            <button

            type="submit"

            className='bg-primary text-white rounded-md px-10 py-3 mt-5 md:mt-0'

            >

            {isAvailable ? "Book Now":"Check Availability"}
            </button>
            </form>
            <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>

                <p>
                We look forward to welcoming you for a relaxing stay at our guesthouse.
                </p>
            </div>
        </div>
    )
}
export default RoomDetails