import React from 'react';
import './Children.css';

const kidsImages = [
    `${process.env.PUBLIC_URL}/images/kids-accessories.jpg`,
    `${process.env.PUBLIC_URL}/images/kids-cloths.jpg`,
    `${process.env.PUBLIC_URL}/images/kids-shoes.jpg`,
    `${process.env.PUBLIC_URL}/images/microfibre-cloth(kids-accessories4).avif`,
    `${process.env.PUBLIC_URL}/images/nmd_r1-v2-shoes(kids-shoes3).avif`,
    `${process.env.PUBLIC_URL}/images/power-backpack(kids-accessories1).avif`,
    `${process.env.PUBLIC_URL}/images/sereno-track-suit(kids-cloths3).avif`,
    `${process.env.PUBLIC_URL}/images/swift-run-22-shoes(kids-shoes1).avif`,
    `${process.env.PUBLIC_URL}/images/trefoil-shorts-tee-set(kids-cloths4).avif`,
    `${process.env.PUBLIC_URL}/images/adicolor-pants(kids-cloths2).avif`,
    `${process.env.PUBLIC_URL}/images/adidas-essentials-chelsea-shorts(kids-cloths1).avif`,
    `${process.env.PUBLIC_URL}/images/goletto-viii-firm-ground-boots(kids-shoes2).avif`,
    `${process.env.PUBLIC_URL}/images/x-Speedportal-4-FxG-Football-Boots(kids-shoes4).avif`,
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
