import Link from 'next/link';

export default function Portfolio() {
  const caseStudies = [
    {
      id: 1,
      title: "Gulzar Foods Nimco Distribution",
      client: "Gulzar Foods Nimco",
      category: "Local Distribution",
      description: "Expanded Nimco distribution across 25+ cities in Pakistan, increasing sales by 300% in 6 months.",
      results: ["300% sales increase", "25+ cities covered", "500+ new retailers", "6 months timeline"],
      image: "bg-gradient-to-br from-red-100 to-red-200",
      icon: "🍟"
    },
    {
      id: 2,
      title: "Lassani Foods Digital Campaign",
      client: "Lassani Foods",
      category: "Digital Marketing",
      description: "Comprehensive digital marketing strategy that increased online engagement by 400% and lead generation by 250%.",
      results: ["400% engagement increase", "250% lead generation", "50% cost reduction", "12 months campaign"],
      image: "bg-gradient-to-br from-yellow-100 to-yellow-200",
      icon: "📱"
    },
    {
      id: 3,
      title: "Al Jannat Foods Product Launch",
      client: "Al Jannat Foods",
      category: "Brand Promotion",
      description: "Successful product launch across multiple cities with strategic marketing and distribution planning.",
      results: ["100% launch success", "15 cities covered", "200% target sales", "3 months campaign"],
      image: "bg-gradient-to-br from-blue-100 to-blue-200",
      icon: "🚀"
    },
    {
      id: 4,
      title: "Uptime Foods SEO Optimization",
      client: "Uptime Foods",
      category: "Digital Marketing",
      description: "SEO optimization that improved search rankings and increased organic traffic by 350%.",
      results: ["350% traffic increase", "Top 3 rankings", "200% conversion rate", "8 months project"],
      image: "bg-gradient-to-br from-green-100 to-green-200",
      icon: "🔍"
    },
    {
      id: 5,
      title: "ZKF Foods Market Penetration",
      client: "ZKF Foods",
      category: "Local Distribution",
      description: "Penetrated new markets with strategic distribution and marketing approach, achieving 150% growth.",
      results: ["150% market growth", "30+ new markets", "400+ retail partners", "10 months project"],
      image: "bg-gradient-to-br from-purple-100 to-purple-200",
      icon: "🏪"
    },
    {
      id: 6,
      title: "Hira Foods Brand Building",
      client: "Hira Foods",
      category: "Digital Marketing",
      description: "Built strong social media presence and brand awareness through strategic content and engagement.",
      results: ["500% follower growth", "80% engagement rate", "Brand recognition", "6 months campaign"],
      image: "bg-gradient-to-br from-pink-100 to-pink-200",
      icon: "📸"
    }
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
      <section className="bg-gradient-to-br from-red-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses across Pakistan achieve remarkable growth through our marketing expertise
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real clients across Pakistan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`h-48 ${study.image} flex items-center justify-center`}>
                  <div className="text-6xl">{study.icon}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                    <span className="text-sm text-gray-500">{study.client}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="space-y-2">
                    {study.results.map((result, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {result}
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Testimonials from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <p className="text-gray-600 italic mb-4">
                "Fast Marketing transformed our distribution network. We went from 5 cities to 25+ cities in just 6 months. 
                Their local market expertise is unmatched in Pakistan."
              </p>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.033a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.033a1 1 0 00-1.175 0l-2.8 2.033c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

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
              <p className="text-gray-600 italic mb-4">
                "Their digital marketing strategies are phenomenal. We saw a 400% increase in online engagement 
                and 250% more leads. The ROI has been incredible."
              </p>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.033a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.033a1 1 0 00-1.175 0l-2.8 2.033c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
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
              <p className="text-gray-600 italic mb-4">
                "The team's understanding of local markets is incredible. They helped us launch our new product 
                line successfully across multiple cities. Highly professional and results-driven."
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

      {/* Industries We Serve */}
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
              { name: "E-commerce", icon: "💻" },
              { name: "Healthcare", icon: "🏥" },
              { name: "Technology", icon: "📱" },
              { name: "Fashion", icon: "👗" },
              { name: "Automotive", icon: "🚗" },
              { name: "Real Estate", icon: "🏠" },
              { name: "Education", icon: "📚" },
              { name: "Banking", icon: "🏦" },
              { name: "Manufacturing", icon: "🏭" }
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Let's discuss how we can help your business achieve similar results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Start Your Project
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
