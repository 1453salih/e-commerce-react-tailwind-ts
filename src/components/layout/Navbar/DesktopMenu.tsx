import React from "react";
import {Popover, PopoverButton, PopoverGroup, PopoverPanel} from "@headlessui/react";
import { navigation } from '../../../data/navigation';

const DesktopMenu: React.FC<{
    isPopoverOpen: number | null;
    setIsPopoverOpen: React.Dispatch<React.SetStateAction<number | null>>;
}> = ({ isPopoverOpen, setIsPopoverOpen }) => {
    return (
        <PopoverGroup className="hidden lg:block lg:self-stretch z-40">
            <div className="flex h-full ">
                {navigation.categories.map((category, index) => (
                    <Popover
                        key={category.name}
                        className="flex"
                        onMouseEnter={() => setIsPopoverOpen(index)}
                        onMouseLeave={() => setIsPopoverOpen(null)}
                    >
                        <div className="relative flex">
                            <PopoverButton
                                className={`
        relative z-10 -mb-px flex items-center
        text-xl font-medium transition-colors duration-200 ease-out 
        focus:outline-none ml-0 p-6
        ${isPopoverOpen === index
                                    ? 'text-indigo-600 bg-white before:border'
                                    : 'border-transparent text-gray-700 hover:text-gray-800 '
                                }`}

                            >
                                {category.name}
                            </PopoverButton>
                        </div>

                        <PopoverPanel
                            static
                            className={`absolute inset-x-0 top-full text-sm text-gray-500 transition z-40 ${
                                isPopoverOpen === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            }`}
                        >
                            <div className="container mx-auto px-8">
                                <div className="relative bg-white border-b-2 border-gray-50"
                                     onMouseLeave={() => setIsPopoverOpen(null)}
                                >
                                    <div className="mx-auto max-w-7xl px-8">
                                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                {category.featured.map((item) => (
                                                    <div key={item.name} className="group relative text-base sm:text-sm">
                                                        <img
                                                            alt={item.imageAlt}
                                                            src={item.imageSrc}
                                                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                                        />
                                                        <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                                            <span aria-hidden="true" className="absolute inset-0 z-10"/>
                                                            {item.name}
                                                        </a>
                                                        <p aria-hidden="true" className="mt-1">Shop now</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                {category.sections.map((section) => (
                                                    <div key={section.name}>
                                                        <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                                            {section.name}
                                                        </p>
                                                        <ul
                                                            role="list"
                                                            aria-labelledby={`${section.name}-heading`}
                                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                        >
                                                            {section.items.map((item) => (
                                                                <li key={item.name} className="flex">
                                                                    <a href={item.href} className="hover:text-gray-800">
                                                                        {item.name}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </PopoverPanel>
                    </Popover>
                ))}

                {navigation.pages.map((page) => (
                    <a
                        key={page.name}
                        href={page.href}
                        className="flex items-center text-xl font-medium text-gray-700 hover:text-gray-800 ml-4 mr-4"
                    >
                        {page.name}
                    </a>
                ))}
            </div>
        </PopoverGroup>
    );
};

export default DesktopMenu