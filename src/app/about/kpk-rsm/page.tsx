import Link from 'next/link';

export default function KPKRSMTeam() {
  const rsmMembers = [
    {
      name: 'Nadeem',
      location: 'DI Khan',
      role: 'Regional Sales Manager (RSM)',
      initial: 'N'
    },
    {
      name: 'Asif',
      location: 'DI Khan',
      role: 'Regional Sales Manager (RSM)',
      initial: 'A'
    },
    {
      name: 'Fawadullah',
      location: 'Malakand',
      role: 'Regional Sales Manager (RSM)',
      initial: 'F'
    },
    {
      name: 'M Shehzad',
      location: 'KPK',
      role: 'Regional Sales Manager (RSM)',
      initial: 'S'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link 
              href="/about" 
              className="inline-flex items-center text-red-600 hover:text-red-700 mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to About
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              KPK <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">RSM Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated Regional Sales Managers serving Khyber Pakhtunkhwa region
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border-2 border-green-100">
              <div className="w-32 h-32 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-4xl">K</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">KPK Regional Sales Manager</h3>
              <p className="text-red-600 font-semibold text-lg mb-4">KPK Regional Sales Manager</p>
              <p className="text-gray-600 mb-6 text-lg">
                Leading the Khyber Pakhtunkhwa region with strategic vision and extensive market knowledge. Our team of Regional Sales Managers ensures comprehensive coverage across all major cities in KPK.
              </p>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Region</p>
                    <p className="text-gray-700 font-semibold">KPK</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Coverage</p>
                    <p className="text-gray-700 font-semibold">Multiple Cities</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Team Size</p>
                    <p className="text-gray-700 font-semibold">4 RSM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RSM Members */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Regional Sales Managers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rsmMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">{member.initial}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-red-600 font-semibold mb-2">{member.location}</p>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Region Info */}
          <div className="mt-16 bg-gradient-to-br from-red-100 to-yellow-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">About KPK Operations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">4</div>
                <div className="text-gray-700">Regional Sales Managers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">8+</div>
                <div className="text-gray-700">Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">300+</div>
                <div className="text-gray-700">Active Distributors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Interested in Our KPK Services?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our KPK team to learn more about our services in the region
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

