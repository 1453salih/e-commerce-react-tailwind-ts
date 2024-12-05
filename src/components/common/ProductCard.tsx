import React from 'react';

// Product Interface
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
    imageUrl: string;
    discount?: number;
    inStock: boolean;
}

// Props Interface
interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {

    const discountedPrice = product.discount
        ? (product.price * (1 - product.discount)).toFixed(2)
        : product.price.toFixed(2);

    return (
        <div className="relative flex flex-col bg-white shadow-md rounded-lg overflow-hidden w-72 hover:shadow-xl transform hover:scale-105 transition duration-300">
            {/* Ürün Görseli */}
            <div className="relative">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-100 object-cover"
                />
                {product.discount && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            %{(product.discount * 100).toFixed(0)} İndirim
          </span>
                )}
                {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white text-lg font-bold">Stokta Yok</span>
                    </div>
                )}
            </div>

            {/* Ürün Detayları */}
            <div className="flex-1 p-4 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                    {product.name}
                </h3>
                {product.description && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                    </p>
                )}

                {/* Fiyat ve Eylem */}
                <div className="flex items-center justify-between">
                    <div>
                        {product.discount ? (
                            <>
                <span className="text-red-500 text-lg font-bold mr-2">
                  {discountedPrice} TL
                </span>
                                <span className="text-gray-400 line-through text-sm">
                  {product.price.toFixed(2)} TL
                </span>
                            </>
                        ) : (
                            <span className="text-gray-800 text-lg font-bold">
                {product.price.toFixed(2)} TL
              </span>
                        )}
                    </div>
                </div>

                {/* Sepete Ekle Butonu */}
                <button
                    onClick={() => onAddToCart?.(product)}
                    disabled={!product.inStock}
                    className={`mt-4 py-2 rounded-md text-white font-semibold w-full transition-colors duration-300 ${
                        product.inStock
                            ? 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
                            : 'bg-gray-400 cursor-not-allowed'
                    }`}
                >
                    {product.inStock ? 'Sepete Ekle' : 'Stokta Yok'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
