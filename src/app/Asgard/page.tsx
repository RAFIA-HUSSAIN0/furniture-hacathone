"use client"


import Link from 'next/link';
import Image from 'next/image';
import { FaStarHalf } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import Header from '../components/Header';


const page = () => {
    return (
        <div>
            <Header />
            <div className='h-[820px] mx-[30px] '>

                <div className='flex justify-center h-[730px] mx-[30px]  '>
                    <div className='flex space-x-5 mt-[20px] w-[553px] h-[500px] mx-[30px]  '>
                        <div className='w-[76px] mt-[20px] h-[416px]  '>
                            <Image src="/images/set.png" alt="alt" width={76} height={80} className='bg-[#FFF9E5] mt-[20px] ' />
                            <Image src="/images/two.png" alt="alt" width={76} height={80} className='bg-[#FFF9E5] mt-[20px]' />
                            <Image src="/images/Three.png" alt="alt" width={76} height={80} className='bg-[#FFF9E5] mt-[20px] ' />
                            <Image src="/images/four.png" alt="alt" width={76} height={80} className='bg-[#FFF9E5] mt-[20px] ' />
                        </div>
                        <div className='mt-[20px]'><Image src="/images/Bed.png" alt="alt" width={481} height={391} className='bg-[#FFF9E5] mt-[20px] ' /></div>

                    </div>
                    <div className=' mt-[20px]h-[730px] mt-[40px] w-[606.01px] mx-[30px] '>
                        <div className='h-[63px] w-[284px] hover:text-blue-500 font-normal font-poppins text-[#000000] text-[42px] leading-[63px] '>Asgaard sofa</div>
                        <div className='h-[63px] w-[282px]  font-poppins font-medium text-[24px] leading-[36px] mt-[0px] text-[#9F9F9F] '>Rs. 250,000.00</div>
                        <div className='flex space-x-5'>
                            <h1 className='flex text-[#FFDA5B]  font-normal font-poppins gap-[5px] text-[13px] leading-[19.5]'  >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf /></h1>
                            <p className=' font-poppins font-medium text-[#9F9F9F] text-xl ' >|</p>
                            <p className='font-poppins font-medium text-[13px] leading-[19.5px] text-[#9F9F9F] '>5 Customer Review</p>
                        </div>
                        <div className='w-[424px] h-[100px] mt-[10px] font-poppins font-normal text-[#000000] text-[13px] leading-[19.5px] ' >
                            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                        </div>
                        <div className='w-[123px] h-[63px] '>
                            <p className='font-poppins  mb-[20px]  font-normal  text-[14px] leading-[21px] text-[#9F9F9F] '>size</p>
                            <button className='w-[30px] h-[30px] rounded-[5px] bg-[#FBEBB5] text-[#000000] font-poppins font-normal text-[13px] leading-[19.5px]   '>L</button>
                            <button className='w-[30px] h-[30px] mx-[10px] rounded-[5px] bg-[#FAFAF4] text-[#000000]  font-poppins font-normal text-[13px] leading-[19.5px]   '>XL</button>
                            <button className='w-[30px] h-[30px] rounded-[5px] bg-[#FAFAF4] text-[#000000]  font-poppins font-normal text-[13px] leading-[19.5px]   '>XS</button>
                        </div>
                        <div className='w-[129px]  space-x-3 mt-[20px] h-[63px] '>
                            <p className='font-poppins font-normal  text-[14px] leading-[21px] mb-[20px] text-[#9F9F9F] '>color</p>
                            <button className='w-[30px] h-[30px] rounded-full bg-[#816DFA]    '></button>
                            <button className='w-[30px]   h-[30px] rounded-full bg-[#000000]    '></button>
                            <button className='w-[30px] h-[30px] rounded-full bg-[#CDBA7B]    '></button>
                        </div>
                        <div className=' mt-[20px] '>
                            <button className='w-[123px] h-[64px] rounded-lg border border-[#9F9F9F] text-[#000000S] font-poppins font-medium  text-[16px] leading-[24px] '> <span>-</span><span className='mx-[18px] '>1</span> <span>+</span></button>
                            <Link href="/Carte"><button className='w-[215px]  ml-[20px] h-[64px] rounded-lg border border-[#9F9F9F] text-[#000000S] font-poppins font-normal  text-[20px] hover:text-blue-500 leading-[30px] '> Add To Cart</button></Link>
                        </div>
                        <div className='border-t  mt-[40px]  '>
                            <ul className='flex  mt-[40px] space-x-4 text-[#9F9F9F] '>
                                <li className='pr-[80px]'>SKU</li>
                                <li >:</li>
                                <li>SS001</li>
                            </ul>
                        </div>

                        <div>
                            <ul className='flex text-[#9F9F9F]  mt-[10px]  space-x-4'>
                                <li className='pr-[35px]'>Category</li>
                                <li>:</li>
                                <li>Sofas</li>
                            </ul>
                        </div>

                        <div>
                            <ul className=' text-[#9F9F9F]  mt-[10px]  flex space-x-4'>
                                <li className='pr-[72px]' >Tags</li>
                                <li>:</li>
                                <li>Sofa, Chair, Home, Shop</li>
                            </ul>
                        </div>

                        <div>
                            <ul className='flex space-x-4 mt-[10px] '>
                                <li className='pr-[66px] text-[#9F9F9F] '>Share</li>
                                <li className='text-[#9F9F9F] '>:</li>
                                <li className='flex space-x-5' >
                                    <FaFacebook />
                                    <FaLinkedin />
                                    <AiFillTwitterCircle className=' ' />


                                </li>
                                <li>
                                    <BsSuitHeart className='text-red-600 text-5xl   mx-[250px] ' />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



            </div>


            <div className='w-full h-[744px] mx-[30px]  '>
                <div className='w-[649px] h-[36p]  flex justify-between ml-[600px] mt-[20px] items-center  '>
                    <p className='font-poppins font-normal text-[24px] leading-[36px] text-[#000000] '>Description</p>
                    <p className='font-poppins font-normal text-[24px] leading-[36px] text-[#9F9F9F] '>Additional Information</p>
                    <p className='font-poppins font-normal text-[24px] leading-[36px] text-[#9F9F9F] '>Reviews [5]</p>
                </div>
                <div className='w-[1026px]  mt-[20px] ml-[400px]  h-[274px] text-[#9F9F9F] '>
                    <div className='font-poppins font-normal text-[16px] leading-[36px] text-[#9F9F9F] mt-[20px] '>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</div>
                    <div className='font-poppins font-normal text-[16px] leading-[36px] text-[#9F9F9F] mt-[20px] '>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</div>
                </div>
                <div className='w-[1239px] mt-[20px] ml-[290px]  h-[348px]  flex justify-center space-x-5'>
                    <div className='w-[605px] h-[348px] bg-[#FFF9E5] '>
                        <Image src="/images/Streat.png" alt="alt" width={605} height={348} />

                    </div>
                    <div className='w-[605px] h-[348px] bg-[#FFF9E5]'>
                        <Image src="/images/Corner.png" alt="alt" width={605} height={348} />

                    </div>

                </div>

            </div>
            <div className='w-[] h-[777px] mx-[30px] flex flex-col '>
                <div className='w-[309px] h-[54px] ml-[800px] mt-[70px] text-[#000000] font-poppins font-medium text-center  text-[36px] hover:text-blue-500 leading-[36px] '><h1>Related Products</h1> </div>

                <div className='flex justify-between  h-[397px]  sm:flex-col-1  '>

                    <div className=' w-[297px] h-[372px] '>
                        <div className=' w-[297px] h-[287px]'>
                            <Image src="/images/Simple.png" alt="Simple" width={290} height={290} />
                        </div>
                        <div className=' w-[200px] mt-[10px] h-[71px]'>
                            <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal text-[16px] text-black leading-[24px] '>Trenton modular sofa_3</p>
                            <h2 className='hover:text-blue-500 font-poppins mt-[10px] font-medium text-[24px] leading-[36px] '>Rs. 25,000.00</h2>
                        </div>
                    </div>

                    <div className=' w-[297px] h-[397px] '>
                        <div className='w-[297px] h-[297px]'>
                            <Image src="/images/Chairs.png" alt="alt" width={290} height={290} />
                        </div>
                        <div className=' w-[212px] h-[91px] mt-[10px]'>
                            <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal text-[16px] text-black leading-[24px] '>Granite dining table with dining chair</p>
                            <h2 className='hover:text-blue-500 font-poppins  font-medium text-[24px] leading-[36px] '>Rs. 25,000.00</h2>
                        </div>
                    </div>

                    <div className=' w-[297px] h-[397px] '>
                        <div className=' w-[297px] h-[297px]'>
                            <Image src="/images/Sample.png" alt="alt" width={290} height={290} />
                        </div>
                        <div className=' w-[212px] h-[91px] mt-[10px]'>
                            <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal text-[16px] text-black leading-[24px] '>Outdoor bar table and stool</p>
                            <h2 className='hover:text-blue-500 font-poppins  font-medium text-[24px] leading-[36px] '>Rs. 25,000.00</h2>
                        </div>
                    </div>

                    <div className=' w-[297px] h-[397px] '>
                        <div className=' w-[297px] h-[297px]'>
                            <Image src="/images/Mez.png" alt="alt" width={290} height={290} />
                        </div>
                        <div className='w-[212px] h-[91px] mt-[10px]'>
                            <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal text-[16px] text-black leading-[24px] '>Plain console with teak mirror</p>
                            <h2 className='hover:text-blue-500 font-poppins font-medium text-[24px] leading-[36px] '>Rs. 25,000.00</h2>
                        </div>
                    </div>
                </div>

                <button className="mt-[130px] text-[#000000] font-poppins font-medium text-[20px] leading-[30px] underline underline-offset-[30px] ">View More</button>


            </div>





        </div>
    )
}

export default page

