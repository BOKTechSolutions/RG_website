import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
      <Title title='Our Rooms' />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 w-full max-w-6xl'>
        {roomsDummyData.slice(0, 2).map((room, index) => (
          <HotelCard key={room._id || index} room={room} index={index} />
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/rooms')
          scrollTo(0, 0)
        }}
        className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'
      >
        View Rooms
      </button>
    </div>
  )
}

export default FeaturedDestination
