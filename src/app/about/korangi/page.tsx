import Link from 'next/link';
import Image from 'next/image';

export default function KorangiTeam() {
  const teamMembers = [
    {
      name: 'Tahir Khan',
      company: 'Lasani Food',
      role: 'Area Sales Manager (ASM)',
      logo: '/logos/Lasanifoods.webp',
      initial: 'T'
    },
    {
      name: 'Rehan Ahmed',
      company: 'Gulzar Food Nimko',
      role: 'Area Sales Manager (ASM)',
      logo: '/logos/GulzarFoods.jpg',
      initial: 'G'
    },
    {
      name: 'Moin',
      company: 'Gulzar Food Pops',
      role: 'Area Sales Super (ASS)',
      logo: '/logos/GulzarFoods.jpg',
      initial: 'M'
    },
    {
      name: 'Rizwan Ahmed',
      company: 'Food Land',
      role: 'Area Sales Manager (ASM)',
      logo:  '/logos/FoodLand.jpg',
      initial: 'S'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-yellow-50 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Link 
              href="/about" 
              className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 transition-all duration-300 group">
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back to About</span>
            </Link>
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Korangi Town Karachi <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Market Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our dedicated team serving the Korangi Town area in Karachi
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Irfan - Market Manager */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="bg-white p-10 rounded-3xl shadow-2xl text-center hover:shadow-3xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600"></div>
              <div className="w-36 h-36 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-5xl">I</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Irfan</h3>
              <p className="text-red-600 font-semibold text-xl mb-6">Korangi Town Karachi Market Manager</p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              Irfan covers the Korangi Town market, ensuring a strong presence across the Korangi area. His strategic approach and deep market knowledge have helped establish a robust distribution network and strengthen brand presence in one of Karachi&apos;s key industrial and commercial zones.
              </p>
              <div className="mt-10 pt-10 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-orange-50 to-transparent">
                    <p className="text-sm text-gray-500 mb-2 font-medium">Location</p>
                    <p className="text-gray-900 font-bold text-lg">Korangi Town, Karachi</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-red-50 to-transparent">
                    <p className="text-sm text-gray-500 mb-2 font-medium">Coverage</p>
                    <p className="text-gray-900 font-bold text-lg">Market</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-orange-50 to-transparent">
                    <p className="text-sm text-gray-500 mb-2 font-medium">Experience</p>
                    <p className="text-gray-900 font-bold text-lg">8+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="mb-16">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Team Members
              </h2>
              <p className="text-lg text-gray-600">Dedicated professionals serving the region</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-200 group">
                  <div className="flex flex-col items-center text-center">
                    {/* Company Logo or Initial */}
                    <div className="mb-5">
                      {member.logo ? (
                        <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center border-4 border-gray-100 overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src={member.logo}
                            alt={member.company}
                            width={100}
                            height={100}
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-28 h-28 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-3xl">{member.initial}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{member.name}</h3>
                    
                    {/* Company Name */}
                    <p className="text-red-600 font-semibold mb-2 text-sm">{member.company}</p>
                    
                    {/* Role */}
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Region Info */}
          <div className="mt-16 bg-gradient-to-br from-red-100 to-yellow-100 p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">About Korangi Town Operations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-4xl font-bold text-red-600 mb-2">40+</div>
                <div className="text-gray-700 font-medium">Distributors</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-4xl font-bold text-yellow-600 mb-2">120+</div>
                <div className="text-gray-700 font-medium">Retail Outlets</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
                <div className="text-gray-700 font-medium">Market Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block mb-6">
            <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Marketing Services in Korangi Town?
          </h2>
          <p className="text-xl text-white opacity-95 mb-10 leading-relaxed">
            Reach out to our Korangi Town team for comprehensive marketing solutions
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-red-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

