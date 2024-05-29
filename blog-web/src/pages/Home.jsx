import React from 'react'
import Banner from '../components/Banner'
import Blogpage from '../components/Blogpage'
import Post from './Post'

const Home = () => {
  return (
    <div>
      <Banner />
      
      <div className='max-w-7xl mx-auto'>
          <Post />
      </div>
    </div>
  )
}

export default Home