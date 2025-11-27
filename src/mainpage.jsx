import { useState, useEffect } from "react";
import './mainpage.css';
import ImageGallery from './components/productpage/imageGallery.jsx'
import Properties from "./components/productpage/itemproperties.jsx";
import Relatedproducts from "./components/sidebar/relatedproducts.jsx";
import ProductDescription from "./components/productdescription.jsx";
import Loading from "./components/Loading.jsx";

function Mainpage({ searchQuery }) {
  const [productId, setProductId] = useState(123); // Starting with iPhone 13 Pro - it's in the smartphones category
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // Array to store all fetched products with full details - prevents redundant API calls
  const [allProducts, setAllProducts] = useState([]);

  // Whenever someone searches, I need to find the product that matches best
  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      // Clear products array on new search to fetch fresh data
      setAllProducts([]);
      
      // First, let me search for products
      fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
          if (data.products && data.products.length > 0) {
            // Sort these results by relevance - exact title matches should appear first
            const sorted = data.products.sort((a, b) => {
              const aTitle = a.title.toLowerCase();
              const bTitle = b.title.toLowerCase();
              const query = searchQuery.toLowerCase();
              
              // Exact title match gets highest priority
              if (aTitle === query) return -1;
              if (bTitle === query) return 1;
              
              // Title starting with the search query gets second priority
              if (aTitle.startsWith(query)) return -1;
              if (bTitle.startsWith(query)) return 1;
              
              // Title containing the query anywhere gets third priority
              if (aTitle.includes(query) && !bTitle.includes(query)) return -1;
              if (bTitle.includes(query) && !aTitle.includes(query)) return 1;
              
              return 0;
            });
            
            const bestMatch = sorted[0];
            console.log('Best match:', bestMatch.title);
            setProductId(bestMatch.id);
          } else {
            // No results found. Let me try searching by category instead
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

  // This runs whenever the productId changes
  useEffect(() => {
    // Check if product is already in our array
    const cachedProduct = allProducts.find(p => p.id === productId);
    
    if (cachedProduct) {
      console.log('Using cached data for product:', productId);
      setProduct(cachedProduct);
      
      // Get related products from the same category that are already in our array
      const related = allProducts.filter(p => 
        p.category === cachedProduct.category && p.id !== productId
      ).slice(0, 5);
      
      setRelatedProducts(related);
      setLoading(false);
      window.scrollTo(0, 0);
      return;
    }

    // If not in array, fetch it
    setLoading(true);
    
    fetch(`https://dummyjson.com/products/${productId}`)
      .then(response => response.json())
      .then(mainProduct => {
        setProduct(mainProduct);
        
        // Fetch related products from the same category
        return fetch(`https://dummyjson.com/products/category/${mainProduct.category}?limit=10`)
          .then(response => response.json())
          .then(data => {
            const filtered = data.products.filter(p => p.id !== Number(productId));
            const relatedItems = filtered.slice(0, 5);
            
            // Now fetch FULL DETAILS for each related product
            const detailPromises = relatedItems.map(item => 
              fetch(`https://dummyjson.com/products/${item.id}`)
                .then(res => res.json())
            );
            
            return Promise.all(detailPromises).then(detailedProducts => {
              // Add all products to our array (main + related)
              const newProducts = [mainProduct, ...detailedProducts];
              
              // Merge with existing products, avoiding duplicates
              setAllProducts(prevProducts => {
                const combined = [...prevProducts, ...newProducts];
                // Remove duplicates by id
                const unique = combined.filter((product, index, self) =>
                  index === self.findIndex(p => p.id === product.id)
                );
                console.log('Total products stored:', unique.length);
                return unique;
              });
              
              setRelatedProducts(detailedProducts);
              setLoading(false);
            });
          });
      })
      .catch(error => {
        console.log('Error fetching data:', error);
        setLoading(false);
      });

    window.scrollTo(0, 0);
  }, [productId, allProducts]);

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
