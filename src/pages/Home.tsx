import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-indigo-900">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Welcome to TechStore
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-indigo-200">
              Discover the latest in technology and electronics
            </p>
            <div className="mt-10">
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Laptops', 'Smartphones', 'Accessories'].map((category) => (
            <Link
              key={category}
              to={`/category/${category.toLowerCase()}`}
              className="relative rounded-lg overflow-hidden group"
            >
              <img
                src={`https://source.unsplash.com/random/400x300?${category}`}
                alt={category}
                className="w-full h-64 object-cover transition-transform duration-200 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{category}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={`https://source.unsplash.com/random/400x300?tech${id}`}
                alt={`Product ${id}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Product {id}</h3>
                <p className="text-gray-600 mt-1">$999.99</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}