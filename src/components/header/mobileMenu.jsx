import './mobileMenu.css';

function MobileMenu({ onClose }) {

  return(
    <>
      <div className="mobile-menu-overlay" onClick={onClose}></div>
      
      <div className="mobile-menu">
        <div className="mobile-menu-header">
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
          <img src="https://images.seeklogo.com/logo-png/33/1/jumia-logo-png_seeklogo-338163.png" alt="Jumia" className="mobile-logo"/>
        </div>

        <div className="mobile-menu-content">
          <div className="mobile-menu-section menu-fix">
            <div className="mobile-menu-item">
              <span>NEED HELP?</span>
              <img src="src/assets/right-arrow.png" alt="" className='mobile-icon arrow'/>
            </div>
            
            <div className="mobile-menu-item">
              <span>MY JUMIA ACCOUNT</span>
              <img src="src/assets/right-arrow.png" alt="" className='mobile-icon arrow'/>
            </div>
          </div>

          <div className="mobile-menu-divider"></div>

          <div className="mobile-menu-section">
            
            <div className="mobile-menu-item-simple">
              <img src="src/assets/delivery-box.png" alt="" className='mobile-icon'/>
              <span>Orders</span>
            </div>

            <div className="mobile-menu-item-simple">
              <img src="src/assets/mail.png" alt="" className='mobile-icon'/>
              <span>Inbox</span>
            </div>

            <div className="mobile-menu-item-simple">
              <img src="src/assets/write-message.png" alt="" className='mobile-icon'/>
              <span>Pending Reviews</span>
            </div>

            <div className="mobile-menu-item-simple">
              <img src="src/assets/coupon.png" alt="" className='mobile-icon'/>
              <span>Voucher</span>
            </div>

            <div className="mobile-menu-item-simple">
              <img src="src/assets/menuheart.png" alt="" className='mobile-icon'/>
              <span>Wishlist</span>
            </div>
          </div>

          <div className="mobile-menu-divider"></div>

          <div className="mobile-menu-section">
            <div className="mobile-menu-section-header">
              <span>OUR CATEGORIES</span>
              <span className="see-all">See All</span>
            </div>

            <div className="mobile-menu-item-simple">
              <img src="https://cdn-icons-png.flaticon.com/512/5812/5812250.png" alt="" className="mobile-icon"/>
              <span>Phone & Tablets</span>
            </div>

            <div className="mobile-menu-item-simple">
              <img src="https://cdn-icons-png.flaticon.com/512/767/767266.png" alt="" className="mobile-icon"/>
              <span>Appliances</span>
            </div>

            <div className="mobile-menu-item-simple">
              <img src="https://cdn-icons-png.flaticon.com/512/8379/8379844.png" alt="" className="mobile-icon"/>
              <span>Electronics</span>
            </div>

            <div className="mobile-menu-item-simple">
              <img src="https://cdn-icons-png.flaticon.com/512/9468/9468896.png" alt="" className="mobile-icon"/>
              <span>Supermarket</span>
            </div>

            <div className="mobile-menu-item-simple">
              <img src="https://cdn-icons-png.flaticon.com/512/80/80290.png" alt="" className="mobile-icon"/>
              <span>Health & Beauty</span>
            </div>

            <div className="mobile-menu-item-simple">
              <img src="https://cdn-icons-png.flaticon.com/512/9314/9314393.png" alt="" className="mobile-icon"/>
              <span>Home & Office</span>
            </div>

            <div className="mobile-menu-item-simple">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="#666" strokeWidth="1.5"/>
              </svg>
              <span>Power</span>
            </div>

            <div className="mobile-menu-item-simple">
              <img src="https://cdn-icons-png.flaticon.com/512/2071/2071756.png" alt="" className="mobile-icon"/>
              <span>Computing</span>
            </div>

            <div className="mobile-menu-item-simple">
              <img src="https://cdn-icons-png.flaticon.com/512/14075/14075829.png" alt="" className="mobile-icon"/>
              <span>Women's Fashion</span>
            </div>

            <div className="mobile-menu-item-simple">
              <img src="https://cdn-icons-png.flaticon.com/512/14075/14075829.png" alt="" className="mobile-icon"/>
              <span>Men's Fashion</span>
            </div>

            <div className="mobile-menu-item-simple">
              <img src="https://cdn-icons-png.flaticon.com/512/105/105627.png" alt="" className="mobile-icon"/>
              <span>Baby Products</span>
            </div>
          </div>
          
          <div className="mobile-menu-divider"></div>

          <div className="mobile-menu-section">
            <div className="mobile-menu-section-header">
              <span>OUR SERVICES</span>
              <span className="see-all">See All</span>
            </div>

            <div className="mobile-menu-item-simple">
              <img src="src/assets/menustar.png" alt="" className='mobile-icon'/>
              <span>J-Force</span>
            </div>

            <div className="mobile-menu-item-simple">
              <img src="src/assets/menustar.png" alt="" className='mobile-icon'/>
              <span>Pay Airtime & Bills</span>
            </div>

            <div className="mobile-menu-item-simple">
              <img src="src/assets/menustar.png" alt="" className='mobile-icon'/>
              <span>Pay Electricity Bills</span>
            </div>

            <div className="mobile-menu-item-simple">
              <img src="src/assets/menustar.png" alt="" className='mobile-icon'/>
              <span>Pay Internet Bills</span>
            </div>

            <div className="mobile-menu-item-simple">
              <img src="src/assets/menustar.png" alt="" className='mobile-icon'/>
              <span>Buy Data</span>
            </div>

          </div>

          <div className="mobile-menu-divider"></div>
          <div className="mobile-menu-section">
            <div className="mobile-menu-item-simple">
              <span>Sell on Jumia</span>
            </div>
            <div className="mobile-menu-item-simple">
              <span>Service Center</span>
            </div>
            <div className="mobile-menu-item-simple">
              <span>Contact us</span>
            </div>

          </div>


        </div>
      </div>
    </>
  )
}

export default MobileMenu
