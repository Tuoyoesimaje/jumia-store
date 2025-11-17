function ImageGallery({ image, title }) {

  return(
    <div className="item-cont">
      <div className="image-cont">
        <img 
          src={image} 
          alt={title} 
          className="image"
          onError={(e) => e.target.src = '/star.png'}
        />
      </div>
      <div>
        <span>SHARE THIS PRODUCT</span>
      </div>
      <div className="socials-cont">
        <div className="socials"><img src="https://cdn-icons-png.flaticon.com/512/20/20837.png" alt="" className="icons"/>
        </div>
        <div className="socials"><img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="" className="icons"/>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
