import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const Sidebar = ({blogs}) => {
  const [popular,setPopular] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/blogs/').then(res => res.json()).then(data => setPopular(data.slice(0,15)))
  },[])
 
  return (
   <div className='p-3'>
     <div>
      <h3 className='text-2xl font-semibold px-4'>Latest Blogs</h3>
      <div>
        {
          popular.slice(0,5).map(blog => 
            <div className='font-medium mb-3' key={blog.id}>
              <h4>{blog.title}</h4>
              <Link to={`/blogs/${blog.id}`} className='text-base pb-2 hover:text-orange-500 py-1'>Read More <FaArrowRight className='inline-flex ml-2'/></Link>
            </div>
          )
        }
      </div>
    </div>

    {/* popular */}
    <div>
      <h3 className='text-2xl font-semibold px-4 mt-20'>popular Blogs</h3>
      <div>
        {
          popular.slice(5,10).map(blog => 
            <div className='font-medium mb-3' key={blog.id}>
              <h4>{blog.title}</h4>
              <Link to={`/blogs/${blog.id}`} className='text-base pb-2 hover:text-orange-500 py-1'>Read More <FaArrowRight className='inline-flex ml-2'/></Link>
            </div>
          )
        }
      </div>
    </div>
   </div>
  )
}

export default Sidebar