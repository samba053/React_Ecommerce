import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-800 text-white">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Welcome to Our E-Commerce Store</h1>
          <p className="text-lg sm:text-2xl mb-8">
            Discover the best products for your daily needs.
          </p>
          <a
            href="/shop"
            className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded hover:bg-yellow-600"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1 */}
            <div className="bg-white shadow-lg rounded-lg p-4">
              <img
                className="w-full h-64 object-cover object-center mb-4"
                src="https://via.placeholder.com/150"
                alt="Product 1"
              />
              <h3 className="text-lg font-semibold">Product 1</h3>
              <p className="text-gray-600">$49.99</p>
              <a
                href="/product/1"
                className="block mt-4 text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-700"
              >
                View Product
              </a>
            </div>

            {/* Product 2 */}
            <div className="bg-white shadow-lg rounded-lg p-4">
              <img
                className="w-full h-64 object-cover object-center mb-4"
                src="https://via.placeholder.com/150"
                alt="Product 2"
              />
              <h3 className="text-lg font-semibold">Product 2</h3>
              <p className="text-gray-600">$79.99</p>
              <a
                href="/product/2"
                className="block mt-4 text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-700"
              >
                View Product
              </a>
            </div>

            {/* Product 3 */}
            <div className="bg-white shadow-lg rounded-lg p-4">
              <img
                className="w-full h-64 object-cover object-center mb-4"
                src="https://via.placeholder.com/150"
                alt="Product 3"
              />
              <h3 className="text-lg font-semibold">Product 3</h3>
              <p className="text-gray-600">$99.99</p>
              <a
                href="/product/3"
                className="block mt-4 text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-700"
              >
                View Product
              </a>
            </div>

            {/* Product 4 */}
            <div className="bg-white shadow-lg rounded-lg p-4">
              <img
                className="w-full h-64 object-cover object-center mb-4"
                src="https://via.placeholder.com/150"
                alt="Product 4"
              />
              <h3 className="text-lg font-semibold">Product 4</h3>
              <p className="text-gray-600">$59.99</p>
              <a
                href="/product/4"
                className="block mt-4 text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-700"
              >
                View Product
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="bg-yellow-500 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Subscribe for Updates</h2>
        <p className="text-gray-900 mb-6">
          Get the latest updates on new products and upcoming sales.
        </p>
        <form className="max-w-lg mx-auto flex items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg w-full sm:w-auto"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gray-800 text-white rounded-r-lg hover:bg-gray-700"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
