import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, FreeMode } from 'swiper/modules';
import { Link } from 'react-router-dom';

// Swiper styles(Editörde kızarıyor ama çalışıyor)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

// Slider Props Interface
interface ProductSliderProps {
    title: string;
    products: Product[];
    onAddToCart?: (product: Product) => void;
    viewAllLink?: () => void;
    ProductCard: React.ComponentType<{
        product: Product,
        onAddToCart?: (product: Product) => void
    }>;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
                                                         title,
                                                         products,
                                                         onAddToCart,
                                                         viewAllLink, // Add to destructured props
                                                         ProductCard
                                                     }) => {
    return (
        <div className="container mx-auto py-8">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                {viewAllLink && (
                    <Link
                        to={viewAllLink}
                        className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                    >
                        Tümünü Gör
                    </Link>
                )}
            </div>

            <Swiper
                modules={[Navigation, Pagination, Mousewheel, FreeMode]}
                spaceBetween={24}
                slidesPerView={'auto'}
                navigation
                pagination={{clickable: true}}
                mousewheel={true}
                freeMode={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                className="product-swiper"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id} className="!w-72">
                        <ProductCard
                            product={product}
                            onAddToCart={onAddToCart}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Swiper için özel stil */}
            <style>
                {`
          .product-swiper .swiper-button-next,
          .product-swiper .swiper-button-prev {
            color: #3b82f6 !important;
            background-color: rgba(59, 130, 246, 0.1);
            width: 44px;
            height: 44px;
            border-radius: 50%;
          }

          .product-swiper .swiper-pagination-bullet-active {
            background-color: #3b82f6 !important;
          }
        `}
            </style>
        </div>
    );
};

export default ProductSlider;