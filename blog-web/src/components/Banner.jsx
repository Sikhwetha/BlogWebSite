import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import Post from '../pages/Post'

const Banner = () => {
  return (
    <div className='px-4 py-32 mx-auto bg-white' >
      <div className='text-center'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome To Our Blog</h1>
        <p className='text-gray-600 lg:w-3/5 mx-auto mb-5 font-primary'>Welcome to our blog! Explore a world of insights, tips, and inspiration as we delve into topics ranging from technology 
          trends to lifestyle hacks. Join us on a journey of discovery and stay informed with our concise yet informative articles. Happy reading!</p>
          <div>
            <Link to={"/blog"} className='font-medium hover:text-orange-500 py-1 capitalize shadow-lg bg-orange-300 p-4 rounded-full hover:bg-green-300 ease-in-out duration-500'>Learn More <FaArrowRight className='inline-flex ml-2'/></Link>
          </div>
      </div>
    </div>
  )
}

export default Banner