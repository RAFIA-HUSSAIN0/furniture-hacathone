import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import Link from 'next/link';
import { FaRegHeart } from 'react-icons/fa6';
import { IoSearchOutline, IoPersonOutline, IoAlert } from 'react-icons/io5';
import Image from 'next/image';
import { SlArrowRight } from "react-icons/sl";
import Header from '../components/Header';



const About = () => {
    return (
        <div>
            <Header />
            {/*background pic*/}

            <div className="bg-cover bg-center h-[300px] flex flex-col items-center justify-center" style={{ backgroundImage: "url('/images/Rectangle.png')" }}>
                <Image src="/images/Meubel.png" alt="Meubel" width={77} height={77} className='mt-[60px]  ' />
                <div className=' '>

                    <div> <h1 className='font-poppins ml-[60px] font-medium   text-[48px] hover:text-blue-500 leading-[72px] text-[#000000] '>Blog</h1></div>

                    <div className='flex   justify-items-center ml-[20px] mb-[60px] w-[205px]  h-[24px]' >
                        <p className='font-poppins ml-12 hover:text-blue-500 font-medium text-[16px] text-[#000000] leading-[24px] '>Home</p>
                        <p className=' '><SlArrowRight className='w-[14px] h-[8px] hover:text-blue-500 mt-[10px]' /></p>
                        <p className='font-poppins font-light text-[16px] leading-[24px] text-[#000000] hover:text-blue-500 '>Blog</p></div>
                </div>
            </div >

            <div className='h-[2710px] flex justify-center space-x-7 mt-[90px] '>
                <div>
                    <Image src="/images/Blogpic.png" alt="alt" width={820} height={794} />
                </div>
                <div>
                    <div className='w-[393px] h-[537px] '>
                        <div className=' flex flex-col w-[311px] h-[58px]  mt-[40px] ml-[20px] ' >

                            <input type="text" id=" Additional information" className="w-[36 3px] h-[535px]  p-5 mt-[5px] border rounded-xl" placeholder="Additional information" />
                        </div>
                        <div>
                            <ul className='mt-[30px] mx-12'>
                                <i className='font-poppins font-medium text-black text-[24px]'>Cetegories</i>
                            </ul>

                            <ul className='flex justify-between mt-[30px] mx-12'>
                                <li className='font-poppins font-normal text-[#9F9F9F] text-[16px] '>font-[</li>
                                <li className='font-poppins font-normal text-[#9F9F9F] text-[16px] '>2</li>
                            </ul>

                            <ul className='flex justify-between mt-[30px] mx-12'>
                                <li className='font-poppins font-normal text-[#9F9F9F] text-[16px] '>Design</li>
                                <li className='font-poppins font-normal text-[#9F9F9F] text-[16px] '>8</li>
                            </ul>

                            <ul className='flex justify-between mt-[30px] mx-12'>
                                <li className='font-poppins font-normal text-[#9F9F9F] text-[16px] '>Handmade</li>
                                <li className='font-poppins font-normal text-[#9F9F9F] text-[16px] '>7</li>
                            </ul>

                            <ul className='flex justify-between mt-[30px] mx-12'>
                                <li className='font-poppins font-normal text-[#9F9F9F] text-[16px] '>Interior</li>
                                <li className='font-poppins font-normal text-[#9F9F9F] text-[16px] '>7</li>
                            </ul>

                            <ul className='flex justify-between mt-[30px] mx-12'>
                                <li className='font-poppins font-normal text-[#9F9F9F] text-[16px] '>Wood</li>
                                <li className='font-poppins font-normal text-[#9F9F9F] text-[16px] '>6</li>
                            </ul>
                        </div>








                    </div>
                    <div className=''>
                        <Image src="/images/Blogblog.png" alt="alt" width={393} height={650} />
                    </div>
                </div>

            </div>



            <div className='flex justify-center  '>
                <div className='flex justify-between text-center items-center mt-[70px] w-[392px] h-[60px]'>
                    <button className='hover:text-blue-500 bg-[#FBEBB5] flex items-center justify-center font-poppins font-normal text-[20px]  leading-[30px] py-[30px] px-[30px] w-[7px] h-[30px] rounded-[10PX] '>1</button>
                    <button className='hover:text-blue-500 bg-[#FFF9E5] flex items-center justify-center font-poppins font-normal text-[20px] leading-[30px] py-[30px] px-[30px] w-[7px] h-[30px] rounded-[10PX] '>2</button>
                    <button className='hover:text-blue-500 bg-[#FFF9E5] flex items-center justify-center font-poppins font-normal text-[20px] leading-[30px] py-[30px] px-[30px] w-[7px] h-[30px] rounded-[10PX] '>3</button>
                    <button className='hover:text-blue-500 bg-[#FFF9E5] flex items-center justify-center font-poppins font-normal text-[20px] leading-[30px] py-[30px] px-[60px] w-[4px] h-[30px] rounded-[10PX] '>Next</button>
                </div>
            </div>


            {/* Footer Section */}
            <div className='  bg-[#FAF4F4]  mx-[30px]'>

                <div className='flex items-center justify-center gap-[60px]   h-[300px] w-full mx-[30px]'>
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


        </div>
    )
}

export default About
