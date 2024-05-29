import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const BlogCard = ({ blogs, currentpage, selectedcategory, pageSize }) => {

  const filteredBlogs = blogs
    .filter(blog => !selectedcategory || blog.category === selectedcategory)
    .slice((currentpage - 1) * pageSize, currentpage * pageSize);

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {filteredBlogs.map(blog => {
        // Parse published date for each individual blog
        const publishedDate = new Date(blog.published_date);
        // Format date as YYYY-MM-DD HH:MM
        const formattedDate = `${publishedDate.getFullYear()}-${String(publishedDate.getMonth() + 1).padStart(2, '0')}-${String(publishedDate.getDate()).padStart(2, '0')} ${String(publishedDate.getHours()).padStart(2, '0')}:${String(publishedDate.getMinutes()).padStart(2, '0')}`;

        return (
          <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 rounded cursor-pointer shadow-lg'>
            <div>
              <div>
                <img src={blog.image} alt="blog.image" className='w-full' />
              </div>
              <h3 className='mt-4 mb-2 font-bold hover:text-green-500 cursor-pointer'>{blog.title}</h3>
              <p className='mb-2 text-gray-500'><img src={blog.picture} alt="blog.picture" className="inline-flex items-center w-10 h-10 rounded-full mr-2" />{blog.author}</p>
              <p className='text-sm'>Published: {formattedDate}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogCard;

