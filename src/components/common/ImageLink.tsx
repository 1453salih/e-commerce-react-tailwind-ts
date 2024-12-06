import React from 'react';

interface ImageLinkProps {
    imageUrl: string;
    linkUrl: string;
    title: string;
}

const ImageLink: React.FC<ImageLinkProps> = ({
                                                 imageUrl,
                                                 linkUrl,
                                                 title,
                                             }) => {
    return (
        <div
            className="max-w rounded transition-transform duration-300 hover:scale-105">
            <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block">
                <img
                    className="w-full h-full object-cover"
                    src={imageUrl}
                    alt={title}
                />
            </a>
        </div>

    );
};


export default ImageLink;