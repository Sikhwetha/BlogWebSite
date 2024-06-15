import React, { useState } from 'react';
import AdModal from './AdModal';

const BlogCard = ({ blogs, currentpage, selectedcategory, pageSize }) => {
  const [isAdOpen, setIsAdOpen] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  const handleCardClick = (url) => {
    setRedirectUrl(url);
    setIsAdOpen(true);
  };

  const handleAdEnd = () => {
    window.location.href = redirectUrl; // Directly change URL
    // Alternatively:
    // window.location.replace(redirectUrl); // Replace current URL in history
  };

  const filteredBlogs = blogs
    .filter(blog => !selectedcategory || blog.category === selectedcategory)
    .slice((currentpage - 1) * pageSize, currentpage * pageSize);

  return (
    <>
      <AdModal isOpen={isAdOpen} onClose={() => setIsAdOpen(false)} onAdEnd={handleAdEnd} />
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
        {filteredBlogs.map(blog => {
          const publishedDate = new Date(blog.published_date);
          const formattedDate = `${publishedDate.getFullYear()}-${String(publishedDate.getMonth() + 1).padStart(2, '0')}-${String(publishedDate.getDate()).padStart(2, '0')} ${String(publishedDate.getHours()).padStart(2, '0')}:${String(publishedDate.getMinutes()).padStart(2, '0')}`;

          return (
            <div key={blog.id} onClick={() => handleCardClick(`/blogs/${blog.id}`)} className='p-5 rounded cursor-pointer shadow-lg'>
              <div>
                <div>
                  <img src={blog.image} alt="Blog" className='w-full' />
                </div>
                <h3 className='mt-4 mb-2 font-bold hover:text-green-500 cursor-pointer'>{blog.title}</h3>
                <p className='mb-2 text-gray-500'>{blog.author}</p>
                <p className='text-sm'>Published: {formattedDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogCard;
