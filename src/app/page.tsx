import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-yellow-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Fast Marketing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
                  Pakistan's Leading
                </span>
                <span className="block">Marketing Agency</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                We help businesses across Pakistan reach their target audience with our comprehensive 
                local market distribution and digital marketing services. From chips to consumer goods, 
                we make your products visible everywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
                >
                  Get Started Today
                </Link>
                <Link 
                  href="/services" 
                  className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-200 text-center"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="animate-fadeInRight">
              <div className="relative">
                <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Nationwide Distribution Network
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Digital Marketing Excellence
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Proven Track Record
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        24/7 Customer Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive marketing solutions to help your business grow across Pakistan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Local Market Distribution */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Market Distribution</h3>
              <p className="text-gray-600 mb-6">
                Reach every corner of Pakistan with our extensive distribution network. 
                We ensure your products are available in local markets, shops, and retail outlets.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Nationwide coverage</li>
                <li>• Local retailer partnerships</li>
                <li>• Inventory management</li>
                <li>• Market penetration strategies</li>
              </ul>
            </div>

            {/* Digital Marketing */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Marketing</h3>
              <p className="text-gray-600 mb-6">
                Boost your online presence with our digital marketing expertise. 
                From social media to SEO, we help you connect with your digital audience.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Social media marketing</li>
                <li>• Search engine optimization</li>
                <li>• Google Ads campaigns</li>
                <li>• Content marketing</li>
              </ul>
            </div>

            {/* Brand Promotion */}
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Brand Promotion</h3>
              <p className="text-gray-600 mb-6">
                Build a strong brand presence with our comprehensive promotion strategies. 
                We help create memorable campaigns that resonate with your target audience.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Brand awareness campaigns</li>
                <li>• Product launches</li>
                <li>• Event marketing</li>
                <li>• Public relations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-xl opacity-90">Happy Clients</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-xl opacity-90">Cities Covered</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-xl opacity-90">Products Marketed</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">7+</div>
              <div className="text-xl opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                  L
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Lassani Foods</h4>
                  <p className="text-gray-600 text-sm">Food Products Company</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Fast Marketing helped us expand our distribution across Pakistan. 
                Their local market expertise is unmatched. Sales increased by 300% in just 6 months!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                  G
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Gulzar Foods Nimco</h4>
                  <p className="text-gray-600 text-sm">Nimco & Snacks Company</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Their digital marketing strategies transformed our online presence. 
                We now reach customers we never thought possible. Highly recommended!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Al Jannat Foods</h4>
                  <p className="text-gray-600 text-sm">Food Products Company</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The team's understanding of local markets is incredible. 
                They helped us launch our new product line successfully across multiple cities."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Join hundreds of successful businesses who trust Fast Marketing for their growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="/portfolio" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}