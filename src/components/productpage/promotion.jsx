import Linebr from '../elements/linebr'
function promo(){

  return(
    <div className='promo'>
      <Linebr/>
      <span>
        PROMOTIONS
      </span>
      <div className="promo-item">
        <img src="/rating.png" alt="promo" className='icons'/>
        <span>Call 07006000000 To Order</span>
      </div>

      <div className="promo-item">
        <img src="/rating.png" alt="promo" className='icons'/>
        <span>Need extra money? loan up to N500,000 on the JumiaPay Android app</span>
      </div>

      <div className="promo-item">
        <img src="/rating.png" alt="promo" className='icons'/>
        <span>Enjoy cheaper shipping fees when you select a PickUp Station at checkout</span>
      </div>
    </div>
  )
}

export default promo