import './ProductCard.css';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: 'sale' | 'new';
}

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onAddToCart: () => void;
  onToggleWishlist: () => void;
}

function ProductCard({ product, isWishlisted, onAddToCart, onToggleWishlist }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-image">
        {product.image}
        {product.badge && (
          <span className={`product-badge ${product.badge}`}>
            {product.badge === 'sale' ? 'Sale' : 'New'}
          </span>
        )}
        <button
          className={`product-wishlist ${isWishlisted ? 'active' : ''}`}
          onClick={onToggleWishlist}
        >
          {isWishlisted ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <span className="rating-stars">{'★'.repeat(Math.floor(product.rating))}</span>
          <span className="rating-count">({product.reviews})</span>
        </div>
        <div className="product-footer">
          <span className="product-price">
            ${product.price}
            {product.originalPrice && (
              <span className="original">${product.originalPrice}</span>
            )}
          </span>
          <button className="product-add" onClick={onAddToCart}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones Pro',
    category: 'Electronics',
    price: 199,
    originalPrice: 249,
    image: '🎧',
    rating: 4,
    reviews: 128,
    badge: 'sale',
  },
  {
    id: '2',
    name: 'Smart Watch Series X',
    category: 'Electronics',
    price: 399,
    image: '⌚',
    rating: 5,
    reviews: 89,
    badge: 'new',
  },
];

// Default export renders component in isolation for preview
export default function ProductCardPreview() {
  return (
    <div className="preview-cards">
      {sampleProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isWishlisted={product.id === '1'}
          onAddToCart={() => alert(`Added ${product.name} to cart`)}
          onToggleWishlist={() => console.log('Toggle wishlist')}
        />
      ))}
    </div>
  );
}

export { ProductCard };
export type { Product };
