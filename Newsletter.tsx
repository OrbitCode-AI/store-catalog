import './Newsletter.css';
import { useVar } from 'orbitcode';

interface NewsletterProps {
  title?: string;
  subtitle?: string;
}

function Newsletter({
  title = 'Stay in the Loop',
  subtitle = 'Subscribe to get special offers, free giveaways, and exclusive deals.'
}: NewsletterProps) {
  const [email, setEmail] = useVar<string>('newsletterEmail', '');
  const [subscribed, setSubscribed] = useVar<boolean>('newsletterSubscribed', false);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <h2>{title}</h2>
          <p>{subtitle}</p>

          {subscribed ? (
            <div className="success-message">
              <span className="success-icon">✓</span>
              <span>Thanks for subscribing! Check your inbox soon.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          )}

          <p className="privacy-note">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function NewsletterPreview() {
  return <Newsletter />;
}

export { Newsletter };
