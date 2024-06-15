import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import AdModal from './AdModal';

const Blogpost = ({ blogs, handleDelete, handleEdit, currentpage, selectedcategory, pageSize }) => {
  const [isAdOpen, setIsAdOpen] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  const handleCardClick = (url) => {
    setRedirectUrl(url);
    setIsAdOpen(true);
  };

  const handleAdEnd = () => {
    setIsAdOpen(false);
    window.location.href = redirectUrl; // or handle navigation as needed
  };

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
            <a href={`/blogposts/${blog.id}`} className='cursor-pointer' onClick={(e) => {
              e.preventDefault(); // Prevent default behavior of anchor tag
              handleCardClick(`/blogposts/${blog.id}`); // Set modal redirect URL
            }}>
              <div>
                <img src={blog.image} alt="" className='w-full h-48 object-cover rounded' />
              </div>
              <h3 className='mt-4 mb-2 font-bold hover:text-green-500 cursor-pointer'>{blog.title}</h3>
              <p className='mb-2 text-gray-500'> <FaUser className="inline-flex items-center w-4 h-4 rounded-full mr-2" />{blog.author}</p>
              <p className='text-sm'>Published: {formattedDate}</p>
            </a>
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
      <AdModal isOpen={isAdOpen} onClose={() => setIsAdOpen(false)} onAdEnd={handleAdEnd} />
    </div>
  );
}

export default Blogpost;
