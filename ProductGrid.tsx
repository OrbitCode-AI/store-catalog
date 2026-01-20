import './ProductGrid.css';
import { useVar } from 'orbitcode';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
}

interface ProductGridProps {
  products?: Product[];
}

const defaultProducts: Product[] = [
  { id: '1', name: 'Wireless Headphones', price: 79, originalPrice: 99, image: '#74b9ff', rating: 4.5, reviews: 234, badge: 'Sale' },
  { id: '2', name: 'Smart Watch', price: 199, image: '#a29bfe', rating: 4.8, reviews: 567 },
  { id: '3', name: 'Running Shoes', price: 129, image: '#55efc4', rating: 4.3, reviews: 189 },
  { id: '4', name: 'Backpack', price: 59, originalPrice: 79, image: '#ffeaa7', rating: 4.6, reviews: 312, badge: 'Sale' },
  { id: '5', name: 'Sunglasses', price: 149, image: '#fab1a0', rating: 4.7, reviews: 445 },
  { id: '6', name: 'Water Bottle', price: 29, image: '#fd79a8', rating: 4.4, reviews: 278, badge: 'New' },
  { id: '7', name: 'Yoga Mat', price: 45, image: '#00cec9', rating: 4.5, reviews: 156 },
  { id: '8', name: 'Desk Lamp', price: 65, image: '#e17055', rating: 4.2, reviews: 89 }
];

function ProductCard({ product }: { product: Product }) {
  const [favorites, setFavorites] = useVar<string[]>('favorites', []);
  const [cartItems, setCartItems] = useVar<string[]>('cartItems', []);

  const isFavorite = favorites.includes(product.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter((id) => id !== product.id));
    } else {
      setFavorites([...favorites, product.id]);
    }
  };

  const addToCart = () => {
    setCartItems([...cartItems, product.id]);
  };

  return (
    <div className="product-card">
      {product.badge && <span className="product-badge">{product.badge}</span>}
      <button
        className={`favorite-btn ${isFavorite ? 'active' : ''}`}
        onClick={toggleFavorite}
        aria-label="Add to favorites"
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>

      <div className="product-image" style={{ background: product.image }}>
        <span className="product-emoji">📦</span>
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="product-rating">
          <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
          <span className="rating-text">{product.rating} ({product.reviews})</span>
        </div>
        <div className="product-price">
          <span className="current-price">${product.price}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>
      </div>

      <button className="add-to-cart-btn" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

function ProductGrid({ products = defaultProducts }: ProductGridProps) {
  const [sortBy, setSortBy] = useVar<string>('productSortBy', 'featured');

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      default: return 0;
    }
  });

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="products-header">
          <h2>Featured Products</h2>
          <div className="sort-controls">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy((e.target as HTMLSelectElement).value)}>
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <button className="load-more-btn">Load More Products</button>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function ProductGridPreview() {
  return <ProductGrid />;
}

export { ProductGrid, ProductCard };
