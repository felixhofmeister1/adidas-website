import React, { useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './SectionPage.css';

const items = {
  men: [
    { src: '/images/adicolor-classic-fanny-pack(mens-accessories1).avif', category: 'accessories', name: 'Classic Fanny Pack', price: '$30' },
    { src: '/images/essentials-training-duffelbag(mens-accessories2).avif', category: 'accessories', name: 'Training Duffel Bag', price: '$50' },
    { src: '/images/adicolor-backpack(mens-accessories3).avif', category: 'accessories', name: 'Adicolor Backpack', price: '$45' },
    { src: '/images/ucl-23-24-knock-out-miniball(mens-accessories4).avif', category: 'accessories', name: 'Miniball', price: '$25' },
    { src: '/images/astir-shoe(mens-shoes1).avif', category: 'shoes', name: 'Astir Shoes', price: '$120' },
    { src: '/images/ozmillen-shoe(mens-shoes2).avif', category: 'shoes', name: 'Ozmillen Shoes', price: '$130' },
    { src: '/images/team-court-shoes(mens-shoes3).avif', category: 'shoes', name: 'Court Shoes', price: '$110' },
    { src: '/images/Predator-League-FG-Football-Boots(mens-shoes4).avif', category: 'shoes', name: 'Predator Football Boots', price: '$150' },
    { src: '/images/Entrada-22-Shorts(mens-outfits1).avif', category: 'clothing', name: 'Entrada Shorts', price: '$35' },
    { src: '/images/aeroready-designed-2-move-feelready-sport-t-shirt(mens-outfits2).avif', category: 'clothing', name: 'Sport T-Shirt', price: '$40' },
    { src: '/images/originals-adicolor-3-stripes-swim-shorts(men-outfits3).avif', category: 'clothing', name: '3-Stripes Swim Shorts', price: '$50' },
    { src: '/images/3-stripes-CLX-swim-shorts(mens-outfits4).avif', category: 'clothing', name: 'CLX Swim Shorts', price: '$55' }
  ],
  women: [
    { src: '/images/essentials-logo-duffel-bag-extra-small(women-accessories1).avif', category: 'accessories', name: 'Small Duffel Bag', price: '$50' },
    { src: '/images/essentials-logo-duffel-bag-medium(womens-accessories2).avif', category: 'accessories', name: 'Medium Duffel Bag', price: '$70' },
    { src: '/images/trefoil-baseball-cap(women-accessories3).avif', category: 'accessories', name: 'Baseball Cap', price: '$25' },
    { src: '/images/prime-backpack(women-accessories4).avif', category: 'accessories', name: 'Prime Backpack', price: '$80' },
    { src: '/images/forum-low-cl-shoes(women-shoes1).avif', category: 'shoes', name: 'Forum Low CL Shoes', price: '$90' },
    { src: '/images/ultraboost-5-shoes(womens-shoes2).avif', category: 'shoes', name: 'Ultraboost 5 Shoes', price: '$150' },
    { src: '/images/terrex-soulstride-flow-trail-running-shoes(women-shoes3).avif', category: 'shoes', name: 'Terrex Soulstride Shoes', price: '$110' },
    { src: '/images/supernova-3-gtx-running-shoes(women-shoes4).avif', category: 'shoes', name: 'Supernova GTX Running Shoes', price: '$130' },
    { src: '/images/adicolor-cargo-shorts(womens-clothing1).avif', category: 'clothing', name: 'Cargo Shorts', price: '$55' },
    { src: '/images/feelbrilliant-designed-to-move-tights(women-cloths2).avif', category: 'clothing', name: 'Move Tights', price: '$60' },
    { src: '/images/3-stripes-oversized-crew-sweatshirt(women-cloths3).avif', category: 'clothing', name: 'Oversized Crew Sweatshirt', price: '$70' },
    { src: '/images/tiro-23-league-shorts(women-cloths4).avif', category: 'clothing', name: 'League Shorts', price: '$50' }
  ],
  children: [
    { src: '/images/microfibre-cloth(kids-accessories4).avif', category: 'accessories', name: 'Microfibre Cloth', price: '$10' },
    { src: '/images/nmd_r1-v2-shoes(kids-shoes3).avif', category: 'shoes', name: 'NMD R1 V2 Shoes', price: '$85' },
    { src: '/images/power-backpack(kids-accessories1).avif', category: 'accessories', name: 'Power Backpack', price: '$60' },
    { src: '/images/power-backpack-pink(kids-accessories2).avif', category: 'accessories', name: 'Power Backpack Pink', price: '$65' },
    { src: '/images/sereno-track-suit(kids-cloths3).avif', category: 'clothing', name: 'Sereno Track Suit', price: '$70' },
    { src: '/images/swift-run-22-shoes(kids-shoes1).avif', category: 'shoes', name: 'Swift Run 22 Shoes', price: '$90' },
    { src: '/images/trefoil-shorts-tee-set(kids-cloths4).avif', category: 'clothing', name: 'Trefoil Shorts Tee Set', price: '$50' },
    { src: '/images/adicolor-pants(kids-cloths2).avif', category: 'clothing', name: 'Adicolor Pants', price: '$40' },
    { src: '/images/adidas-essentials-chelsea-shorts(kids-cloths1).avif', category: 'clothing', name: 'Essentials Chelsea Shorts', price: '$45' },
    { src: '/images/goletto-viii-firm-ground-boots(kids-shoes2).avif', category: 'shoes', name: 'Goletto VIII Boots', price: '$75' },
    { src: '/images/gazelle-bold-shoes-kids(kids-shoes4).avif', category: 'shoes', name: 'Gazelle Bold Shoes', price: '$80' },
    { src: '/images/uwcl-league-void-ball(kids-accessories3).avif', category: 'accessories', name: 'UWCL League Void Ball', price: '$15' }
  ]
};

function SectionPage({ category }) {
  const { addToCart } = useContext(CartContext);
  const [filter, setFilter] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [sizeError, setSizeError] = useState('');

  const filteredItems = items[category] ? (filter ? items[category].filter(item => item.category === filter) : items[category]) : [];

  const openModal = (item) => {
    setSelectedItem(item);
    setSelectedSize('');
    setSizeError('');
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError('Please select a size.');
    } else {
      addToCart({ ...selectedItem, size: selectedSize });
      closeModal();
    }
  };

  return (
    <div className="section-page">
      <div className="filter-buttons">
        <button onClick={() => setFilter('accessories')}>Accessories</button>
        <button onClick={() => setFilter('shoes')}>Shoes</button>
        <button onClick={() => setFilter('clothing')}>Clothing</button>
        <button onClick={() => setFilter('')}>Show All</button>
      </div>
      <div className="items-grid">
        {filteredItems.map((item, index) => (
          <div key={index} className="item-card" onClick={() => openModal(item)}>
            <img src={item.src} alt={item.name} />
            <div className="item-info">
              <p className="item-name">{item.name}</p>
              <p className="item-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>×</span>
            <img src={selectedItem.src} alt={selectedItem.name} className="modal-image" />
            <div className="modal-details">
              <h2>{selectedItem.name}</h2>
              <p className="item-price">{selectedItem.price}</p>
              <div className="size-options">
                <label>
                  <input type="radio" name="size" value="S" onChange={() => setSelectedSize('S')} /> S
                </label>
                <label>
                  <input type="radio" name="size" value="M" onChange={() => setSelectedSize('M')} /> M
                </label>
                <label>
                  <input type="radio" name="size" value="L" onChange={() => setSelectedSize('L')} /> L
                </label>
              </div>
              {sizeError && <p className="error-message">{sizeError}</p>}
              <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SectionPage;