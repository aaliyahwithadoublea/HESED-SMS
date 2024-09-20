
import React from 'react';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
import blog4 from '../assets/blog4.png';
import blog5 from '../assets/blog5.png';
import blog6 from '../assets/blog6.png';


const Blogs = () => {
  const blogs = [
    {
      title: 'Flexible Budgeting Strategies and Enhanced School Productivity',
      type: 'Blog Post',
      date: 'May 5, 2023',
      image: blog1
    },
    {
      title: 'How to be Financially Efficient as an Educator or School Manager?',
      type: 'Blog Post',
      date: 'Jan 1, 2023',
      image: blog2, 
    },
    {
      title: 'No Child Left Behind Seminar: Building an Inclusive Learning Environment',
      type: 'Event and Update',
      date: 'Jan 1, 2023',
      image: blog3, 
    },
    {
        title: 'No Child Left Behind Seminar: Building an Inclusive Learning Environment',
        type: 'Event and Update',
        date: 'Jan 1, 2023',
        image: blog4, 
      },
      {
        title: 'No Child Left Behind Seminar: Building an Inclusive Learning Environment',
        type: 'Event and Update',
        date: 'Jan 1, 2023',
        image: blog5, 
      },
      {
        title: 'No Child Left Behind Seminar: Building an Inclusive Learning Environment',
        type: 'Event and Update',
        date: 'Jan 1, 2023',
        image: blog6, 
      }
  ];

  return (
    <section className="py-10 px-4">
      <h2 className="text-center text-3xl font-semibold mb-8">Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-sm text-gray-500">{blog.type}</p>
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-400">{blog.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
