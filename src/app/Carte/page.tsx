import React from 'react'
import { BsCart3 } from 'react-icons/bs';
import Link from 'next/link';
import { FaRegHeart } from 'react-icons/fa6';
import { IoSearchOutline, IoPersonOutline, IoAlert } from 'react-icons/io5';
import Image from 'next/image';
import { SlArrowRight } from "react-icons/sl";
import Header from '../components/Header';


const Cart = () => {
    return (
        <div>
            <Header />

            {/*hero*/}

            <div className="bg-cover bg-center h-[300px] flex flex-col items-center justify-center" style={{ backgroundImage: "url('/images/Rectangle.png')" }}>
                <Image src="/images/Meubel.png" alt="Meubel" width={77} height={77} className='mt-[60px]  ' />
                <div className=' '>

                    <div> <h1 className='font-poppins font-medium   text-[48px] hover:text-blue-500 leading-[72px] text-[#000000] '>Cart</h1></div>

                    <div className='flex justify-items-center mb-[60px] w-[115px]  h-[24px]' > <p className='font-poppins hover:text-blue-500 font-medium text-[16px] text-[#000000] leading-[24px] '>Home</p>
                        <p className=' '><SlArrowRight className='w-[14px] h-[8px] hover:text-blue-500 mt-[10px]' /></p>
                        <p className='font-poppins font-light text-[16px] leading-[24px] text-[#000000] hover:text-blue-500 '>cart</p></div>
                </div>
            </div >
            <div className='h-[525px] mx-[30px] '>
                <div className='h-[390px] grid grid-cols-2 gap-[500px]   mt-[70px] mx-[250px]'>
                    <div className='h-[216px] w-[817px]    '>
                        <nav className='bg-[#FFF9E5] w-[817px] pt-[20px]   h-[55px] '>
                            <ul className='flex justify-between   mx-[100px] '>
                                <Link href="Product ">Product</Link>
                                <Link className='ml-[90px]  ' href="Price">Price</Link>
                                <Link className='ml-[120px] ' href="Quantity">Quantity</Link>
                                <Link className='mr-[40px] ' href="Subtotal">Subtotal</Link>
                            </ul>
                        </nav>
                        <div className='flex justify-between mt-[50px] '>
                            <div className=' flex justify-between '>
                                <div className='h-[106px] w-[106px] flex items-center  '>
                                    <Image src="/images/Bed.png" alt="bed" width={106} height={106} />
                                </div>
                                <div className='w-[573px] h-[25px] mt-[40px] '>
                                    <ul className='flex justify-evenly items-center '>
                                        <li className='text-[16px] font-poppins font-normal leading-[24px] text-[#9F9F9F] hover:text-blue-500'>Asgaard sofa</li>
                                        <li className='text-[16px] font-poppins font-normal leading-[24px] text-[#9F9F9F] hover:text-blue-500'>Rs. 250,000.00</li>
                                        <li className='  px-[10px] hover:text-blue-500 rounded-md'>1</li>
                                        <li className='hover:text-blue-500'>Rs. 250,000.00</li>
                                        <li><Image src="/images/Ant.png" alt="ant" width={28} height={28} /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='border w-[393px] h-[390px] bg-[#FFF9E5] flex flex-col items-center '>
                        <div><h1 className='font-poppins py-5 font-semibold text-[32px] leading-[48px] text-[#000000] hover:text-blue-500 '>  Cart Totals</h1></div>

                        <div >
                            <ul className='flex space-x-16  py-5 items-center'>
                                <li className='text-[16px] font-poppins font-medium leading-[24px] text-[#000000] hover:text-blue-500'>Subtotal</li>
                                <li className='text-[16px] font-poppins font-normal leading-[30px] text-[#9F9F9F]  hover:text-blue-500'>Rs. 250,000.00</li>

                            </ul>
                        </div>

                        <div>
                            <ul className='flex space-x-16 py-5 '>
                                <li className='text-[16px] font-poppins font-medium leading-[24px] text-[#000000] hover:text-blue-500'>Total</li>

                                <li className='text-[20px] font-poppins font-medium leading-[24px] text-[#B88E2F] hover:text-blue-500'>Rs. 250,000.00</li>
                            </ul>
                        </div>
                        <button className='font-poppins font-normal text-[20px] leading-[30px] text-[#000000] border border-[#000000] rounded-[10px] w-[222px] mt-[20px] h-[60px] hover:text-blue-500 item-center '><Link href="/Checkout">Check Out</Link></button>
                    </div>



                </div>

            </div>


            <div className="bg-[#FAF4F4]  mx-[30px]">
                <div className="flex justify-center items-center gap-[60px] h-[300px] w-full mx-[30px]">
                    <div className="w-[376px] h-[108px] bg-[#FAF4F4]">
                        <h1 className="font-poppins text-[32px] font-medium text-[#000000] leading-[48px] hover:text-blue-500">Free Delivery</h1>
                        <p>For all orders over $50, consectetur adipim scing elit.</p>
                    </div>
                    <div className="w-[376px] h-[108px]">
                        <h1 className="font-poppins text-[32px] font-medium text-[#000000] leading-[48px] hover:text-blue-500">90 Days Return</h1>
                        <p>If goods have problems, consectetur adipim scing elit.</p>
                    </div>

                    <div className="w-[376px] h-[108px]">
                        <h1 className="font-poppins text-[32px] font-medium text-[#000000] leading-[48px] hover:text-blue-500">Secure Payment</h1>
                        <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#9F9F9F] hover:text-blue-500">100% secure payment, consectetur adipim scing elit.</p>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Cart
