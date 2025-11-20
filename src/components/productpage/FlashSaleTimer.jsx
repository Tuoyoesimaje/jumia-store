import { useState, useEffect } from 'react';
import { convertToNaira } from '../../utils/priceConverter';
import './styles/flashsale.css';

function FlashSaleTimer({ price, discount, stock }){
  
  // Generate a random time between 1-12 hours when this loads. Makes it feel more realistic since it's different each time
  const [timeLeft, setTimeLeft] = useState(() => {
    const randomHours = Math.floor(Math.random() * 12) + 1;
    return randomHours * 3600; // Converting to seconds
  });

  // Countdown timer that runs every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format the time properly - hours:minutes:seconds
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  
  // Convert the dollar price to naira since we're working with Nigerian currency here
  const nairaPrice = convertToNaira(price);
  
  // If there's a discount, I need to calculate what the original price was before it was slashed
  let originalNairaPrice = null;
  if (discount && discount > 0) {
    originalNairaPrice = nairaPrice / (1 - discount / 100);
    originalNairaPrice = Math.round(originalNairaPrice);
  }

  // For the progress bar - assuming max stock is 100. Can adjust this later if needed
  const maxStock = 100;
  const stockPercentage = Math.min((stock / maxStock) * 100, 100);

  return(
    <div className="flashsaletimer">
      <div className="fsHeader">
        <div className="fsNametag">
          <img src="/tag.png" alt="tag" className='icons'/>
          <span>Flash Sales</span>
        </div>
        <div>
          <span>Time Left: </span>
          <span>{hours}h:{minutes}m:{seconds}s</span>
        </div>
      </div>
      <div className="innerFS">
        <div className="fsPrices">
          <span className="mainPrice">₦ {nairaPrice.toLocaleString('en-NG')}</span>
          {originalNairaPrice && <span className="oldPrice">₦ {originalNairaPrice.toLocaleString('en-NG')}</span>}
          {discount > 0 && <span className="priceOff">-{Math.round(discount)}%</span>}
        </div>
        <div className="stock-container">
          <span className="stock-text">{stock} items left</span>
          <div className="progress-bar-container">
            <div 
              className="progress-bar-fill"
              style={{ width: `${stockPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlashSaleTimer
