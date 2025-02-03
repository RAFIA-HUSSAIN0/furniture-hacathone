import React from 'react'

const Payment = () => {
    return (
        <div>
            <div className="bg-[#FAF4F4] mt-[80px] mx-[30px]">
                <div className="flex justify-center items-center gap-[60px] h-[300px] w-full  mx-[30px]">
                    <div className="w-[376px] h-[108px] bg-[#FAF4F4]">
                        <h1 className="font-poppins text-[32px] font-medium hover:text-blue-500 text-[#000000] leading-[48px]">Free Delivery</h1>
                        <p>For all orders over $50, consectetur adipim scing elit.</p>
                    </div>
                    <div className="w-[376px] h-[108px]">
                        <h1 className="font-poppins text-[32px] font-medium hover:text-blue-500 text-[#000000] leading-[48px]">90 Days Return</h1>
                        <p>If goods have problems, consectetur adipim scing elit.</p>
                    </div>

                    <div className="w-[376px] h-[108px]">
                        <h1 className="font-poppins text-[32px] font-medium hover:text-blue-500 text-[#000000] leading-[48px]">Secure Payment</h1>
                        <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Payment
