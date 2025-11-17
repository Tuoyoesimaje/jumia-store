import { useState, useEffect } from "react";
import './mainpage.css';
import ImageGallery from './components/productpage/imageGallery.jsx'
import Properties from "./components/productpage/itemproperties.jsx";
import Relatedproducts from "./components/sidebar/relatedproducts.jsx";
import ProductDescription from "./components/productdescription.jsx";
import Loading from "./components/Loading.jsx";

function Mainpage({ searchQuery }) {
  const [productId, setProductId] = useState(123); // iPhone 13 Pro - smartphones category
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // when user searches, find best matching product
  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      
      // search products
      fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
          if (data.products && data.products.length > 0) {
            // sort results by relevance - title matches first
            const sorted = data.products.sort((a, b) => {
              const aTitle = a.title.toLowerCase();
              const bTitle = b.title.toLowerCase();
              const query = searchQuery.toLowerCase();
              
              // exact title match gets highest priority
              if (aTitle === query) return -1;
              if (bTitle === query) return 1;
              
              // title starts with query gets second priority
              if (aTitle.startsWith(query)) return -1;
              if (bTitle.startsWith(query)) return 1;
              
              // title contains query gets third priority
              if (aTitle.includes(query) && !bTitle.includes(query)) return -1;
              if (bTitle.includes(query) && !aTitle.includes(query)) return 1;
              
              return 0;
            });
            
            const bestMatch = sorted[0];
            console.log('Best match:', bestMatch.title);
            setProductId(bestMatch.id);
          } else {
            // no results, try category search
            fetch(`https://dummyjson.com/products/category/${searchQuery}?limit=10`)
              .then(response => response.json())
              .then(data => {
                if (data.products && data.products.length > 0) {
                  console.log('Found by category');
                  setProductId(data.products[0].id);
                } else {
                  console.log('No products found');
                  setProduct(null);
                  setRelatedProducts([]);
                  setLoading(false);
                }
              });
          }
        })
        .catch(error => {
          console.log('Error:', error);
          setLoading(false);
        });
    }
  }, [searchQuery]);

  // this runs whenever productId changes
  useEffect(() => {
    setLoading(true);
    
    fetch(`https://dummyjson.com/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        localStorage.setItem(`product_${productId}`, JSON.stringify(data));
        
        return fetch(`https://dummyjson.com/products/category/${data.category}?limit=10`);
      })
      .then(response => response.json())
      .then(data => {
        const filtered = data.products.filter(p => p.id !== Number(productId));
        setRelatedProducts(filtered.slice(0, 5));
        localStorage.setItem(`related_${productId}`, JSON.stringify(filtered.slice(0, 5)));
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
        const cached = localStorage.getItem(`product_${productId}`);
        const cachedRelated = localStorage.getItem(`related_${productId}`);
        if (cached) setProduct(JSON.parse(cached));
        if (cachedRelated) setRelatedProducts(JSON.parse(cachedRelated));
        setLoading(false);
      });

    window.scrollTo(0, 0);
  }, [productId]);

  function handleProductClick(id) {
    setProductId(id);
    window.scrollTo(0, 0);
  }

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <div className="wrapper">
      <div className="main-body">
        <div className="second-main">
          <div className="main-section">
            <ImageGallery image={product.thumbnail} title={product.title} />
            <Properties 
              title={product.title}
              brand={product.brand}
              price={product.price}
              discount={product.discountPercentage}
              rating={product.rating}
              reviewCount={product.reviews?.length || 0}
              stock={product.stock}
            />
          </div>
          <ProductDescription description={product.description} />
        </div>
        <Relatedproducts 
          products={relatedProducts}
          onProductClick={handleProductClick}
        />
      </div>
    </div>  
  )
}

export default Mainpage
