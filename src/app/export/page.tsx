import Link from 'next/link';

export default function ExportPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Export</span> Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We currently export premium quality beef to Middle East markets with dependable supply,
              international documentation support, and a quality-first logistics process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg"
              >
                Start Export Inquiry
              </Link>
              <Link
                href="/services"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Export Overview Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Export Focus</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our current export operations are focused on supplying high-quality beef to Middle East countries.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>• Consistent product quality</li>
                <li>• Export-ready documentation</li>
                <li>• Temperature-controlled handling</li>
                <li>• Timely international shipment</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Target Markets</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We are actively serving Middle East destinations through a dependable export chain and delivery planning.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>• Region-specific supply planning</li>
                <li>• Fast order coordination</li>
                <li>• Buyer-oriented packaging support</li>
                <li>• Consistent communication and updates</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Future Expansion</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We are building our export roadmap for additional categories and broader regional growth in the future.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>• Category expansion planning</li>
                <li>• New market onboarding</li>
                <li>• Stronger partner network</li>
                <li>• Scalable export operations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Export Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured process that keeps quality, compliance, and timeline reliability at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Requirement Review</h3>
              <p className="text-gray-600">We review destination requirements, quantity, timeline, and buyer expectations.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality & Documentation</h3>
              <p className="text-gray-600">Our team prepares shipment with required quality checks and export documentation.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cold Chain Logistics</h3>
              <p className="text-gray-600">Temperature-controlled handling is maintained to protect product integrity.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Delivery & Support</h3>
              <p className="text-gray-600">We coordinate dispatch updates and remain available for post-shipment support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Looking for a Reliable Beef Export Partner?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Connect with our team to discuss your required volume, destination market, packaging preferences, and shipment schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Talk to Export Team
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
