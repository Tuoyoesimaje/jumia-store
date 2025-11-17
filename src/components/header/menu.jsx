import { useState } from 'react';
import MenuModal from './menuModal';
import MobileMenu from './mobileMenu';
import './menu.css';

function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function handleMenuClick() {
    if (window.innerWidth <= 800) {
      setShowMobileMenu(true);
    }
  }

  return(
    <>
      <div 
        className="menu-container"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        onClick={handleMenuClick}
      >
        <span aria-label="Open menu" className="menu-icon">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="1" width="20" height="2" rx="1" fill="#2B2B2B" />
            <rect y="6" width="20" height="2" rx="1" fill="#2B2B2B" />
            <rect y="11" width="20" height="2" rx="1" fill="#2B2B2B" />
          </svg>
        </span>
        
        {showMenu && <MenuModal />}
      </div>

      {showMobileMenu && (
        <MobileMenu onClose={() => setShowMobileMenu(false)} />
      )}
    </>
  )
}

export default Menu
