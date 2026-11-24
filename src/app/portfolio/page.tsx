import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
  const caseStudies = [
    {
      id: 1,
      title: "Gulzar Foods Nimco Distribution",
      client: "Gulzar Foods Nimco",
      category: "Nationwide Distribution",
      description: "Expanded Gulzar Foods’ Nimco product distribution across 25+ cities in Pakistan, increasing overall sales by 300% within six months through strategic distributor partnerships.",
      results: ["300% sales growth", "25+ cities covered", "500+ new retailers", "6 months timeline"],
      image: "bg-gradient-to-br from-red-100 to-red-200",
      logo: "/logos/GulzarFoods.jpg"
    },
    {
      id: 2,
      title: "Lasani Foods Market Expansion",
      client: "Lasani Foods",
      category: "Regional Distribution",
      description: "Developed and executed a regional expansion plan for Lasani Foods, enhancing distribution coverage by 400% and achieving 250% sales growth through new dealer networks.",
      results: ["400% coverage increase", "250% sales growth", "50% cost optimization", "12 months campaign"],
      image: "bg-gradient-to-br from-yellow-100 to-yellow-200",
      logo: "/logos/Lasanifoods.webp"
    },
    {
      id: 3,
      title: "Al Jannat Foods Product Launch",
      client: "Al Jannat Foods",
      category: "New Product Distribution",
      description: "Managed the successful distribution launch of Al Jannat Foods products across multiple cities, achieving 200% of target sales within the first three months.",
      results: ["200% target achievement", "15+ cities covered", "100% launch success", "3 months campaign"],
      image: "bg-gradient-to-br from-blue-100 to-blue-200",
      logo: "/logos/JannatFoods.jpg"
    },
    {
      id: 4,
      title: "Uptime Foods Regional Expansion",
      client: "Uptime Foods",
      category: "Territory Development",
      description: "Expanded Uptime Foods’ market presence across new territories, strengthening distributor relationships and increasing coverage by 350% with 200% sales growth.",
      results: ["350% coverage increase", "Top 3 regional ranking", "200% sales growth", "8 months project"],
      image: "bg-gradient-to-br from-green-100 to-green-200",
      logo: "/logos/Uptimesnacks.jpg"
    },
    {
      id: 5,
      title: "ZKF Foods Market Penetration",
      client: "ZKF Foods",
      category: "Distribution Network Growth",
      description: "Strengthened ZKF Foods’ footprint by penetrating 30+ new markets across Pakistan, establishing over 400 retail partnerships and driving 150% growth in sales volume.",
      results: ["150% sales growth", "30+ new markets", "400+ retail partners", "10 months campaign"],
      image: "bg-gradient-to-br from-purple-100 to-purple-200",
      logo: "/logos/ZKF Crunch.png"
    },
    {
      id: 6,
      title: "Food Land Nationwide Distribution",
      client: "Food Land",
      category: "Nationwide Distribution",
      description: "Expanded Food Land’s product distribution network nationwide, ensuring consistent product availability and boosting total sales by 500% through coordinated distributor efforts.",
      results: ["500% sales growth", "Nationwide availability", "Strong distributor network", "6 months campaign"],
      image: "bg-gradient-to-br from-pink-100 to-pink-200",
      logo: "/logos/FoodLand.jpg"
    }
  ];



  const clientLogos = [
    { name: "Gulzar Foods", src: "/logos/GulzarFoods.jpg", width: 200, height: 120, hoverBorder: "hover:border-red-100" },
    { name: "Jannat Foods", src: "/logos/JannatFoods.jpg", width: 200, height: 120, hoverBorder: "hover:border-blue-100" },
    { name: "Lasani Foods", src: "/logos/Lasanifoods.webp", width: 200, height: 120, hoverBorder: "hover:border-yellow-100" },
    { name: "KFP Khan", src: "/logos/KFOKhan.jpg", width: 200, height: 120, hoverBorder: "hover:border-red-100" },
    { name: "Uptime Snacks", src: "/logos/Uptimesnacks.jpg", width: 200, height: 120, hoverBorder: "hover:border-green-100" },
    { name: "ZKF Crunch", src: "/logos/ZKF Crunch.png", width: 100, height: 120, hoverBorder: "hover:border-purple-100" },
    { name: "Food Land", src: "/logos/FoodLand.jpg", width: 200, height: 120, hoverBorder: "hover:border-pink-100" },
    { name: "HM Food", src: "/logos/HM Food.jpeg", width: 200, height: 120, hoverBorder: "hover:border-gray-200" },
    { name: "Hira Foods", src: "/logos/HiraFoods.jpeg", width: 200, height: 120, hoverBorder: "hover:border-red-100" },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "300%", label: "Average Growth" },
    { number: "50+", label: "Cities Covered" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-yellow-50 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Proven success stories from businesses across Pakistan. Ready to expand globally with world-class marketing solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-white px-6 py-3 rounded-full shadow-lg border-2 border-red-100">
                <span className="text-sm font-semibold text-gray-700">🇵🇰 Pakistan Market Leader</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg border-2 border-yellow-100">
                <span className="text-sm font-semibold text-gray-700">🌍 Global Expansion Ready</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg border-2 border-red-100">
                <span className="text-sm font-semibold text-gray-700">📈 300% Average Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">{stat.number}</div>
                <div className="text-lg text-white opacity-95 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-12 shadow-2xl border-2 border-blue-100">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Expanding <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Globally</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With proven success in Pakistan, we&apos;re ready to help international businesses enter new markets and scale globally
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">International Ready</h3>
                <p className="text-gray-600">
                  Proven methodologies that work across borders. Ready to expand to Middle East, South Asia, and beyond.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-200">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Solutions</h3>
                <p className="text-gray-600">
                  Our distribution and marketing strategies are designed to scale from local to global markets seamlessly.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-indigo-200">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cross-Cultural Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of diverse markets. We adapt strategies to local cultures while maintaining global standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Clients</span>
            </h2>
            <p className="text-xl text-gray-600">
              Leading brands trust us with their marketing and distribution across Pakistan
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="w-[calc(50%_-_0.75rem)] md:w-[calc(33.333%_-_1rem)] lg:w-[calc(25%_-_1.125rem)] flex justify-center"
              >
                <div className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-[200px] h-40 flex items-center justify-center border-2 border-transparent ${logo.hoverBorder} group`}>
                  <Image
                    src={logo.src}
                    alt={`${logo.name} Logo`}
                    width={logo.width}
                    height={logo.height}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Stories</span>
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real clients. Proven methodologies ready for global expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-red-100 group">
                <div className="h-52 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6 border-b border-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-yellow-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="rounded-lg p-4 w-full h-full flex items-center justify-center relative z-10">
                    <Image
                      src={study.logo}
                      alt={`${study.client} Logo`}
                      width={160}
                      height={100}
                      className="w-32 h-auto object-contain max-h-32 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-white bg-gradient-to-r from-red-600 to-yellow-500 px-4 py-1.5 rounded-full">
                      {study.category}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">{study.client}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{study.title}</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">{study.description}</p>
                  <div className="space-y-2.5">
                    {study.results.map((result, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by leading brands. Ready to serve international markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-red-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src="/logos/GulzarFoods.jpg"
                    alt="Gulzar Foods Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Gulzar Foods Nimco</h4>
                  <p className="text-gray-600 text-sm">Nimco & Snacks Company</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                &quot;Fast Marketing transformed our distribution network. We went from 5 cities to 25+ cities in just 6 months. 
                Their local market expertise is unmatched in Pakistan.&quot;
              </p>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.033a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.033a1 1 0 00-1.175 0l-2.8 2.033c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-yellow-100">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center shadow-md">
                  <Image
                    src="/logos/Lasanifoods.webp"
                    alt="Lasani Foods Logo"
                    width={54}
                    height={60}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 text-lg">Lasani Foods</h4>
                  <p className="text-gray-600 text-sm">Food Products Company</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed text-base">
                &quot;Their digital marketing strategies are phenomenal. We saw a 400% increase in online engagement 
                and 250% more leads. The ROI has been incredible.&quot;
              </p>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.033a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.033a1 1 0 00-1.175 0l-2.8 2.033c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src="/logos/JannatFoods.jpg"
                    alt="Jannat Foods Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Al Jannat Foods</h4>
                  <p className="text-gray-600 text-sm">Food Products Company</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                &quot;The team&apos;s understanding of local markets is incredible. They helped us launch our new product 
                line successfully across multiple cities. Highly professional and results-driven.&quot;
              </p>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.033a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.033a1 1 0 00-1.175 0l-2.8 2.033c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              We have experience across various industries in Pakistan
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "FMCG", icon: "🛒" },
              { name: "Food & Beverage", icon: "🍔" },
              { name: "Retail", icon: "🏪" },
              { name: "Technology", icon: "📱" },
              
            ].map((industry, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">{industry.icon}</span>
                </div>
                <p className="text-sm font-medium text-gray-700">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block mb-6">
            <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl md:text-2xl text-white opacity-95 mb-10 leading-relaxed">
            Whether you&apos;re in Pakistan or planning international expansion, let&apos;s discuss how we can help your business achieve remarkable growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-red-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform"
            >
              Start Your Project
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-red-600 transition-all duration-300 shadow-xl"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
