import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="h-[555px] mx-[30px] lg:mx-[50px]">
            <div className="ml-[80px] h-[419px] mt-[80px] mx-[80px] lg:ml-[100px] lg:mx-[100px]">
                <div className="h-[312px] mt-[30px] mx-[220px] lg:mx-[250px]">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                        {/* Address Section */}
                        <div className="text-[#9F9F9F] font-poppins font-normal text-[16px] leading-[24px] w-[285px] h-[72px]">
                            <p>400 University Drive Suite 200 Coral Gables,</p>
                            <p>FL 33134 USA</p>
                        </div>

                        {/* Links and Newsletter */}
                        <div className="w-full lg:w-[710px] h-auto flex flex-wrap lg:flex-nowrap justify-between mt-6 lg:mt-0">
                            {/* Links */}
                            <div className="w-[68px] h-auto">
                                <ul>
                                    <li className="font-poppins font-medium text-[16px] leading-[24px] text-[#9F9F9F]">Links</li>
                                    <li className="font-poppins font-medium text-[16px] leading-[24px] mt-12">Home</li>
                                    <li className="font-poppins font-medium text-[16px] leading-[24px] mt-12">Shop</li>
                                    <li className="font-poppins font-medium text-[16px] leading-[24px] mt-12">About</li>
                                    <li className="font-poppins font-medium text-[16px] leading-[24px] mt-12">Contact</li>
                                </ul>
                            </div>

                            {/* Help */}
                            <div className="w-[144px] h-auto mt-6 lg:mt-0">
                                <ul>
                                    <li className="font-poppins font-medium text-[16px] leading-[24px] text-[#9F9F9F]">Help</li>
                                    <li className="font-poppins font-medium text-[16px] leading-[24px] mt-12">Payment Options</li>
                                    <li className="font-poppins font-medium text-[16px] leading-[24px] mt-12">Return</li>
                                    <li className="font-poppins font-medium text-[16px] leading-[24px] mt-12">Privacy Policies</li>
                                </ul>
                            </div>

                            {/* Newsletter */}
                            <div className="w-full sm:w-[286px] h-auto mt-6 lg:mt-0">
                                <h3 className="font-poppins font-medium text-[#9F9F9F] text-[16px] leading-[24px]">Newsletter</h3>
                                <div className="mt-12 underline flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Enter Your Email Address"
                                        className="text-gray-500 w-full lg:w-auto"
                                    />
                                    <span className="text-black font-poppins text-[14px] leading-[21px] font-semibold">
                                        SUBSCRIBE
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="flex flex-col lg:flex-row justify-start items-center border-t-2 pt-[60px] font-poppins font-normal text-[16px] leading-[16px] mt-[70px] h-[59px]">
                        2022 Meubel House. All rights reserved
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
