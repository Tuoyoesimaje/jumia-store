import FlashSaleTimer from './FlashSaleTimer'
import Productinfo from './Productinfo'
import RatingStars from './Ratingstars'
import Promotion from './promotion'
import './styles/itemproperties.css'

// This component collects all the product info from the parent and distributes it to the child components
function Properties({ title, brand, price, discount, rating, reviewCount, stock }){

  return(
    <div className='itemprops'>
      <div className='itemcont1'>
        <div className='productTags'>
          <span className='storeTag'>Official Store</span>
          <span className='podTag'>Pay On Delivery</span>
        </div>
        <div className='orangeheart'><img src="/heartbold.png" alt="favorite" className='icons'/>
        </div>
      </div>
      {/* Passing the title and brand to Productinfo for display */}
      <Productinfo title={title} brand={brand} />
      {/* FlashSaleTimer needs the price, discount and stock for its calculations */}
      <FlashSaleTimer price={price} discount={discount} stock={stock} />
      <div>
        <div>
          <span>+ shipping from ₦ 1,100 to Warri</span>
        </div>
        {/* RatingStars displays the star rating and number of reviews */}
        <RatingStars rating={rating} reviewCount={reviewCount} />
        <div>
          <div className='action-buttons-mobile'>
            <span className='call-btn'>
              <img src="/call.png" alt="call" className='icons' />
            </span>
            <span className='addtocart-btn2'>
              <img src="/cart.png" alt="cart" className='icons cart-btn' />
              <span className='inner-btn'>ADD TO CART</span>
            </span>
          </div>
          <span className='addtocart-btn'>
            <img src="/cart.png" alt="cart" className='icons cart-btn' />
            <span className='inner-btn'>ADD TO CART</span>
          </span>
        </div>

      </div>
      
      <Promotion/>
    </div>
    
  )
}

export default Properties