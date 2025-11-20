function RatingStars({ rating, reviewCount }){
  
  // Need to break down this rating - how many full stars and whether there's a half star
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return(
    <div className="Ratingstars">
      <div className="starratings">
        {[...Array(fullStars)].map((_, index) => (
          <img 
            key={index}
            src="https://cdn-icons-png.flaticon.com/512/15853/15853959.png" 
            alt="star" 
            className="icons"
          />
        ))}
        {hasHalfStar && (
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2107/2107737.png" 
            alt="half star" 
            className="icons half-star"
          />
        )}
      </div>
      <span>({reviewCount} verified ratings)</span>
    </div>
  )

}

export default RatingStars
