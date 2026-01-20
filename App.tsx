import './App.css';
import Header from './Header';
import Hero from './Hero';
import Categories from './Categories';
import ProductGrid from './ProductGrid';
import Newsletter from './Newsletter';
import Footer from './Footer';

function App() {
  return (
    <div className="store-catalog">
      <Header />
      <main>
        <Hero />
        <Categories />
        <ProductGrid />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
