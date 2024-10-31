import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  // Mock cart items
  const cartItems = [
    {
      id: 1,
      name: 'Premium Laptop',
      price: 999.99,
      quantity: 1,
      image: 'https://source.unsplash.com/random/400x300?laptop',
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      price: 199.99,
      quantity: 2,
      image: 'https://source.unsplash.com/random/400x300?headphones',
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 9.99;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 border-b py-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
                <div className="mt-2 flex items-center space-x-2">
                  <button className="px-2 py-1 border rounded">-</button>
                  <span>{item.quantity}</span>
                  <button className="px-2 py-1 border rounded">+</button>
                </div>
              </div>
              <button className="text-red-500 hover:text-red-700">
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md mt-6 hover:bg-indigo-700">
            Proceed to Checkout
          </button>
          <Link
            to="/products"
            className="block text-center text-indigo-600 hover:text-indigo-700 mt-4"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}