import React from "react";
import ProductSlider from "../components/common/ProductSlider.tsx";
import ProductCard from "../components/common/ProductCard.tsx";
import ImageLink from "../components/common/ImageLink.tsx";
import banner from "../assets/banner.jpg";
import {sampleProducts} from "../data/sampleProducts.ts";
import {sampleProducts2} from "../data/sampleProducts2.ts";

export const HomePage = () => {
    return (
        <>
            <div className="container mx-auto py-10 px-6">
                <div className="flex justify-center mt-8">
                    <ProductSlider
                        title="Popüler Ürünler"
                        products={sampleProducts}
                        ProductCard={ProductCard}
                        onAddToCart={(product) => console.log(product)}
                        viewAllLink={() => "/products/popular"}
                    />
                </div>
                <div className="flex justify-center mt-8">
                    <ProductSlider
                        title="En Çok Satılanlar"
                        products={sampleProducts2}
                        ProductCard={ProductCard}
                        onAddToCart={(product) => console.log(product)}
                        viewAllLink={() => "/products/popular"}
                    />
                </div>
                <div className="container flex justify-between">
                    <ImageLink
                        imageUrl={banner}
                        linkUrl="/"
                        title="Örnek Başlık"
                    />
                    <ImageLink
                        imageUrl={banner}
                        linkUrl="/"
                        title="Örnek Başlık"
                    />
                    <ImageLink
                        imageUrl={banner}
                        linkUrl="/"
                        title="Örnek Başlık"
                    />

                </div>

            </div>
        </>
    );
};
