import React from 'react'
import Blogpage from '../components/Blogpage'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Blogs = () => {
  return (
    <div>
      <div className='py-40 text-center px-4'>
      <header className="mb-12">

        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Trending Story</h1>
          <p className="text-lg text-gray-600">Where I share my thoughts, experiences, and ideas.</p>
          <p className="text-md text-gray-500 mt-2">Join me on this journey of discovery and insights.</p>
        </div>
      </header>
    </div>

     {/* all blogs container */}
     <div className='max-w-7xl mx-auto '>
        <Blogpage />
     </div>
    </div>
  )
}

export default Blogs