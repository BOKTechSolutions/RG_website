import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({ room }) => {
  return (
    <Link
      to={`/rooms/${room._id}`}
      onClick={() => scrollTo(0, 0)}
      key={room._id}
      className="
        w-full 
        rounded-xl 
        overflow-hidden 
        bg-white 
        text-gray-500/90 
        shadow-[0px_4px_4px_rgba(0,0,0,0.05)]
      "
    >
      <img
        src={room.images?.[0] || "https://via.placeholder.com/300x200?text=No+Image"}
        alt=""
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <p className="font-playfair text-xl font-medium text-gray-800 mb-4">
          {room.hotel?.name || "Unnamed Hotel"}
        </p>
        <div className="flex items-center justify-between">
          <p>
            <span className="text-xl text-gray-800">
              GH₵{room.pricePerNight}
            </span>
            /night
          </p>
          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard
