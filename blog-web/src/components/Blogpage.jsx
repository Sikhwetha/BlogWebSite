import React, { useEffect, useState } from 'react';
import Blogs from '../pages/Blogs';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import CategorySection from './CategorySection';
import Sidebar from './Sidebar';
import axios from 'axios';

const Blogpage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentpage, setCurrentpage] = useState(1); // Changed initialization to a number
  const pageSize = 12; //blogs per page
  const [selectedcategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://127.0.0.1:8000/api/blogs/?page=${currentpage}&limit=${pageSize}`;
      // filter by category
      if (selectedcategory) {
        url += `&category=${selectedcategory}`;
      }
  
      try {
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
        setBlogs(data ); // Assuming data is an array of blogs
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state here if needed
      }
    }
    fetchBlogs();
  }, [currentpage, pageSize, selectedcategory]);
  

  // page changing btn
  const handlePageChange = (pageNumber) => {
    setCurrentpage(pageNumber);
  };

  // category change handler
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentpage(1); 
    setActiveCategory(category);
  };

  return (
    <div>
      {/* category */}
      <div>
        <CategorySection onSelectCategory={handleCategoryChange} selectedcategory={selectedcategory} activeCategory={activeCategory}/>
      </div>

      {/* blog section */}
      <div className='flex flex-col lg:flex-row'>
        {/* blog components */}
        <BlogCard blogs={blogs} currentpage={currentpage} selectedcategory={selectedcategory} pageSize={pageSize} />
        {/* sidebar */}
        <div>
          <Sidebar />
        </div>
      </div>

      {/* pagination */}
      <div>
        <Pagination onPageChange={handlePageChange} blogs={blogs} currentpage={currentpage} selectedcategory={selectedcategory} pageSize={pageSize} />
      </div>
    </div>
  );
};

export default Blogpage;
