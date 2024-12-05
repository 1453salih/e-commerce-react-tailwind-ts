import { Navbar } from './components/layout/Navbar/Navbar';
import './App.css'
import ProductCard from "./components/common/ProductCard";
import image1 from './assets/image1.jpg';
import ProductSlider from "./components/common/ProductSlider.tsx";
function App() {
    //* Örnek Ürün Listesi (daha sonra veritabanından çekilecek zaten)
    const sampleProducts: Product[] = [
        {
            id: 1,
            name: 'Akıllı Telefon',
            price: 5999.99,
            description: 'En son teknoloji akıllı telefon',
            imageUrl: image1,
            inStock: true,
            discount: 0.2
        },
        {
            id: 2,
            name: 'Akıllı Telefon',
            price: 5999.99,
            description: 'En son teknoloji akıllı telefon',
            imageUrl: image1,
            inStock: true,
            discount: 0.2
        },
        {
            id: 3,
            name: 'Akıllı Telefon',
            price: 5999.99,
            description: 'En son teknoloji akıllı telefon',
            imageUrl: image1,
            inStock: true,
            discount: 0.2
        },
        {
            id: 4,
            name: 'Akıllı Telefon',
            price: 5999.99,
            description: 'En son teknoloji akıllı telefon',
            imageUrl: image1,
            inStock: true,
            discount: 0.2
        },
        {
            id: 5,
            name: 'Akıllı Telefon',
            price: 5999.99,
            description: 'En son teknoloji akıllı telefon',
            imageUrl: image1,
            inStock: true,
            discount: 0.2
        },
        {
            id: 6,
            name: 'Akıllı Telefon',
            price: 5999.99,
            description: 'En son teknoloji akıllı telefon',
            imageUrl: image1,
            inStock: true,
            discount: 0.2
        },
        {
            id: 7,
            name: 'Akıllı Telefon',
            price: 5999.99,
            description: 'En son teknoloji akıllı telefon',
            imageUrl: image1,
            inStock: true,
            discount: 0.2
        }

    ];
    const sampleProducts2: Product[] = [
        {
            id: 1,
            name: 'Akıllı Telefon',
            price: 5999.99,
            description: 'En son teknoloji akıllı telefon',
            imageUrl: image1,
            inStock: true,
            discount: 0.2
        },
        {
            id: 2,
            name: 'Akıllı Telefon',
            price: 5999.99,
            description: 'En son teknoloji akıllı telefon',
            imageUrl: image1,
            inStock: true,
            discount: 0.2
        },
        {
            id: 3,
            name: 'Akıllı Telefon',
            price: 5999.99,
            description: 'En son teknoloji akıllı telefon',
            imageUrl: image1,
            inStock: true,
            discount: 0.2
        },
        {
            id: 4,
            name: 'Akıllı Telefon',
            price: 5999.99,
            description: 'En son teknoloji akıllı telefon',
            imageUrl: image1,
            inStock: true,
            discount: 0.2
        },
        {
            id: 5,
            name: 'Akıllı Telefon',
            price: 5999.99,
            description: 'En son teknoloji akıllı telefon',
            imageUrl: image1,
            inStock: true,
            discount: 0.2
        },
        {
            id: 6,
            name: 'Akıllı Telefon',
            price: 5999.99,
            description: 'En son teknoloji akıllı telefon',
            imageUrl: image1,
            inStock: true,
            discount: 0.2
        },
        {
            id: 7,
            name: 'Akıllı Telefon',
            price: 5999.99,
            description: 'En son teknoloji akıllı telefon',
            imageUrl: image1,
            inStock: true,
            discount: 0.2
        }

    ];

    return (
        <div className="App">
            <header>
                <Navbar />
            </header>

            <main>
                <div className="container mx-auto py-10 px-6">
                    <h1 className="text-3xl font-semibold text-gray-900">Welcome to the Website</h1>
                    <p className="mt-4 text-lg text-gray-700">
                        This is a sample website with a responsive navigation bar.
                    </p>

                    <div className="flex justify-center mt-8">
                        <ProductSlider
                            title="Popüler Ürünler"
                            products={sampleProducts}
                            ProductCard={ProductCard}
                            onAddToCart={(product) => console.log(product)}
                        />
                    </div>
                    <div className="flex justify-center mt-8">
                        <ProductSlider
                            title="En Çok Satılanlar"
                            products={sampleProducts2}
                            ProductCard={ProductCard}
                            onAddToCart={(product) => console.log(product)}
                        />
                    </div>
                </div>
            </main>

            <footer className="bg-gray-800 text-white py-4 text-center">
                <p>&copy; 2024 Your Company</p>
            </footer>
        </div>
    )
}

export default App