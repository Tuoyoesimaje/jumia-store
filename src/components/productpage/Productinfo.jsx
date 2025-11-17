import Linebr from '../elements/linebr'

function Productinfo({ title, brand }){

  return(
    <div className='itemcont2'>
      <div>
        <h3>{title}</h3>
      </div>
      <div className="brands">
        <span>Brand:</span>
        <a href="#" className="brands-nav"><span>{brand}</span></a>
        <span>|</span>
        <a href="#" className="brands-nav"><span>Similar products from {brand}</span></a>
      </div>
      <Linebr/>
    </div>
  
  )
}

export default Productinfo
