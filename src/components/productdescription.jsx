function ProductDescription({ description }) {

  return(
    <div className="productDescription">
      <h4>
        Description
      </h4>
      <p>
        {description}
      </p>
      <span className="report">Report this product</span>
    </div>
  )
}

export default ProductDescription
