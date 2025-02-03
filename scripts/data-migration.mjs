import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
    projectId: "d652f7jp",
    dataset: 'production',
    useCdn: false,
    token: "skmFiCAIjScrS27bzrYhwWCJyQHZCIJXx7ZfNHw1E8QOX9n6QFXpi1MosW06RH5IVutdHYmctLZXFzDichAjFlTxQq9FkIBL3pTnqNP7h8KBNwzfn5wQnzb5p13LU0ajiCXTWQ787OdrcrU3QELhQDp37kpcWumN3d4mpcLa3ytvM7mynxtn",
    apiVersion: '2025-01-14',
});

async function uploadImageToSanity(imageUrl) {
    try {
        console.log(`Uploading image: ${imageUrl}`);
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data);
        const asset = await client.assets.upload('image', buffer, {
            filename: imageUrl.split('/').pop(),
        });
        console.log(`Image uploaded successfully: ${asset._id}`);
        return asset._id;
    } catch (error) {
        console.error('Failed to upload image:', imageUrl, error.message);
        return null;
    }
}

async function importData() {
    try {
        console.log('Migrating data, please wait...');

        // Fetch products from the API
        const response = await axios.get('https://template-0-beta.vercel.app/api/product');
        const products = response.data;

        console.log('Products fetched:', products);

        for (const product of products) {
            let imageRef = null;

            if (product.imagePath) {
                imageRef = await uploadImageToSanity(product.imagePath);
            }

            const sanityProduct = {
                _type: 'product',
                id: product.id,
                name: product.name,
                category: product.category,
                description: product.description,
                discountPercentage: product.discountPercentage,
                isFeaturedProduct: product.isFeaturedProduct,
                stockLevel: product.stockLevel,
                price: parseFloat(product.price),
                image: imageRef
                    ? {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageRef,
                        },
                    }
                    : undefined,
                imagePath: product.imagePath, // Store original image URL
            };

            await client.create(sanityProduct);
            console.log(`Product created in Sanity: ${sanityProduct.id}`);
        }

        console.log('Data migrated successfully!');
    } catch (error) {
        console.error('Error in migrating data:', error.message);
    }
}

importData();
