import { Navbar } from './components/layout/Navbar/Navbar';
import './App.css'

function App() {
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
                </div>
            </main>

            <footer className="bg-gray-800 text-white py-4 text-center">
                <p>&copy; 2024 Your Company</p>
            </footer>
        </div>
    )
}

export default App
