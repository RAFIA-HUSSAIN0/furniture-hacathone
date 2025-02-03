"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import Swal from 'sweetalert2';
import { addToCart } from '../actions/actions';






const ProductListing = ({ product }: { product: Product }) => {
    const handleAddToCart = (e: React.MouseEvent, product: Product) => {
        e.preventDefault()
        Swal.fire({
            position: "top-right",
            icon: "success",
            title: `${product.name} added to cart`,
            showCancelButton: false,
            timer: 1000
        })

        addToCart(product)
    }
    return (
        <div>
            <div className=' max-w-8xl mx-auto px-14 py-6' >
                <div
                    className='flex flex-col items-center border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 '
                >
                    <Link href={`/Product/${product.id}`}>
                        {product.image && (
                            <Image
                                src={urlFor(product.image).url()}
                                alt={product.name || "Product Image"}
                                width={400}
                                height={400}
                                className=' w-full h-[250px] object-cover rounded-md'
                            />
                        )}


                        <h2 className='text-lg font-semibold mt-4'>{product.name}</h2>
                        <p className='text-gray-500 mt-2'>
                            {product.price ? `$${product.price}` : "Price not available"}
                        </p>
                        <button
                            className='bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg 
                        hover:scale-110 transition-transform duration-200 ease-in-out  '
                            onClick={(e) => handleAddToCart(e, product)}>add To Cart</button>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default ProductListing
