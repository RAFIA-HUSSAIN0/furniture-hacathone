import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: { id: string } }) {
    if (!params || !params.id) {
        return notFound();
    }




    const query = `*[_type == 'product' && id == $id]{
        name,
        price,
        description,
        category,
        image,
        slug,
        stockLevel,
        discountPercentage,
        _type
    }[0]`;

    try {
        const product: Product | null = await client.fetch(query, { id: params.id });

        if (!product) {
            return <h1>Product not found</h1>;
        }

        return (
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
                        {product.image && (
                            <Image
                                src={urlFor(product.image).url() || "/placeholder.svg"}
                                alt={product.name || "Product Image"}
                                width={400}
                                height={800}
                                className="w-full h-[600px] object-cover rounded-md"
                            />
                        )}
                    </div>
                    <div>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <span className="font-bold">Product Name:</span>
                                <span className="font-medium">{product.name}</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-semibold">Description:</span>
                                <span className="font-medium">{product.description}</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-semibold">Product Price:</span>
                                <span className="font-medium">{product.price}</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-semibold">Category:</span>
                                <span className="font-medium">{product.category}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error fetching product:", error);
        return <h1>Error loading product</h1>;
    }
}
