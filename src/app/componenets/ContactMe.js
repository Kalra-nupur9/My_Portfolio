import React from "react";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

function ContactMe() {
  return (
    <>
      <div id="contactMe" className="   px-36 py-24 bg-main-red bg-opacity-25 ">
      
        <div className="  z-10">
          <div className="text-8xl text-main-red font-semibold">
            CONTACT ME
          </div>
          <div className=" text-5xl text-pink-500">
            Questions, Thoughts, Or Just Want to Say Hello?
          </div>
        </div>

        <div className="  pt-20 flex gap-28 justify-center items-center    ">
          <div className="border-2 border-main-red px-36 py-36  relative text-xl  rounded-full  hover:shadow-2xl shadow-main-red   ">
            <div className=" absolute border-2 bg-white rounded-full top-[-20px] left-[30px] p-3">
              <MdEmail className="text-main-red text-6xl" />
            </div>

           

            
          </div>
          <div className="border-2 border-main-red px-36 py-36 relative text-xl  rounded-full hover:shadow-2xl shadow-main-red   ">
            <div className=" absolute border-2 bg-white rounded-full top-[-20px] left-[30px] p-3">
              <FaWhatsapp className="text-main-red text-6xl" />
            </div>

            
          </div>

          <div className="border-2 border-main-red px-36 py-36 relative text-xl  rounded-full hover:shadow-2xl shadow-main-red   ">
            <div className=" absolute border-2 bg-white rounded-full top-[-20px] left-[30px] p-3">
              <FaLinkedin className="text-main-red text-6xl" />
            </div>

            
          </div>
         
        </div>
      </div>
    </>
  );
}

export default ContactMe;
