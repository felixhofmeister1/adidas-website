import React from 'react';
import './Children.css';

const kidsImages = [
    "/images/kids-accessories.jpg",
    "/images/kids-cloths.jpg",
    "/images/kids-shoes.jpg",
    "/images/microfibre-cloth(kids-accessories4).avif",
    "/images/nmd_r1-v2-shoes(kids-shoes3).avif",
    "/images/power-backpack(kids-accessories1).avif",
    "/images/sereno-track-suit(kids-cloths3).avif",
    "/images/swift-run-22-shoes(kids-shoes1).avif",
    "/images/trefoil-shorts-tee-set(kids-cloths4).avif",
    "/images/adicolor-pants(kids-cloths2).avif",
    "/images/adidas-essentials-chelsea-shorts(kids-cloths1).avif",
    "/images/goletto-viii-firm-ground-boots(kids-shoes2).avif",
    "/images/x-Speedportal-4-FxG-Football-Boots(kids-shoes4).avif",
];

function Children() {
    return (
        <div className="children-page">
            <h1>Kids Section</h1>
            <div className="image-grid">
                {kidsImages.map((src, index) => (
                    <img key={index} src={src} alt={`Kids Item ${index + 1}`} className="kids-image" />
                ))}
            </div>
        </div>
    );
}

export default Children;
