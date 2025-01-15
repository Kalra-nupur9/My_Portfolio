import React from 'react';

const DownloadResume = () => {
  return (
    <div className="flex justify-center space-x-6 mt-5">
      {/* Hire Me Button */}
      <button
        id="btn"
        className="relative z-10 bg-rose-500 text-white text-lg font-medium px-8 py-3 my-5 rounded-full shadow-lg overflow-hidden group hover:text-black transition-all duration-500 w-1/4"
      >
        <span className="absolute inset-0 bg-white scale-x-0 transition-transform duration-500 group-hover:scale-x-100 z-[-1] rounded-full"></span>
        Hire Me
      </button>

      {/* Download Resume Button */}
      <a
        href="/PDF/NUPUR KALRA.pdf" // Path to your resume file
        download="Nupur_Kalra_Resume.pdf" // File name for the download
        className="relative z-10 bg-pink-600 text-white text-lg font-medium px-8 py-3 my-5 rounded-full shadow-lg overflow-hidden group hover:text-black transition-all duration-500 w-1/4"
      >
        <span className="absolute inset-0 bg-white scale-x-0 transition-transform duration-500 group-hover:scale-x-100 z-[-1] rounded-full"></span>
        Download Resume
      </a>
    </div>
  );
};

export default DownloadResume;
