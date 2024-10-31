import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id: Number(id),
    name: 'Premium Laptop',
    price: 999.99,
    description: 'High-performance laptop with the latest specifications.',
    image: 'https://source.unsplash.com/random/800x600?laptop',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-2xl font-semibold text-indigo-600 mt-4">
            ${product.price}
          </p>
          <p className="text-gray-600 mt-4">{product.description}</p>

          {/* Quantity Selector */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <div className="mt-1 flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border rounded-md"
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border rounded-md"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 space-y-4">
            <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
            <button className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 flex items-center justify-center">
              <Heart className="h-5 w-5 mr-2" />
              Add to Wishlist
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 border-t pt-8">
            <h3 className="text-lg font-semibold">Product Details</h3>
            <ul className="mt-4 space-y-2">
              <li>High-resolution display</li>
              <li>Latest generation processor</li>
              <li>Fast SSD storage</li>
              <li>Long battery life</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}