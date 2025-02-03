"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SlArrowRight } from "react-icons/sl";
import Header from '../components/Header';
import { getCartItems } from '../actions/actions';
import Payment from '../components/Payment';
import { urlFor } from '@/sanity/lib/image';
import { CgChevronRight } from "react-icons/cg"
import { client } from '@/sanity/lib/client';
import Swal from 'sweetalert2';




const CheckOut = () => {


    const [cartItems, setCartItems] = useState<Product[]>([])
    const [discount, setDiscount] = useState<number>(0)
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        city: "",
    })
    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        address: false,
        zipCode: false,
        city: false,
    })
    useEffect(() => {
        setCartItems(getCartItems())
        const appliedDiscount = localStorage.getItem("appliedDiscount")
        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount))
        }
    }, [])

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.inventory, 0)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value
        })
    }
    const validateForm = () => {
        const errors = {
            firstName: !formValues.firstName,
            lastName: !formValues.lastName,
            email: !formValues.email,
            phone: !formValues.phone,
            address: !formValues.address,
            zipCode: !formValues.zipCode,
            city: !formValues.city,
        };
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
    }
    const handlePlaceOrder = async () => {


        Swal.fire({
            title: "processing your order...",
            text: "please wait a moment.",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Proceed",
        }).then((result) => {
            if (validateForm()) {
                localStorage.removeItem("appliedDiscount");
                Swal.fire(
                    "Success!",
                    "Your order has been successfully processed!",
                    "success"
                );
            } else {
                Swal.fire(
                    "Error!",
                    "please fill in all the field before proceeding",
                    "error"
                );
            }
        });





        const orderData = {
            _type: "order",
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            address: formValues.address,
            city: formValues.city,
            zipCode: formValues.zipCode,
            phone: formValues.phone,
            email: formValues.email,
            cartItems: cartItems.map(item => ({
                _type: "reference",
                _ref: item.id
            })),
            total: subtotal,
            discount: discount,
            orderDate: new Date().toISOString
        };
        try {
            await client.create(orderData)
            localStorage.removeItem("appliedDiscount")
        } catch (error) {
            console.error("error creating order", error)
        }

        if (validateForm()) {
            localStorage.removeItem("appliedDiscount")
        }
    }
    return (
        <div>

            <Header />

            {/*background pic*/}

            <div className="bg-cover bg-center h-[300px] flex flex-col items-center justify-center" style={{ backgroundImage: "url('/images/Rectangle.png')" }}>
                <Image src="/images/Meubel.png" alt="Meubel" width={77} height={77} className='mt-[60px]  ' />
                <div className=' '>

                    <div> <h1 className='font-poppins font-medium   text-[48px] hover:text-blue-500 leading-[72px] text-[#000000] '>Checkout</h1></div>

                    <div className='flex justify-items-center mb-[60px] w-[115px]  h-[24px]' >
                        <p className='font-poppins ml-12 hover:text-blue-500 font-medium text-[16px] text-[#000000] leading-[24px] '>Home</p>
                        <p className=' '><SlArrowRight className='w-[14px] h-[8px] hover:text-blue-500 mt-[10px]' /></p>
                        <p className='font-poppins font-light text-[16px] leading-[24px] text-[#000000] hover:text-blue-500 '>Checkout</p></div>
                </div>
            </div >
            {/* form*/}

            <div className='min-h-screen bg-gray-50 '>
                <div className='mt-6'>
                    <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <nav className='flex items-center gap-2 py-4'>
                            <Link href={"/addToCart"} className='text-[#666666] hover:text-black transition text-sm'>
                                AddToCart
                            </Link>
                            <CgChevronRight />
                            <span>
                                Checkout
                            </span>
                        </nav>
                    </div>
                </div>
                <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                    <div className='grid grid-cols-1 :lg;grid-col-2 gap-8'>
                        <div className='bg-white border rounded-lg p-6 space-y-6'>
                            <h2 className='text-lg font-semibold mb-4'>
                                Order Summary
                            </h2>
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <div key={item.id} className='flex items-center gap-4 py-3 border-b'>
                                        <div className='w-6 h-16 rounded overflow-hidden'>
                                            {item.image && (
                                                <Image
                                                    src={urlFor(item.image).url()}
                                                    alt="image"
                                                    width={50}
                                                    height={50}
                                                    className='object-cover w-full h-full'
                                                />
                                            )}
                                        </div>
                                        <div className='flex-1'>
                                            <h3 className='text-sm font-medium'>{item.name}</h3>
                                            <p className='text-xs text-gray-500'>Quantity: {item.inventory}</p>
                                        </div>
                                        <p>${item.price * item.inventory} </p>
                                    </div>
                                ))
                            ) : (
                                <p className='text-xs font-medium'>No item in cart</p>
                            )}
                            <div className='text-right pt-4'>
                                <p className='text-sm'>
                                    SubTotal: <span>${subtotal}</span>
                                </p>
                                <p className='text-sm'>Discount: <span>${discount}</span></p>
                                <p className='text-lg font-semibold'>Total:${subtotal.toFixed(2)}</p>
                            </div>
                        </div>
                        {/*Billing information*/}
                        <div className='bg-white border rounded-lg p-6 space-y-6 '>
                            <h2 className='text-xl font-semibold'>Billing Information</h2>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div>
                                    <label htmlFor='firstName'>First Name: </label>
                                    <input
                                        id='firstName'
                                        placeholder='Enter Your Name'
                                        value={formValues.firstName}
                                        onChange={handleInputChange}
                                        className='border'
                                    />
                                    {formErrors.firstName && (
                                        <p className='text-sm text-red-500 '>First Name is Required </p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor='lastName'>Last Name: </label>
                                    <input
                                        id='lastName'
                                        placeholder='Enter Your Last Name'
                                        value={formValues.lastName}
                                        onChange={handleInputChange}
                                        className='border'
                                    />
                                    {formErrors.lastName && (
                                        <p className='text-sm text-red-500 '>Last Name is Required </p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor='address'>Address: </label>
                                    <input
                                        type='text'
                                        id='address'
                                        placeholder='Enter Your Address'
                                        value={formValues.address}
                                        onChange={handleInputChange}
                                        className='border'
                                    />
                                    {formErrors.address && (
                                        <p className='text-sm text-red-500 '>Address is Required</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor='email'>Email: </label>
                                    <input
                                        type='email'
                                        id='email'
                                        placeholder='Enter Your Email'
                                        value={formValues.email}
                                        onChange={handleInputChange}
                                        className='border'
                                    />
                                    {formErrors.email && (
                                        <p className='text-sm text-red-500 '>Email is Required</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor='phone'>Phone: </label>
                                    <input
                                        type='text'
                                        id='phone'
                                        placeholder='Enter Your Phone '
                                        value={formValues.phone}
                                        onChange={handleInputChange}
                                        className='border'
                                    />
                                    {formErrors.phone && (
                                        <p className='text-sm text-red-500 '>Phone is Required</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor='zipCode'>Zip Code: </label>
                                    <input
                                        type='text'
                                        id='zipCode'
                                        placeholder='Enter Your Zip Code'
                                        value={formValues.zipCode}
                                        onChange={handleInputChange}
                                        className='border'
                                    />
                                    {formErrors.zipCode && (
                                        <p className='text-sm text-red-500 '>Zip Code is Required</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor='city'>City: </label>
                                    <input
                                        type='text'
                                        id='city'
                                        placeholder='Enter Your city'
                                        value={formValues.city}
                                        onChange={handleInputChange}
                                        className='border'
                                    />
                                    {formErrors.city && (
                                        <p className='text-sm text-red-500 '>City is Required</p>
                                    )}
                                </div>
                                <button
                                    className='w-full h-12 bg-blue-500 hover:bg-blue-700 text-white '
                                    onClick={handlePlaceOrder}
                                >
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Footer Section */}
            <div className='  bg-[#FAF4F4]  mx-[30px]'>

                <Payment />
            </div>


        </div>
    );
};

export default CheckOut;
