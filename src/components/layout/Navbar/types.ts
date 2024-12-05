
export interface NavigationItem {
    name: string;
    href: string;
}

export interface FeaturedItem {
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
}

export interface NavigationSection {
    id: string;
    name: string;
    items: NavigationItem[];
}

export interface NavigationCategory {
    id: string;
    name: string;
    featured: FeaturedItem[];
    sections: NavigationSection[];
}

export interface NavigationData {
    categories: NavigationCategory[];
    pages: NavigationItem[];
}