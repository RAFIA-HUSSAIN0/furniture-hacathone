'use client';

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { client } from '@/sanity/lib/client';
import { allProducts } from '@/sanity/lib/queries';
import ProductListing from '../components/ProductListing';
import Image from 'next/image';
import SearchAndFilter from '../components/SearchAndFilter';
import Payment from '../components/Payment';

const Shop = () => {
    const [product, setProduct] = useState<Product[]>([]);
    const [filteredProduct, setFilteredProduct] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchProduct() {
            const fetchedProduct: Product[] = await client.fetch(allProducts);
            setProduct(fetchedProduct);
            setFilteredProduct(fetchedProduct); // Initially, set all products
        }
        fetchProduct();
    }, []);

    const handleFilter = (searchTerm: string, category: string, priceRange: [number, number]) => {
        const filtered = product.filter((item) => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = category === 'All' || item.category === category;
            const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
            return matchesSearch && matchesCategory && matchesPrice;
        });
        setFilteredProduct(filtered);
    };

    return (
        <div>
            <div>
                <Header />
                <div className="w-full flex justify-center  mx-[30px]">
                    <Image src="/images/Bg.png" alt="bg" width={1640} height={316} />
                </div>

                {/* Pass the filter handler to the SearchAndFilter component */}
                <SearchAndFilter onFilter={handleFilter} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredProduct.map((product: Product) => (
                    <ProductListing product={product} key={product.id} />
                ))}
            </div>

            <div>
                <Payment />
            </div>
        </div>
    );
};

export default Shop;
