import './Sidebar.css';

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

interface SidebarProps {
  categories: Category[];
  selectedCategory: string;
  minPrice: number;
  maxPrice: number;
  onCategoryChange: (id: string) => void;
  onPriceChange: (min: number, max: number) => void;
}

function Sidebar({
  categories,
  selectedCategory,
  minPrice,
  maxPrice,
  onCategoryChange,
  onPriceChange,
}: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-title">Categories</h3>
        <div className="category-list">
          <button
            className={`category-item ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => onCategoryChange('all')}
          >
            <span className="category-icon">📦</span>
            All Products
            <span className="category-count">{categories.reduce((sum, c) => sum + c.count, 0)}</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-item ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => onCategoryChange(cat.id)}
            >
              <span className="category-icon">{cat.icon}</span>
              {cat.name}
              <span className="category-count">{cat.count}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-title">Price Range</h3>
        <div className="price-range">
          <div className="price-inputs">
            <div className="price-input">
              <label>Min</label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => onPriceChange(Number((e.target as HTMLInputElement).value), maxPrice)}
              />
            </div>
            <div className="price-input">
              <label>Max</label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => onPriceChange(minPrice, Number((e.target as HTMLInputElement).value))}
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

const sampleCategories: Category[] = [
  { id: 'electronics', name: 'Electronics', icon: '📱', count: 24 },
  { id: 'clothing', name: 'Clothing', icon: '👕', count: 18 },
  { id: 'home', name: 'Home & Garden', icon: '🏠', count: 12 },
  { id: 'sports', name: 'Sports', icon: '⚽', count: 9 },
];

// Default export renders component in isolation for preview
export default function SidebarPreview() {
  return (
    <div className="preview-sidebar">
      <Sidebar
        categories={sampleCategories}
        selectedCategory="all"
        minPrice={0}
        maxPrice={500}
        onCategoryChange={(id) => console.log('Category:', id)}
        onPriceChange={(min, max) => console.log('Price:', min, max)}
      />
    </div>
  );
}

export { Sidebar };
export type { Category };
