import React from "react";
import { Navbar } from './components/layout/Navbar/Navbar';
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage.tsx";
function App() {
    //* Örnek Ürün Listesi (daha sonra veritabanından çekilecek zaten)
    return (
        <Router>
            <div className="App">
                <header>
                    <Navbar/>
                </header>

                <main>
                    <Routes>
                        <Route  path="/" element={<HomePage />} ></Route>
                        <Route  path="/products/popular" element={<HomePage />} ></Route>
                    </Routes>

                </main>

                <footer className="bg-gray-800 text-white py-4 text-center">
                    <p>&copy; 2024 Your Company</p>
                </footer>
            </div>
        </Router>

    )
}

export default App