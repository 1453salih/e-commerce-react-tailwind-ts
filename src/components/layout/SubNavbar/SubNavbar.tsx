import React, { useState } from 'react';
import DesktopMenu from "../Navbar/DesktopMenu.tsx";

const SubNavbar: React.FC = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState<number | null>(null);

    return (
        <div className="bg-gray-50 shadow-sm ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <DesktopMenu
                    isPopoverOpen={isPopoverOpen}
                    setIsPopoverOpen={setIsPopoverOpen}
                />
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
            </div>
        </div>
    );
};

export default SubNavbar;