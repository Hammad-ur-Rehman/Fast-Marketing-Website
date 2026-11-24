import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Faast Marketing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in marketing excellence across Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Faast Marketing was founded in 2017 with a simple yet powerful vision: to help businesses 
                across Pakistan reach their full potential through innovative marketing solutions. 
                What started as a small team with big dreams has grown into one of Pakistan's 
                leading marketing agencies.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've built an extensive network of distributors, retailers, 
                and marketing professionals who share our commitment to excellence. From 
                market distribution to cutting-edge digital marketing, we've helped hundreds 
                of businesses grow and succeed across Pakistan.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we're proud to serve clients across all major cities in Pakistan, 
                from Karachi to Islamabad, Lahore to Peshawar, and everywhere in between. 
                Our success is measured not just by our growth, but by the success of our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 text-center"
                >
                  Work With Us
                </Link>
                <Link 
                  href="/portfolio" 
                  className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-200 text-center"
                >
                  See Our Work
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-yellow-100 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">50+</div>
                  <div className="text-gray-600">Cities Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
                  <div className="text-gray-600">Products Marketed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">8+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To empower businesses across Pakistan with innovative marketing solutions that drive growth, 
                increase visibility, and create lasting connections with their target audience. We believe 
                every business deserves access to world-class marketing expertise.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To become Pakistan's most trusted and innovative marketing partner, known for delivering 
                exceptional results and transforming businesses through strategic marketing excellence. 
                We envision a future where every Pakistani business can compete globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, delivering results that exceed expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Passion</h3>
              <p className="text-gray-600">
                We're passionate about marketing and helping businesses achieve their goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct business with honesty, transparency, and ethical practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and creative approaches to stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The talented professionals behind our success
            </p>
          </div>

          {/* Head Office Team */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto rounded-full"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Head Office Team
              </h3>
              <p className="text-gray-600 text-lg">Our leadership team driving excellence</p>
            </div>
            <div className="flex justify-center">
              <Link href="/about/head-office" className="bg-white p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group max-w-sm w-full border-2 border-transparent hover:border-red-100">
                <div className="w-28 h-28 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-bold text-2xl">HMK</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Haseeb Muzammil Khan</h3>
                <p className="text-red-600 font-semibold mb-3 text-lg">CEO</p>
                <p className="text-gray-600 mb-4">
                  With over 30 years of experience in marketing, Haseeb leads our team with vision and passion.
                </p>
                <p className="text-red-600 text-sm mt-4 font-medium group-hover:underline flex items-center justify-center gap-2">
                  View Team Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                </p>
              </Link>
            </div>
          </div>

          {/* Board of Directors */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto rounded-full"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Board of Directors
              </h3>
              <p className="text-gray-600 text-lg">Regional leaders managing markets across Pakistan</p>
            </div>
          </div>

          {/* Regional Market Managers */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            <Link href="/about/orangi-town" className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-purple-100">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-white font-bold text-2xl">A</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Syed Adil Ali</h3>
                <p className="text-red-600 font-semibold mb-3">Orangi Town Karachi Market Manager</p>
                <p className="text-gray-600 mb-4">
                  Adil covers Orangi town market, ensuring strong presence in the Orangi town area.
                </p>
                <p className="text-red-600 text-sm mt-4 font-medium group-hover:underline flex items-center justify-center gap-2">
                  View Team Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                </p>
              </Link>

   
              <Link href="/about/korangi" className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-orange-100">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-white font-bold text-2xl">I</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Irfan</h3>
                <p className="text-red-600 font-semibold mb-3">Korangi Market Manager</p>
                <p className="text-gray-600 mb-4">
                  Irfan manages the Korangi market, ensuring comprehensive regional coverage and strong market presence.
                </p>
                <p className="text-red-600 text-sm mt-4 font-medium group-hover:underline flex items-center justify-center gap-2">
                  View Team Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                </p>
              </Link>

              <Link href="/about/old-area" className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-cyan-100">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-white font-bold text-2xl">T</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tahir Malik</h3>
                <p className="text-red-600 font-semibold mb-3">Old Area Market Manager</p>
                <p className="text-gray-600 mb-4">
                  Tahir covers Old Area market with extensive knowledge and understanding of the region.
                </p>
                <p className="text-red-600 text-sm mt-4 font-medium group-hover:underline flex items-center justify-center gap-2">
                  View Team Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                </p>
              </Link>

            <Link href="/about/balochistan" className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-yellow-100">
                  <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <span className="text-white font-bold text-2xl">M</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mohabbat Khan</h3>
                  <p className="text-red-600 font-semibold mb-3">Balochistan Market Manager</p>
                  <p className="text-gray-600 mb-4">
                    Mohabbat Khan covers Balochistan market with extensive knowledge of the region.
                  </p>
                  <p className="text-red-600 text-sm mt-4 font-medium group-hover:underline flex items-center justify-center gap-2">
                    View Team Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </p>
                </Link>
              
              
              <Link href="/about/hyderabad" className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-blue-100">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-white font-bold text-2xl">I</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Imran Sheikh</h3>
                <p className="text-red-600 font-semibold mb-3">Sindh Market Manager</p>
                <p className="text-gray-600 mb-4">
                  Imran manages the Hyderabad market, ensuring comprehensive regional coverage.
                </p>
                <p className="text-red-600 text-sm mt-4 font-medium group-hover:underline flex items-center justify-center gap-2">
                  View Team Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                </p>
              </Link>

              <Link href="/about/mirpur-khas" className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-green-100">
                <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-white font-bold text-2xl">A</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">M Aslam Malak</h3>
                <p className="text-red-600 font-semibold mb-3">Mirpur Khas Market Manager</p>
                <p className="text-gray-600 mb-4">
                  Aslam covers Mirpur Khas market with deep understanding of the area.
                </p>
                <p className="text-red-600 text-sm mt-4 font-medium group-hover:underline flex items-center justify-center gap-2">
                  View Team Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                </p>
              </Link>

              <Link href="/about/central" className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-emerald-100">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-white font-bold text-2xl">S</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Late Faisal Sheikh</h3>
                <p className="text-red-600 font-semibold mb-3">Central Market Manager</p>
                <p className="text-gray-600 mb-4">
                  Safdar covers Central market, ensuring strong presence in the central area.
                </p>
                <p className="text-red-600 text-sm mt-4 font-medium group-hover:underline flex items-center justify-center gap-2">
                  View Team Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                </p>
              </Link>

              <Link href="/about/punjab-rsm" className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-red-100">
                <div className="w-24 h-24 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-white font-bold text-2xl">P</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Punjab RSM</h3>
                <p className="text-red-600 font-semibold mb-3">Punjab Regional Sales Manager</p>
                <p className="text-gray-600 mb-4">
                  Leading the Punjab region with strategic vision and extensive market knowledge across multiple cities.
                </p>
                <p className="text-red-600 text-sm mt-4 font-medium group-hover:underline flex items-center justify-center gap-2">
                  View Team Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                </p>
              </Link>

              <Link href="/about/kpk-rsm" className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-green-100">
                <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-white font-bold text-2xl">K</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">KPK RSM</h3>
                <p className="text-red-600 font-semibold mb-3">KPK Regional Sales Manager</p>
                <p className="text-gray-600 mb-4">
                  Leading the Khyber Pakhtunkhwa region with strategic vision and comprehensive market coverage.
                </p>
                <p className="text-red-600 text-sm mt-4 font-medium group-hover:underline flex items-center justify-center gap-2">
                  View Team Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Let's discuss how we can help your business achieve its marketing goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Get In Touch
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
