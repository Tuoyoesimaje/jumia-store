import Relateditems from "./relateditems"
import './sidebar.css'
import Linebr from "../elements/linebr"

function relatedproducts({ products, onProductClick }){

  return(
    <div className="relatedlist-container">
      <h4>PRODUCTS</h4>
      <div className="products-scroll">
        {products.map((product, index) => (
          <div key={product.id}>
            <Relateditems 
              product={product}
              onClick={() => onProductClick(product.id)}
            />
            {index < products.length - 1 && <Linebr/>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default relatedproducts
