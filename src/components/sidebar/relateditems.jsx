import './sidebar.css'
import { formatNairaPrice } from '../../utils/priceConverter';

function Ralateditem({ product, onClick }){

  return(
    <div className='rela-item' onClick={onClick}>
      <div>
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className='icons'
          onError={(e) => e.target.src = '/star.png'}
        />
      </div>
      <div className='rela-item2'>
        <span>
          {product.title}
        </span>
        <span className='rela-category'>{product.category}</span>
        <span>₦{formatNairaPrice(product.price)}</span>
        <button className='rela-btn'>View product</button>
      </div>
    </div>
  )
}

export default Ralateditem
