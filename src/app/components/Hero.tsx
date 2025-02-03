"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineWatchLater } from "react-icons/md";
import { HiMiniCalendar } from "react-icons/hi2";
import { client } from '@/sanity/lib/client';
import { four } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';






const Hero = () => {

    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        async function fetchProducts() {
            const fetchedProducts: Product[] = await client.fetch(four)
            setProducts(fetchedProducts);
        }
        fetchProducts()
    }, [])

    return (
        <>
            {/* Navigation */}


            {/* Hero Section */}
            <div className="bg-[#FBEBB5] flex  flex-col  items-center lg:flex-row  px-4 ">
                {/* Text Content */}
                <div className="text-left sm:w-[400px] md:w-[500px] lg:w-[680px]  lg:h-[276px] mx-[30px] lg:ml-[280px]  px-3 ">
                    <h1 className="text-[30px] sm:text-[30px] md:text-[40px] lg:text-[65px]  hover:text-blue-500 font-poppins leading-[50px] md:leading-[80px] lg:leading-[120px] font-medium">
                        Rocket Single Seater
                    </h1>
                    <p className="underline underline-offset-[20px] mt-8   text-xl font-poppins hover:text-blue-500">
                        <Link href="/Shop">Shop Now </Link></p>
                </div>

                {/* Hero Image */}
                <div className="w-full mx-w-[500px] md:max-w-[700px] lg:max-w-[800px] mx-[auto] ">
                    <Image
                        src="/images/Single.png"
                        alt="Rocket Single Seater"
                        width={800}
                        height={600}
                        className="mx-auto"
                    />
                </div>
            </div>



            {/* Product Section */}
            <section className="bg-[#FAF4F4] grid grid-cols-1 sm:grid-cols-2 gap-8 p-8">
                {/* Product 1 */}
                <div className="text-center">
                    <Image
                        src="/images/Table.png"
                        alt="Side Table"
                        width={500}
                        height={400}
                        className="mx-auto"
                    />
                    <h2 className="font-poppins font-semibold text-2xl sm:text-4xl hover:text-blue-500 mt-4">Side Table</h2>
                    <p className="underline underline-offset-[30px] mt-2 text-sm hover:text-blue-500 sm:text-base">
                        <Link href="/Shop"> View More</Link></p>


                </div>

                {/* Product 2 */}
                <div className="text-center">
                    <Image
                        src="/images/Mask.png"
                        alt="Decorative Mask"
                        width={500}
                        height={400}
                        className="mx-auto"
                    />
                    <h2 className="font-poppins font-semibold text-2xl sm:text-4xl hover:text-blue-500 mt-4">Side table</h2>
                    <p className="underline underline-offset-[30px] mt-2 text-sm hover:text-blue-500 sm:text-base ">
                        <Link href="/Shop"> View More
                        </Link></p>
                </div>
            </section>
            <div className="bg-white">
                {/* Top Picks Section */}
                <div className="text-center py-8 ">
                    <h2 className="text-black hover:text-blue-500 font-poppins font-semibold leading-3 sm:text-2xl">Top Picks For You</h2>
                    <p className="text-[##9F9F9F] font-poppins leading-[24px] text-[16px] font-medium hover:text-blue-500 mt-2">
                        Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  mt-6 px-8'>
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className=' rounded-lg  p-4 hover:shadow-lg transition duration-200 '
                            >
                                {product.image && (
                                    <Image
                                        src={urlFor(product.image).url()}
                                        alt={product.name || "Product Image"}
                                        width={400} height={300}
                                        priority className="w-full  h-48 object-cover rounded-md"
                                    />
                                )}


                                <h2 className='text-lg font-semibold mt-4'>{product.name}</h2>
                                <p className='text-gray-500 mt-2'>
                                    {product.price ? `$${product.price}` : "Price not available"}
                                </p>
                            </div>
                        ))}
                    </div>
                    <Link href="/Shop"> <button className="mt-6 text-[#000000] hover:text-blue-500 font-poppins font-medium text-[20px] leading-[30px] underline underline-offset-[30px] ">View More</button></Link>
                </div>

                {/* Asgaard Sofa Section */}
                <div className="bg-[#FFF9E5] mt-[80px] py-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center px-8">
                        <div>
                            <Image src="/images/sofa1.jpg" alt="Asgaard Sofa" width={983} height={799} />

                        </div>
                        <div className="text-center sm:text-left mt-4 sm:mt-0 sm:ml-8">
                            <p className="text-black-500 text-[24px] leading-[36px] font-medium font-poppins">New Arrivals</p>
                            <h2 className="font-bold font-poppins  text-[48px] leading-[72px] hover:text-blue-500 sm:text-4xl">Asgaard Sofa</h2>
                            <button className="mt-4 hover:text-blue-500 text-black font-normal text-[20px] leading-[30px] px-6 py-2 rounded border border-black font-poppins">
                                <Link href="/Asgard"> Order Now </Link></button>

                        </div>
                    </div>
                </div>


                {/* Blogs Section */}
                <div className="text-center py-8">
                    <Link href="/About"><h2 className="text-2xl hover:text-blue-500 font-poppins font-medium text-[36px] leading-[54px]">Our Blogs</h2></Link>
                    <p className=" text-[9F9F9F] font-poppins font-medium text-[16px] leading-[24px] mt-2">
                        Find a bright idea to suit your taste with our great selection.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-0 px-8">
                        {/* Blog Card 1 */}
                        <div className=" p-4 rounded-lg">
                            <Image src="/images/blog1.png" alt="Blog 1" width={400} height={300} className="w-full h-auto" />

                            <p className="font-normal text-[20px] leading-[30px]  font-poppins mt-2">Going all-in with millennial design</p>

                            <button className="mt-4 underline underline-offset-[14px] text-[24px] font-medium font-poppins  text-black">Read More</button>


                            <div className='flex justify-center leading-[50px]'>
                                <div className='flex items-center space-x-1'>
                                    <span className='material-icons text-xl'><MdOutlineWatchLater /></span>
                                    <p >5 min </p>
                                </div>
                                <div className='flex items-center space-x-1 ml-4'>
                                    <span className='material-icons text-xl'> <HiMiniCalendar /></span>
                                    <p>12 Oct 2022</p>
                                </div>


                            </div>

                        </div>
                        {/* Blog Card 2 */}
                        <div className=" p-4 rounded-lg">
                            <Image src="/images/blog2.png" alt="Blog 2" width={400} height={300} className="w-full h-auto" />
                            <p className="font-normal text-[20px] leading-[30px]  font-poppins mt-2">Going all-in with millennial design</p>
                            <button className="mt-4 underline underline-offset-[14px] font-medium text-[24px] font-poppins text-black leading-[36px]">Read More</button>

                            <div className='flex justify-center leading-[50px]'>
                                <div className='flex items-center space-x-1'>
                                    <span className='material-icons text-xl'><MdOutlineWatchLater /></span>
                                    <p >5 min </p>
                                </div>
                                <div className='flex items-center space-x-1 ml-4'>
                                    <span className='material-icons text-xl'>  <HiMiniCalendar /></span>
                                    <p>12 Oct 2022</p>
                                </div>
                            </div>





                        </div>
                        {/* Blog Card 3 */}
                        <div className="p-4 rounded-lg">
                            <Image src="/images/blog3.png" alt="Blog3" width={400} height={300} className="w-full h-auto" />
                            <p className="font-normal text-[20px] leading-[30px]  font-poppins mt-2">Going all-in with millennial design</p>
                            <button className="mt-4 underline underline-offset-[14px] font-medium font-poppins text-[24px] text-black ">Read More</button>

                            <div className='flex justify-center leading-[50px]'>
                                <div className='flex items-center space-x-1'>
                                    <span className='material-icons text-xl'><MdOutlineWatchLater /></span>
                                    <p >5 min </p>
                                </div>
                                <div className='flex items-center space-x-1 ml-4'>
                                    <span className='material-icons text-xl'> <HiMiniCalendar /></span>
                                    <p>12 Oct 2022</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Link href="/About"> <button className="mt-6 font-medium leading-[30px] text-[20px] font-poppins text-black underline hover:text-blue-500 underline-offset-[20px]">View All Post</button></Link>
                </div>
            </div>
            <div>

                <main className='flex justify-center mt-[60px] mx-[20px] h-[450px] '>
                    <div className=' w-[1440px] h-screen bg-repeat-x ' style={{ backgroundImage: "url('/images/instagram.jpg')" }}>
                        <div className='flex items-center mt-[160px]   flex-col'>
                            <div className=' flex flex-col  items-center '>
                                <h1 className=' font-poppins  font-bold text-[70px] leading-[90px] text-[#000000] '>Our Instagram</h1>
                                <p className='font-poppins  font-normal text-[20px] leading-[30px] '>Follow our store on Instagram</p>
                                <div className=''>
                                    <button className=' border-4  rounded-full py-2 opacity-95 text-[#000000] duration-150 transition-all shadow-inner drop-shadow-xl before:content before:opacity-95 bg-[#FAF4F4] before:transform before:rounded-xl  before:bg-[linear-gradient(#ffffff99,#ffffff00 ,#ffffff33)] hover:scale-105 hover:shadow-2xl before:absolute before:block  before:scale-105 before:h-[20px] before:right-[15px] before:left-[15px]  before:top[5px]    w-[255px] h-[38xpx] text-[20px] font-poppins font-normal  ' type="button">Follow Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </div>



        </>
    );
};
export default Hero;

