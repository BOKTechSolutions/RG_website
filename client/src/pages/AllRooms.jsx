import React from 'react'
import { roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const AllRooms = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center pt-28 md:pt-35 px-4 md:px-16 lg:px-24 pb-20'>
      {/* Title */}
      <h1 className='font-playfair text-4xl md:text-[40px] font-bold text-center mb-12'>
        Our Rooms
      </h1>

      {/* Grid of Rooms */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 w-full max-w-5xl'>
        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className='flex flex-col items-center text-center cursor-pointer'
            onClick={() => {
              navigate(`/rooms/${room._id}`);
              scrollTo(0, 0);
            }}
          >
            <img
              src={room.images[0]}
              alt="Hotel Room"
              className='w-full h-64 object-cover rounded-xl shadow-lg mb-4'
            />
            <p className='text-gray-800 text-2xl md:text-3xl font-playfair font-semibold mb-2'>
              {room.hotel.name}
            </p>
            <p className='text-xl font-medium text-gray-700'>
              GH₵{room.pricePerNight}/night
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllRooms
