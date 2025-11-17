import { useState } from 'react';
import './mobileSearch.css';

function MobileSearch({ onClose, onSearch }) {
  const [searchInput, setSearchInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
      onClose();
    }
  }

  return (
    <div className="mobile-search-overlay">
      <div className="mobile-search-header">
        <button className="back-btn" onClick={onClose}>
          ←
        </button>

        <form onSubmit={handleSubmit} className="mobile-search-form">
          <input
            type="text"
            placeholder="Search products, brands and categories"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            autoFocus
            className="mobile-search-input"
          />
          <button type="submit" className="mobile-search-btn">
            <img src="/magnifier.png" alt="search" className="search-icon-img" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default MobileSearch
