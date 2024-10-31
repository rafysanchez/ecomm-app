import { Search as SearchIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function Search() {
  // Mock search results
  const searchResults = [
    {
      id: 1,
      name: 'Premium Laptop',
      price: 999.99,
      description: 'High-performance laptop',
      image: 'https://source.unsplash.com/random/400x300?laptop',
      category: 'Laptops',
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      price: 199.99,
      description: 'Premium wireless headphones',
      image: 'https://source.unsplash.com/random/400x300?headphones',
      category: 'Audio',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <SearchIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            
            {/* Categories */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Categories</h4>
              {['Laptops', 'Smartphones', 'Audio', 'Accessories'].map((category) => (
                <label key={category} className="flex items-center space-x-2 mb-2">
                  <input type="checkbox" className="rounded text-indigo-600" />
                  <span>{category}</span>
                </label>
              ))}
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Price Range</h4>
              <input
                type="range"
                min="0"
                max="2000"
                className="w-full"
              />
              <div className="flex justify-between mt-2">
                <span>$0</span>
                <span>$2000</span>
              </div>
            </div>

            {/* Sort */}
            <div>
              <h4 className="font-medium mb-2">Sort By</h4>
              <select className="w-full border rounded-md p-2">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Popular</option>
              </select>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}