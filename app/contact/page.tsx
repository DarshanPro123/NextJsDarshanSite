"use client";
import React, { useState } from "react";
import { PiSignpostBold } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { TiWorld } from "react-icons/ti";

const ContactPage = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send form data to Formspree (using POST request)
    const response = await fetch("https://formspree.io/f/xkgrnobl", {
      // Replace with your Formspree endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset the form fields
    } else {
      alert("There was an issue submitting the form. Please try again.");
    }
  };

  return (
    <section className="bg-gray-950 py-16" id="contact-section">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-yellow-500 mb-4">Contact</h1>
          <h2 className="text-3xl text-gray-300 mb-4">Contact Me</h2>
          <p className="text-gray-400">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Address */}
          <div className="flex flex-col items-center p-6 shadow-lg">
            <div className="mb-4 text-5xl text-yellow-500 hover:scale-110 bg-gray-700 p-10 rounded-full">
              <PiSignpostBold />
            </div>
            <h3 className="text-xl text-white mb-2">Address</h3>
            <p className="text-gray-400 text-center">
              402, Aangan Aevanyu , Ahmedabad, Gujarat, India
            </p>
          </div>

          {/* Contact Number */}
          <div className="flex flex-col items-center  p-6 rounded-lg shadow-lg">
            <div className="mb-4 text-5xl text-yellow-500 hover:scale-110 bg-gray-700 p-10 rounded-full">
              <FaPhone />
            </div>
            <h3 className="text-xl text-white mb-2">Contact Number</h3>
            <p className="text-gray-400">
              <a href="tel://+917990752137" className="text-gray-400 underline">
                +91 7990 7521 37
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center  p-6 rounded-lg shadow-lg">
            <div className="mb-4 text-5xl text-yellow-500 hover:scale-110 bg-gray-700 p-10 rounded-full">
              <IoMdMailOpen />
            </div>
            <h3 className="text-xl text-white mb-2">Email Address</h3>
            <p className="text-gray-400">
              <a
                href="mailto:darshanpro187@gmail.com"
                className="text-gray-400 underline"
              >
                Darshanpro187@gmail.com
              </a>
            </p>
          </div>

          {/* Website */}
          <div className="flex flex-col items-center  p-6 rounded-lg shadow-lg">
            <div className="mb-4 text-5xl text-yellow-500 hover:scale-110 bg-gray-700 p-10 rounded-full">
              <TiWorld />
            </div>
            <h3 className="text-xl text-white mb-2">Website</h3>
            <p className="text-gray-400">
              <a href="#" className="text-gray-400 underline">
                SesssDarshan.com
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col lg:flex-row bg-gray-800 gap-12">
          {/* Form */}
          <div className="w-full lg:w-1/2 bg-gray-800 mx-auto p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              {/* Hidden Inputs */}
              <input
                type="hidden"
                name="_subject"
                value="New message from your website!"
              />
              <input
                type="hidden"
                name="_next"
                value="https://yourdomain.com/thank-you" // Optional: Redirect URL after submission
              />

              {/* Name */}
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your Email"
                />
              </div>

              {/* Subject */}
              <div className="mb-6">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Subject"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Message"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="mb-6 text-center">
                <button
                  type="submit"
                  className="bg-yellow-500 text-gray-950 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
            {isSubmitted && (
              <div className="text-center text-yellow-400 font-semibold">
                Thank you for contacting us! We will get back to you soon.
              </div>
            )}
          </div>

          {/* Optional Image */}
          <div className="w-full lg:w-1/2 bg-cover bg-center rounded-lg h-full">
            <img src="/bg_1.png" alt="Optional Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
