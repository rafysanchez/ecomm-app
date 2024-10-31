import { ShoppingCart, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-indigo-600">TechStore</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-indigo-600">Products</Link>
            <Link to="/categories" className="text-gray-700 hover:text-indigo-600">Categories</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/search" className="text-gray-700 hover:text-indigo-600">
              <Search className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-indigo-600 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}