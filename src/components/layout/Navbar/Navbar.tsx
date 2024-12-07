import React, { useState } from "react";
import {Bars3Icon, MagnifyingGlassIcon,ShoppingBagIcon} from "@heroicons/react/24/outline";

import MobileMenu from "./MobileMenu.tsx";
import SubNavbar from "../SubNavbar/SubNavbar.tsx";
import SearchModal from "./SearchModal.tsx";


// Navbar Component
export const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchModalOpen, setSearchModalOpen] = useState(false);
    return (
        <div className="bg-white">
            <header className="relative bg-gray-100 static">
                {/* Banner */}
                <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    Get free delivery on orders over $100
                </p>

                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-gray-200">
                        <div className="flex h-16 items-center">
                            {/* Mobile menu button */}
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                            >
                                <span className="absolute -inset-0.5"/>
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon aria-hidden="true" className="size-6"/>
                            </button>

                            {/* Logo */}
                            <div className="mr-4 flex lg:ml-0">
                                <a href="#">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt=""
                                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                        className="h-8 w-auto"
                                    />
                                </a>
                            </div>
                            {/* Search */}
                            <div className="flex-1 flex justify-center items-center">
                                <button
                                    onClick={() => setSearchModalOpen(true)}
                                    className="flex items-center p-2 border border-gray-300 rounded-md text-gray-500 hover:border-gray-400 w-1/2"
                                >
                                    <MagnifyingGlassIcon className="h-5 w-5 mr-2"/>
                                    <span>Ürün arayın...</span>
                                </button>
                                {/* Search Modal */}
                                <SearchModal
                                    open={isSearchModalOpen}
                                    onClose={() => setSearchModalOpen(false)}
                                />
                            </div>

                            {/* Rest of the navbar content */}
                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Sign in
                                    </a>
                                    <span aria-hidden="true" className="h-6 w-px bg-gray-200"/>
                                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Create account
                                    </a>
                                </div>
                            </div>

                            {/* Cart */}
                            <div className="ml-4 flow-root lg:ml-6">
                                <a href="#" className="group -m-2 flex items-center p-2">
                                    <ShoppingBagIcon
                                        aria-hidden="true"
                                        className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                                    />
                                    <span
                                        className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                    <span className="sr-only">items in cart, view bag</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                <SubNavbar/>
                <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen}></MobileMenu>
            </header>
        </div>
    );
};

export default Navbar;