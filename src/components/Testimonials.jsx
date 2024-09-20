// src/components/TestimonialSection.jsx
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mrs. Amaka',
      role: 'Classroom Teacher',
      comment: 'Managing student records used to be a daunting task, but with HESED, it’s become incredibly simple.',
      rating: 5,
    },
    {
      name: 'Mr. Johnson',
      role: 'Head Teacher',
      comment: 'We’ve seen a noticeable improvement in parent-teacher communication since implementing HESED.',
      rating: 5,
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="py-10 px-4 bg-gray-50">
      <h2 className="text-center text-3xl font-semibold mb-8">What Our Users Are Saying</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <p className="text-sm text-gray-600 italic mb-4">"{testimonial.comment}"</p>
            <div className="flex items-center">
              <div className="mr-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
              <div className="ml-auto">
                {'⭐'.repeat(testimonial.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
