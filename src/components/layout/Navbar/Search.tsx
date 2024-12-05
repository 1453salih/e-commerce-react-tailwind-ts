import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

export const Search = () => {
    return (
        <div className="flex lg:ml-6">
            <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon aria-hidden="true" className="size-6"/>
            </a>
        </div>
    );
};

export default Search;