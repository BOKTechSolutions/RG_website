import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-yellow-50 text-black text-center">
      <Title 
        title="Stay Inspired" 
        subTitle="Join our newsletter and be the first to hear about exclusive offers, special events, and unforgettable experiences at Royal George Guesthouse." 
      />

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
        <input 
          type="email" 
          className="bg-white px-4 py-2.5 border border-gray-300 text-black rounded outline-none max-w-66 w-full placeholder-gray-500" 
          placeholder="Enter your email" 
        />
        <button className="flex items-center justify-center gap-2 group bg-black text-white px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all">
          Subscribe
          <img 
            src={assets.arrowIcon} 
            alt="arrow icon" 
            className="w-3.5 group-hover:translate-x-1 transition-all" 
          />
        </button>
      </div>

      <p className="text-gray-500 mt-6 text-xs text-center">
        By subscribing, you agree to our Privacy Policy and consent to receive updates.
      </p>
    </div>
  )
}

export default NewsLetter
