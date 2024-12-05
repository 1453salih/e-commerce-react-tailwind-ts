    import React, { useState } from "react";
import {Bars3Icon, MagnifyingGlassIcon,ShoppingBagIcon} from "@heroicons/react/24/outline";

import MobileMenu from "./MobileMenu.tsx";
import DesktopMenu from "./DesktopMenu.tsx";


// Navbar Component
export const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isPopoverOpen, setIsPopoverOpen] = useState<number | null>(null);

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
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon aria-hidden="true" className="size-6" />
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

                            {/* Desktop Menu */}
                            <DesktopMenu
                                isPopoverOpen={isPopoverOpen}
                                setIsPopoverOpen={setIsPopoverOpen}
                            />

                            {/* Rest of the navbar content */}
                            <div className="ml-auto flex items-center">
                                {/* Sign in, currency, search, cart icons */}
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Sign in
                                    </a>
                                    <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Create account
                                    </a>
                                </div>
                            </div>
                            {/* Search */}
                            <div className="flex lg:ml-6">
                                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Search</span>
                                    <MagnifyingGlassIcon aria-hidden="true" className="size-6"/>
                                </a>
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
                <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen}></MobileMenu>
                {/* Overlay */}
                {isPopoverOpen !== null && (
                    <div
                        className="fixed inset-x-0 bg-black/20 backdrop-blur-sm z-20 transition-opacity duration-300"
                        style={{
                            height: 'calc(100vh)'
                        }}
                        onClick={() => setIsPopoverOpen(null)}
                        aria-hidden="true"
                    />
                )}
            </header>
        </div>
    );
};

export default Navbar;