'use client';
import React, { useState } from 'react';

interface FilterProps {
    onFilter: (searchTerm: string, category: string, priceRange: [number, number]) => void;
}

const SearchAndFilter: React.FC<FilterProps> = ({ onFilter }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [category, setCategory] = useState<string>('All');
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]); // Set default range (0-1000)

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (e.target.name === 'minPrice') {
            setPriceRange([value, priceRange[1]]);
        } else {
            setPriceRange([priceRange[0], value]);
        }
    };

    const handleApplyFilters = () => {
        onFilter(searchTerm, category, priceRange);
    };

    return (
        <div className="flex flex-col items-start p-4 border rounded-md">
            <input
                type="text"
                placeholder="Search by product name"
                className="border p-2 rounded-md w-full mb-4"
                value={searchTerm}
                onChange={handleSearch}
            />

            <select
                className="border p-2 rounded-md w-full mb-4"
                value={category}
                onChange={handleCategoryChange}
            >
                <option value="All">All Categories</option>
                <option value="Category1">Category1</option>
                <option value="Category2">Category2</option>
                <option value="Category3">Category3</option>
                {/* Add more categories here */}
            </select>

            <div className="flex justify-between w-full mb-4">
                <input
                    type="number"
                    name="minPrice"
                    className="border p-2 rounded-md w-1/2"
                    placeholder="Min Price"
                    value={priceRange[0]}
                    onChange={handlePriceChange}
                />
                <input
                    type="number"
                    name="maxPrice"
                    className="border p-2 rounded-md w-1/2"
                    placeholder="Max Price"
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                />
            </div>

            <button
                onClick={handleApplyFilters}
                className="bg-blue-500 text-white p-2 rounded-md w-full"
            >
                Apply Filters
            </button>
        </div>
    );
};

export default SearchAndFilter;