"use client";
import React, { useState } from "react";

function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
    file: null,
  });

  const [showFileUpload, setShowFileUpload] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileUploadToggle = () => {
    setShowFileUpload(!showFileUpload);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      // Simulate successful submission
      setTimeout(() => {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          contactNumber: "",
          message: "",
          file: null,
        });
        setShowFileUpload(false);
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      setErrorMessage("An error occurred while submitting the form.");
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contactMe"
      className="py-5 bg-opacity-25 bg-gradient-to-r from-pink-300 via-white to-rose-300"
    >
      <div className="text-7xl text-main-red font-semibold text-center">
        CONTACT ME
      </div>
      <div className="text-3xl text-pink-500 text-center">
        Questions, Thoughts, Or Just Want to Say Hello?
      </div>

      <form
        className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <label className="text-lg font-medium text-pink-600">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div className="w-full">
            <label className="text-lg font-medium text-pink-600">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="w-full">
            <label className="text-lg font-medium text-pink-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div className="w-full">
            <label className="text-lg font-medium text-pink-600">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-lg font-medium text-pink-600">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            id="attachFile"
            className="w-5 h-5 text-pink-500 border border-pink-300 rounded focus:ring-pink-500"
            onChange={handleFileUploadToggle}
          />
          <label
            htmlFor="attachFile"
            className="ml-2 text-pink-600 font-medium"
          >
            Attach a File
          </label>
        </div>

        {showFileUpload && (
          <div className="mt-4">
            <label className="text-lg font-medium text-pink-600">Upload File</label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        )}

        {successMessage && (
          <div className="mt-4 text-green-500 font-medium">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="mt-4 text-red-500 font-medium">{errorMessage}</div>
        )}

        <button
          type="submit"
          className={`w-full mt-6 bg-rose-500 text-white text-lg font-medium px-10 py-3 rounded-full shadow-lg hover:bg-rose-600 transition duration-300 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Page;
