import React from 'react';

const ContactSection = () => {
  return (
    <section className="container mx-auto my-12 p-8 bg-gray-100 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Contact Us
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Got any questions? Feel free to reach out to us at "Ithe Mail Takycha"
      </p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
        Send a Message
      </button>
    </section>
  );
};

export default ContactSection;
