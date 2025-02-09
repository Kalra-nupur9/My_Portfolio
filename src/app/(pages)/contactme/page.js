"use client";
import React, { useState } from "react";

function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("Submitting...");

    try {
      const res = await fetch("/api/query/contactMe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMessage(data.message);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          contactNumber: "",
          message: "",
        });
      } else {
        setResponseMessage(data.error);
      }
    } catch (error) {
      setResponseMessage("Something went wrong! Please try again.");
    }
  };

  return (
    <div id="contactMe" className="py-5 bg-opacity-25 bg-gradient-to-r from-pink-300 via-white to-rose-300">
      <div className="text-7xl text-main-red font-semibold text-center">CONTACT ME</div>
      <div className="text-3xl text-pink-500 text-center">Questions, Thoughts, Or Just Want to Say Hello?</div>

      <form className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <label className="text-lg font-medium text-pink-600">First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" required />
          </div>
          <div className="w-full">
            <label className="text-lg font-medium text-pink-600">Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" required />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="w-full">
            <label className="text-lg font-medium text-pink-600">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" required />
          </div>
          <div className="w-full">
            <label className="text-lg font-medium text-pink-600">Contact Number</label>
            <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange}
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" required />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-lg font-medium text-pink-600">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange}
            className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            rows="4" required></textarea>
        </div>

        <button type="submit" className="w-full mt-6 bg-rose-500 text-white text-lg font-medium px-10 py-3 rounded-full shadow-lg hover:bg-rose-600 transition duration-300">
          Submit
        </button>

        {responseMessage && <p className="mt-4 text-center text-lg text-pink-700">{responseMessage}</p>}
      </form>
    </div>
  );
}

export default Page;
