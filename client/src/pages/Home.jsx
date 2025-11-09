import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  // State to track loading
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading (2 seconds). 
    // You can adjust the time or replace this with real data-fetch completion.
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    // Preloader screen
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#fff'
      }}>
        <div className="spinner"></div>

        {/* Inline spinner style */}
        <style>{`
          .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid #ccc;
            border-top-color: yellow;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  // Show the actual home content after loading
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <Testimonial />
      <NewsLetter />
    </>
  )
}

export default Home
