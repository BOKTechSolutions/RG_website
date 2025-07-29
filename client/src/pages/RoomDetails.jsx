import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { roomsDummyData } from '../assets/assets'

const RoomDetails = () => {
    const { id } = useParams()
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    }, [id])

    return room && (
        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
            {/* Room Header */}
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
                <h1 className='text-3xl md:text-4xl font-playfair'>
                    {room.guesthouse?.name || room.hotel?.name}
                    <span className='font-inter text'> ({room.roomType})</span>
                </h1>
            </div>

            {/* Room Images */}
            <div className='flex flex-col lg:flex-row mt-6 gap-6'>
                <div className='lg:w-1/2 w-full'>
                    <img
                        src={mainImage}
                        alt="Room Image"
                        className='w-full rounded-xl shadow-lg object-cover'
                    />
                </div>
                <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                    {room?.images.length > 1 && room.images.map((image, index) => (
                        <img
                            onClick={() => setMainImage(image)}
                            key={index}
                            src={image}
                            alt="Room Image"
                            className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image ? 'outline outline-3 outline-orange-500' : ''}`}
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

            {/* Check-In / Check-Out Form */}
            <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
                <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>
                    <div className='flex flex-col'>
                        <label htmlFor="checkInDate" className='font-medium'>Check-in</label>
                        <input
                            type="date"
                            id='checkInDate'
                            className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none'
                            required
                        />
                    </div>
                    <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                    <div className='flex flex-col'>
                        <label htmlFor="checkOutDate" className='font-medium'>Check-out</label>
                        <input
                            type="date"
                            id='checkOutDate'
                            className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none'
                            required
                        />
                    </div>
                    <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                    <div className='flex flex-col'>
                        <label htmlFor="guests" className='font-medium'>Guests</label>
                        <input
                            type="number"
                            id='guests'
                            placeholder='0'
                            className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none'
                            required
                        />
                    </div>
                </div>
                <button
                    type='submit'
                    className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer'
                >
                    Book Now
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
