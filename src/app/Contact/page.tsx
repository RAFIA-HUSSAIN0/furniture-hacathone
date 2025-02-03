import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa6';
import { IoSearchOutline, IoPersonOutline, IoAlert } from 'react-icons/io5';
import { BsCart3 } from 'react-icons/bs';
import { FaLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";

import Link from 'next/link';

const Contact = () => {
    return (
        <div>

            <nav className="flex justify-between items-center w-full h-[100px] sm:h-[120px] bg-[#ffffff] px-6">
                <div className="flex w-full items-center justify-between max-w-7xl">
                    {/* Navigation Links */}
                    <div className="font-bold text-[#000000] space-x-[80px] absolute left-1/2 transform -translate-x-1/2">
                        <Link href="/" className="hover:text-blue-500">Home</Link>
                        <Link href="/Shop" className="hover:text-blue-500">Shop</Link>
                        <Link href="/About" className="hover:text-blue-500">About</Link>
                        <Link href="/Contact" className="hover:text-blue-500">Contact</Link>
                    </div>

                    {/* Icon Links */}
                    <div className="hidden sm:hidden md:flex lg:flex space-x-4 lg:space-x-[60px] text-xl absolute right-16 mr-[50px]">
                        <Link href="/Account">
                            <span className="flex items-center">
                                <IoPersonOutline className="hover:text-blue-500 cursor-pointer" />
                                <IoAlert className="hover:text-blue-500 cursor-pointer ml-2" />
                            </span>
                        </Link>
                        <IoSearchOutline className="hover:text-blue-500 cursor-pointer" />
                        <FaRegHeart className="hover:text-blue-500 cursor-pointer" />
                        <Link href="/Asgard">
                            <BsCart3 className="hover:text-blue-500 cursor-pointer" />
                        </Link>
                    </div>
                </div>
            </nav>


            {/* Hero Section */}
            <div className="bg-cover bg-center h-[300px] flex items-center justify-center" style={{ backgroundImage: "url('/images/contact-banner.png')" }}>

            </div >

            {/*get in touch section*/}

            <div className=' flex flex-col items-center mt-[80px]  h-[1144px] mx-[50px] '>

                <div className='  mt-[80px]   w-[375px] h-[54px]  '>
                    <h1 className='  w-[375px] h-[54px] hover:text-blue-500  font-poppins font-semibold text-[36px] leading-[36px] '>Get In Touch With Us</h1></div>
                <div className=' w-[644px]  hover:text-blue-500  h-[48px] '><p className="text-[#9F9F9F] font-poppins font-normal text-[16px] leading-[24px] text-center ">
                    For more information about our products & services, please feel free to drop us an email. Our staff is always here to help you out. Do not hesitate!
                </p>

                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12  h-[923px] mt-[30px] mx-[200px]  '>
                    <div className=' w-[393px] h-[537px] '>
                        <div className="flex flex-col items-start gap-4">

                            {/* Address */}
                            <div className="flex ml-[60px] items-start gap-8 mt-[40px]">
                                <FaLocationDot className="text-3xl hover:text-blue-500 text-black" />
                                <div className='w-[212px]'>
                                    <h3 className="font-semibold font-poppins text-[24px] leading-[36px] hover:text-blue-500 ">Address</h3>
                                    <p className='font-poppins font-normal text-[16px] leading-[24px] hover:text-blue-500'>236 5th SE Avenue, New York NY10000, United States</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex  ml-[60px] items-start mt-[40px] gap-4">
                                <FaPhoneAlt className="text-3xl hover:text-blue-500 text-black" />
                                <div>
                                    <h3 className="font-semibold font-poppins text-[24px] leading-[36px] hover:text-blue-500  ">Phone</h3>
                                    <p className='font-poppins font-normal text-[16px] leading-[24px] text-[#000000] '>Mobile: (+84) 546-6789</p>
                                    <p className='font-poppins font-normal text-[16px] leading-[24px] text-[#000000] '>Hotline: (+84) 456-6789</p>
                                </div>
                            </div>


                            <div className="flex  ml-[60px] items-start mt-[40px] gap-4">
                                <GoClockFill className="text-3xl hover:text-blue-500 text-black" />
                                <div className='w-[212px]'>
                                    <h3 className="font-semibold font-poppins text-[24px] leading-[36px] hover:text-blue-500 ">Working Time</h3>
                                    <p className='font-poppins font-normal text-[16px] leading-[24px] text-[#000000] '>Monday-Friday: 9:00 - 22:00</p>
                                    <p className='font-poppins font-normal text-[16px] leading-[24px] text-[#000000] '>Saturday-Sunday: 9:00 - 21:00</p>
                                </div>
                            </div>
















                        </div>
                    </div>
                    <div className=' w-[635px] h-[923px] '>
                        <div className='w-[531px] h-[734px]'>
                            <form className="space-y-6  p-8 ">
                                <div>
                                    <label htmlFor="name" className="block font-medium  font-poppins text-[16px] leading-[24px] mb-2">Your Name</label>
                                    <input type="text" id="name" className="w-full p-5 mt-[20px] border rounded-xl" placeholder="Your name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block font-medium mt-[20px] font-poppins text-[16px] leading-[24px] mb-2">Email Address</label>
                                    <input type="email" id="email" className="w-full p-5 border rounded-xl mt-[20px]" placeholder="Your email" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block font-medium mt-[20px] font-poppins text-[16px] leading-[24px] mb-2">Subject</label>
                                    <input type="text" id="subject" className="w-full  p-5 mt-[20px] border rounded-xl" placeholder="This is optional" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block font-medium font-poppins text-[16px] leading-[24px] mb-2">Message</label>
                                    <textarea id="message" rows={3} className="w-full  p-5 mt-[20px] border rounded-xl" placeholder="Hi! I'd like to ask about..." />
                                </div>
                                <button type="submit" className="w-[180px] text-black py-2 border border-[#9F9F9F] rounded-xl font-normal font-poppins hover:text-blue-500">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            {/* Main Contact Section */}

            {/* Footer Section */}
            <div className='  bg-[#FAF4F4] mt-[80px] mx-[30px]'>

                <div className='flex items-center justify-center  gap-[60px]   h-[300px] w-full mx-[30px]'>
                    <div className=' w-[376px]  h-[108px]  bg-[#FAF4F4] '>
                        <h1 className='font-poppins text-[32px] font-medium text-[#000000] leading-[48px] '>Free Delivery</h1>
                        <p>For all oders over $50, consectetur adipim scing elit.</p>
                    </div>
                    <div className='  w-[376px]  h-[108px]'>
                        <h1 className='font-poppins text-[32px] font-medium text-[#000000] leading-[48px] '>90 Days Return</h1>
                        <p>If goods have problems, consectetur adipim scing elit.</p>
                    </div>

                    <div className='  w-[376px]  h-[108px]'>
                        <h1 className='font-poppins text-[32px] font-medium text-[#000000] leading-[48px] '>Secure Payment</h1>
                        <p className='font-poppins font-normal text-[20px] leading-[30px] text-[#9F9F9F] '>100% secure payment, consectetur adipim scing elit.</p>
                    </div>
                </div>
            </div>




            <div className="max-w-7xl mx-auto py-16 px-6">
                {/* Heading */}


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Section - Contact Details */}
                    <div className="space-y-8">



















                    </div>



                </div>
            </div>



        </div>
    );
};

export default Contact;
