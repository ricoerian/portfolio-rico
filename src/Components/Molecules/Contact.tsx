import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const whatsappMessage = `https://wa.me/628123456789?text=Hallo%20nama%20saya%20${encodeURIComponent(formData.name)}, ${encodeURIComponent(formData.message)}`;
    window.open(whatsappMessage, "_blank");
  };

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-700 md:flex md:flex-col md:justify-center md:min-h-screen" id="contact">
      <div className="container mx-auto px-6 max-w-lg">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white" rows={4} placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600">
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
