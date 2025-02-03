"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";


const AddToCartPage = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        setCartItems(getCartItems());
    }, []);

    const handleRemove = (id: string) => {
        Swal.fire({
            title: "Are You Sure?",
            text: "You will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!",
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(id);
                setCartItems(getCartItems());
                Swal.fire("Removed!", "Item has been removed.", "success");
            }
        });
    };

    const handleQuantityChange = (id: string, quantity: number) => {
        updateCartQuantity(id, quantity);
        setCartItems(getCartItems());
    };

    const handleIncrement = (id: string) => {
        const product = cartItems.find((item) => item.id === id);
        if (product) handleQuantityChange(id, product.inventory + 1);
    };

    const handleDecrement = (id: string) => {
        const product = cartItems.find((item) => item.id === id);
        if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
    };

    const calculatedTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
    };
    const router = useRouter();


    const handleProceed = () => {
        Swal.fire({
            title: "Proceed to Checkout?",
            text: "Please review your cart before checkout",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, proceed!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Success", "Your order has been successfully processed", "success");

                router.push("/Checkout")

                setCartItems([]);
            }
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center bg-white shadow-md rounded-lg p-4"
                            >
                                {item.image && (
                                    <Image
                                        src={urlFor(item.image).url()}
                                        className="w-16 h-16 object-cover rounded-lg"
                                        alt="image"
                                        width={500}
                                        height={500} />
                                )}
                                <div className="ml-4 flex-1">
                                    <h2 className="text-lg font-medium">{item.name}</h2>
                                    <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                                    <div className="flex items-center mt-2">
                                        <button
                                            onClick={() => handleDecrement(item.id)}
                                            className="px-3 py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300"
                                        >
                                            -
                                        </button>
                                        <span className="mx-2">{item.inventory}</span>
                                        <button
                                            onClick={() => handleIncrement(item.id)}
                                            className="px-3 py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="ml-4 text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                {cartItems.length > 0 && (
                    <div className="mt-6 bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-medium">Order Summary</h2>
                        <p className="text-sm text-gray-600 mt-2">
                            Total: <span className="font-bold">${calculatedTotal().toFixed(2)}</span>
                        </p>
                        <button
                            onClick={handleProceed}
                            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddToCartPage;  