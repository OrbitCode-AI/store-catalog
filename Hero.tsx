import './Hero.css';

interface HeroProps {
  title?: string;
  subtitle?: string;
}

function Hero({
  title = 'New Season Collection',
  subtitle = 'Discover our latest arrivals with up to 40% off'
}: HeroProps) {
  return (
    <section className="catalog-hero">
      <div className="hero-content">
        <span className="hero-badge">Limited Time</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="hero-actions">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-outline">View Lookbook</button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-shape"></div>
        <div className="hero-shape secondary"></div>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function HeroPreview() {
  return <Hero />;
}

export { Hero };
