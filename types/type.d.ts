interface Product {
    id: string;
    name: string;
    price: number;
    description?: string;
    category: string;
    stockLevel: number;
    discountPercentage: number;
    imagePath: string;
    _type: "product";
    inventory: number;

    image?: {
        asset: {
            _ref: string;
            _type: "image";
        };
    };

    slug: {
        _type: "slug";
        current: string;
    };

}


