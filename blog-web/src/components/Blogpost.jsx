import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Blogpost = ({ blogs, handleDelete, handleEdit, currentpage, selectedcategory, pageSize }) => {
  const filteredBlogs = blogs
    .filter(blog => !selectedcategory || blog.category === selectedcategory)
    .slice((currentpage - 1) * pageSize, currentpage * pageSize); 

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {filteredBlogs.map(blog => {
        const publishedDate = new Date(blog.published_date);
        const formattedDate = `${publishedDate.getFullYear()}-${String(publishedDate.getMonth() + 1).padStart(2, '0')}-${String(publishedDate.getDate()).padStart(2, '0')} ${String(publishedDate.getHours()).padStart(2, '0')}:${String(publishedDate.getMinutes()).padStart(2, '0')}`;

        return (
          <div key={blog.id} className='p-5 rounded shadow-lg'>
            <Link to={`/blogposts/${blog.id}`} className='cursor-pointer'>
              <div>
                <img src={blog.image} alt="" className='w-full h-48 object-cover rounded' />
              </div>
              <h3 className='mt-4 mb-2 font-bold hover:text-green-500 cursor-pointer'>{blog.title}</h3>
              <p className='mb-2 text-gray-500'> <img src={blog.picture} alt="blog.picture" className="inline-flex items-center w-10 h-10 rounded-full mr-2" />{blog.author}</p>
              <p className='text-sm'>Published: {formattedDate}</p>
            </Link>
            <div className='mt-4'>
              <button onClick={() => handleEdit(blog)} className="bg-green-400 text-white p-1 rounded mr-2">
                Edit
              </button>
              <button onClick={() => handleDelete(blog.id)} className="bg-gray-400 text-white p-1 rounded">
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Blogpost;
