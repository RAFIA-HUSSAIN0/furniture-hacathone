import React from 'react';
import Link from 'next/link';
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { BsViewList } from "react-icons/bs";

const Filter = () => {
    return (
        <div>
            {/* Filter and Sorting Section */}
            <nav className='w-full flex flex-col justify-between  bg-[#FAF4F4]  border-2 border-[#9F9F9F]  mx-[30px] h-[100px]  mt-[20px] shadow-md '>
                <div className=' flex  justify-between gap-4    border-[0px]   '>
                    <div className=' md:inline-flex  lg:flex  hidden mx-[70px] items-center gap-4   border-[0px] '>

                        <Link className='w-[30px] h-[30px] px-5 mt-4 ' href="href"><HiAdjustmentsHorizontal /></Link>
                        <Link className='w-[40px] h-[48px] mt-[25px] ' href="href"> Filter</Link>

                        <Link className='w-[38px] h-[28px] mt-[14px] ' href="href"><HiMiniSquares2X2 /></Link>


                        <Link className='w-[24px] h-[24px] mt-[10px]  ' href="href"><BsViewList /></Link>

                        <Link className=' mb-[20px]  ml-[40px] space-x-8  flex justify-center font-sans ' href="href"> <span className='text-[50px] text-[#9F9F9F]'> | </span>
                            <span className='text-black mt-[35px] space-x-5'>Showing 1–16 of 32 results</span> </Link>
                    </div>
                    <div className=' flex  items-center gap-0  mx-[80px] border-[0px]'>
                        <Link className='py-[30px] px-[0px] space-x-6' href="href"> <span>Show</span>
                            <span className='py-[15px] px-[20px] rounded-md bg-white'>16</span></Link>

                        <Link className='py-[30px] px-[50px] space-x-6' href="href"> <span>Short by</span>
                            <span className='py-[15px] px-[38px] rounded-md bg-white'>Default</span></Link>

                    </div>

                </div>
            </nav>

        </div>
    )
}

export default Filter
