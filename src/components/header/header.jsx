import { useState } from 'react';
import './header.css';
import Menu from './menu';
import MobileSearch from './mobileSearch';

function Header({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
    }
  }

  function handleMobileSearch(query) {
    onSearch(query);
  }

  return (
    <>
      <header className='header'>
        <div className='header-left'>
          <Menu/>
          <a href="">
            <img src="https://images.seeklogo.com/logo-png/33/1/jumia-logo-png_seeklogo-338163.png" alt="" className='jumia-icons'/>
          </a>
        </div>

        <form className='header-middle' onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder='Search products, brands and categories' 
            className='search-bar'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type='submit' className='search-btn'>
            Search
          </button>
        </form>

        <div className='header-right'>
          <div className='header-btn-cont' onClick={() => setShowMobileSearch(true)}>
            <img src="/magnifier.png" alt="" className='icons searchmobile'/>
          </div>
          <div className='header-btn-cont'>
            <img src="https://cdn-icons-png.flaticon.com/512/1250/1250740.png" alt="" className='icons'/>
            <span>Hi, Tuoyo</span>
          </div>
          <div className='header-btn-cont'>
            <img src="https://cdn-icons-png.flaticon.com/512/2984/2984971.png" alt="" className='icons help'/>
            <span>Help</span>
          </div>
          <div className='header-btn-cont'>
            <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="" className='icons'/>
            <span>Cart</span>
          </div>
        </div>
      </header>

      {showMobileSearch && (
        <MobileSearch 
          onClose={() => setShowMobileSearch(false)}
          onSearch={handleMobileSearch}
        />
      )}
    </>
  );
}

export default Header;
