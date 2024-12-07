import React from "react";

interface SearchModalProps {
    open: boolean;
    onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ open, onClose }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-30">
            {/* Modal Container */}
            <div className="mt-10 w-full bg-white rounded-lg shadow-lg" style={{maxWidth:"43rem"}}>
                {/* Üstteki Arama Alanı */}
                <div className="flex items-center justify-between p-4 border-b">
                    <input
                        type="text"
                        placeholder="Aramak istediğiniz ürünü yazın..."
                        className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                    <button
                        onClick={onClose}
                        className="ml-4 text-gray-500 hover:text-gray-800"
                    >
                        ✖
                    </button>
                </div>

                {/* İçerik */}
                <div className="flex flex-col lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-8">
                    {/* Popüler Aramalar */}
                    <div className="flex-1">
                        <h3 className="text-lg font-medium mb-4">Popüler aramalar</h3>
                        <div className="flex flex-wrap gap-2">
                            {["iphone 13", "stanley termos", "luvium", "pipo bardak", "adidas spezial", "yılbaşı ağacı"].map((item) => (
                                <button
                                    key={item}
                                    className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Son Gezdiğiniz Ürünler*/}
                    <div className="flex-1">
                        <h3 className="text-lg font-medium mb-4">Son gezdiğiniz ürünler</h3>
                        <ul className="space-y-4">
                            {[
                                {
                                    name: "Snaiker Alman S8",
                                    price: "599,00 TL",
                                    image: "https://via.placeholder.com/150",
                                },
                                {
                                    name: "Xiaomi Redmi Watch 5",
                                    price: "1.239,00 TL",
                                    image: "https://via.placeholder.com/150",
                                },
                                {
                                    name: "Gergin Kumaş Kulaklık",
                                    price: "471,80 TL",
                                    image: "https://via.placeholder.com/150",
                                },
                                {
                                    name: "Arçelik 9030 D Aria",
                                    price: "4.091,07 TL",
                                    image: "https://via.placeholder.com/150",
                                },
                            ].map((product) => (
                                <li key={product.name} className="flex items-center">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-16 h-16 rounded-md"
                                    />
                                    <div className="ml-4">
                                        <h4 className="font-medium text-gray-900">{product.name}</h4>
                                        <p className="text-sm text-gray-700">{product.price}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
