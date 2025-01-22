"use client"
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

function Page() {

  const [showFileUpload, setShowFileUpload] = useState(false);

  const handleFileUploadToggle = () => {
    setShowFileUpload(!showFileUpload);
  };

  return (
    <>
      <div id="contactMe" className="py-24 bg-opacity-25 bg-gradient-to-r from-pink-300 via-white to-rose-300">
        <div className="z-10">
        <div className="text-8xl text-main-red font-semibold text-end px-5">
            CONTACT ME
          </div>
          <div className=" text-5xl text-pink-500 text-end px-5">
            Questions, Thoughts, Or Just Want to Say Hello?
          </div>
        </div>

        <form className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
          {/* First Name and Last Name */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label className="text-lg font-medium text-pink-600">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div className="w-full">
              <label className="text-lg font-medium text-pink-600">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mt-4">
            <label className="text-lg font-medium text-pink-600">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="mt-4">
            <label className="text-lg font-medium text-pink-600">Contact Number</label>
            <input
              type="tel"
              placeholder="Your Contact Number"
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          {/* Message */}
          <div className="mt-4">
            <label className="text-lg font-medium text-pink-600">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Attach File Checkbox */}
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="attachFile"
              className="w-5 h-5 text-pink-500 border border-pink-300 rounded focus:ring-pink-500"
              onChange={handleFileUploadToggle}
            />
            <label htmlFor="attachFile" className="ml-2 text-pink-600 font-medium">
              Attach a File
            </label>
          </div>

          {/* File Upload (Conditional) */}
          {showFileUpload && (
            <div className="mt-4">
              <label className="text-lg font-medium text-pink-600">Upload File</label>
              <input
                type="file"
                className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-rose-500 text-white text-lg font-medium px-10 py-3 rounded-full shadow-lg hover:bg-rose-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Page;
