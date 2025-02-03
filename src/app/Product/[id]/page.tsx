import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductPageProps {
    params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
    if (!params?.id) {
        return notFound();
    }

    const query = `*[_type == "product" && id == $id][0]`;

    try {
        const product = await client.fetch(query, { id: params.id });

        if (!product) {
            return <h1>Product not found</h1>;
        }

        return (
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
                        {product.image && (
                            <Image
                                src={urlFor(product.image).url()}
                                alt={product.name}
                                width={500}
                                height={500}
                                className="rounded-lg"
                            />
                        )}
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">{product.name}</h1>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="text-lg font-semibold text-blue-600">${product.price}</p>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error fetching product:", error);
        return <h1>Something went wrong</h1>;
    }
}
