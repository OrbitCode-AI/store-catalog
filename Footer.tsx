import './Footer.css';

interface FooterProps {
  storeName?: string;
}

function Footer({ storeName = 'ShopName' }: FooterProps) {
  return (
    <footer className="catalog-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>{storeName}</h3>
            <p>Your one-stop shop for quality products. We deliver happiness to your doorstep.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Pinterest">📌</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Shop</h4>
            <ul>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Sale Items</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Help</h4>
            <ul>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 {storeName}. All rights reserved.</p>
          <div className="payment-icons">
            <span>💳</span>
            <span>🅿️</span>
            <span>🍎</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Default export renders component in isolation for preview
export default function FooterPreview() {
  return <Footer storeName="My Store" />;
}

export { Footer };
