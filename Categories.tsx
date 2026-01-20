import './Categories.css';
import { useVar } from 'orbitcode';

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  color: string;
}

interface CategoriesProps {
  categories?: Category[];
}

const defaultCategories: Category[] = [
  { id: 'electronics', name: 'Electronics', icon: '📱', count: 234, color: '#74b9ff' },
  { id: 'clothing', name: 'Clothing', icon: '👕', count: 567, color: '#a29bfe' },
  { id: 'home', name: 'Home & Garden', icon: '🏠', count: 189, color: '#55efc4' },
  { id: 'sports', name: 'Sports', icon: '⚽', count: 312, color: '#ffeaa7' },
  { id: 'books', name: 'Books', icon: '📚', count: 445, color: '#fab1a0' },
  { id: 'beauty', name: 'Beauty', icon: '💄', count: 278, color: '#fd79a8' }
];

function Categories({ categories = defaultCategories }: CategoriesProps) {
  const [, setSelectedCategory] = useVar<string | null>('selectedCategory', null);

  return (
    <section id="categories" className="categories-section">
      <div className="container">
        <h2>Shop by Category</h2>

        <div className="categories-grid">
          {categories.map((category) => (
            <button
              key={category.id}
              className="category-card"
              onClick={() => setSelectedCategory(category.id)}
              style={{ '--accent-color': category.color } as React.CSSProperties}
            >
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <span className="category-count">{category.count} items</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function CategoriesPreview() {
  return <Categories />;
}

export { Categories };
