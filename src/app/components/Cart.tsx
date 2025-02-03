import React from 'react';
import { BsBagX, BsFillXCircleFill } from 'react-icons/bs'
import Image from 'next/image';


const Cart = () => {

    return (
        <div className='cart-wrapper'>
            <div className='cart-container'>
                <div className='w-[350px] h-[209px] '>

                    <div className='flex justify-between'>
                        <h1 className='font-poppins font-semibold text-[24px] leading-[36x] text-[#000000] '>Shopping cart</h1>
                        <button className='cart-heading'> <BsBagX className='text-[#9F9F9F] mr-[20px] hover:text-blue-500 text-[26px] ' /></button>
                    </div>
                    <div className='w-[350px] h-[105px] flex gap-[20px] mt-[30px] border-t '>
                        <div className='w-[108px] h-[105px] border-[#D9D9D9] mt-[40px]  rounded-xl bg-[#f6e6b3] '> <Image src="/images/Bed.jpg" alt="Bed" width={108} height={105} />
                        </div>
                        <div className='w-[130px] h-[56px] mt-[60px]  '>
                            <h1 className=' mb-[5px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]  '>Asgaard sofa</h1>

                            <span className='font-poppins w-[130px]   h-[24px] font-light text-[16px] leading-[24px] text-[#000000] '>1</span>
                            <span className=' font-poppins font-light text-[12px] leading-[18px] text-[#000000]  mx-[10px] '>x</span>
                            <span className='text-[#B88E2F] text-[12px] leading-[18px] font-poppins font-medium '>Rs. 250,000.00</span>


                        </div>
                        <div className='mt-[80px] ml-[40px] '>
                            <span className=''><BsFillXCircleFill className='text-[#9F9F9F] hover:bg-blue-500' /></span>
                        </div>
                    </div>

                </div>
                <div className='mt-[350px]  '>
                    <ul className='flex space-x-[100px]  '>
                        <li className='text-[#000000] text-[16px] leading-[24px] font-poppins font-normal '>subtotal</li>
                        <li className='text-[#B88E2F] text-[16px] leading-[24px] font-poppins font-semibold '> Rs. 250,000.00</li>
                    </ul>
                </div>

                <div className='w-[290px]  h-[31px] border-t mt-[20px]  '>
                    <button className='rounded-xl border-[1px] hover:text-blue-500 mt-[20px] w-[131px] h-[31px] font-poppins font-normal text-[12px] leading-[18px] text-[#000000] '>view cart</button>
                    <button className='rounded-xl border-[1px] hover:text-blue-500  w-[131px] h-[31px] ml-[25px] font-poppins font-normal text-[12px] leading-[18px] text-[#000000] '>checkout</button>
                </div>
            </div>

        </div >
    )
}

export default Cart
