"use client";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Page() {
  return (
    <div id="contactMe" className="py-5 bg-opacity-25 bg-gradient-to-r from-pink-300 via-white to-rose-300">
    <div className="text-4xl sm:text-6xl md:text-7xl text-main-red font-semibold text-center">
      CONTACT ME
    </div>
    <div className="text-2xl sm:text-3xl text-pink-500 text-center">
      Questions, Thoughts, Or Just Want to Say Hello?
    </div>

    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
      <div className="text-xl sm:text-2xl flex flex-col items-center text-center max-h-32">
        <MdEmail className="text-main-red text-4xl sm:text-5xl" />
        <div>
          Email <br />
          <a href="mailto:kalranupur6@gmail.com" className="text-pink-500 hover:bg-main-red hover:py-1 hover:px-2 hover:rounded-full hover:text-white" target="_blank">kalranupur6@gmail.com</a>
        </div>
      </div>
      <div className="text-xl sm:text-2xl flex flex-col items-center text-center max-h-32">
        <IoCall className="text-main-red text-4xl sm:text-5xl" />
        <div>
          Call: <br />
          <a href="tel:+919582161006" className="text-pink-500 hover:bg-main-red hover:py-1 hover:px-2 hover:rounded-full hover:text-white" target="_blank">+91 9582161006</a>
        </div>
      </div>
      <div className="text-xl sm:text-2xl flex flex-col items-center text-center max-h-32">
        <FaLinkedin className="text-main-red text-4xl sm:text-5xl" />
        <div>
          Visit Now:<br />
          <a href="https://www.linkedin.com/in/nupur-kalra-122193287/" target="_blank" className="text-pink-500 hover:bg-main-red hover:py-1 hover:px-2 hover:rounded-full hover:text-white">Click here</a>
        </div>
      </div>
      <div className="text-xl sm:text-2xl flex flex-col items-center text-center max-h-32">
        <FaGithub className="text-main-red text-4xl sm:text-5xl" />
        <div>
          Visit Now:<br />
          <a href="https://github.com/Kalra-nupur9" target="_blank" className="text-pink-500 hover:bg-main-red hover:py-1 hover:px-2 hover:rounded-full hover:text-white">Click here</a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Page;
