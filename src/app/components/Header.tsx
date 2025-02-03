import React from 'react';
import Link from 'next/link';
import { IoAlert, IoPersonOutline, IoSearchOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa6';
import { BsCart3 } from 'react-icons/bs';

const Header = () => {

    return (
        <div>
            {/* Navigation Bar */}
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
                    <div className="hidden md:flex space-x-4 text-xl absolute right-16 mr-[50px]">
                        <Link href="/Account">
                            <span className="flex items-center">
                                <IoPersonOutline className="hover:text-blue-500 cursor-pointer" />
                                <IoAlert className="hover:text-blue-500 cursor-pointer ml-2" />
                            </span>
                        </Link>
                        <IoSearchOutline className="hover:text-blue-500 cursor-pointer" />
                        <FaRegHeart className="hover:text-blue-500 cursor-pointer" />
                        <Link href="/AddToCart">
                            <BsCart3 className="hover:text-blue-500 cursor-pointer" />
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            {(
                <div className="w-full lg:hidden bg-[#FFFFFF] flex flex-col items-center space-y-4 py-4">
                    <Link href="/" className="hover:text-blue-500">Home</Link>
                    <Link href="/Shop" className="hover:text-blue-500">Shop</Link>
                    <Link href="/About" className="hover:text-blue-500">About</Link>
                    <Link href="/Contact" className="hover:text-blue-500">Contact</Link>
                </div>
            )}
        </div>
    );
}

export default Header;
