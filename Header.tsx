import './Header.css';
import { useVar } from 'orbitcode';

interface HeaderProps {
  storeName?: string;
}

function Header({ storeName = 'ShopName' }: HeaderProps) {
  const [cartItems] = useVar<string[]>('cartItems', []);
  const [searchQuery, setSearchQuery] = useVar<string>('searchQuery', '');
  const [menuOpen, setMenuOpen] = useVar<boolean>('catalogMenuOpen', false);

  return (
    <header className="catalog-header">
      <div className="header-container">
        <a href="#" className="logo">{storeName}</a>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <a href="#categories">Categories</a>
          <a href="#products">Products</a>
          <a href="#deals">Deals</a>
          <a href="#about">About</a>
        </nav>

        <div className="header-search">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
          />
          <button className="search-btn">🔍</button>
        </div>

        <div className="header-actions">
          <button className="icon-btn" aria-label="Account">👤</button>
          <button className="icon-btn cart-btn" aria-label="Cart">
            🛒
            {cartItems.length > 0 && (
              <span className="cart-badge">{cartItems.length}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

// Default export renders component in isolation for preview
export default function HeaderPreview() {
  return (
    <div className="preview-container">
      <Header storeName="My Store" />
    </div>
  );
}

export { Header };
