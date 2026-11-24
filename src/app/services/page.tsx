'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Services() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState('Karachi');

  const cities = [
    { name: 'Karachi', x: 308, y: 581, description: 'Orangi Town, Korangi, Saddar', region: 'Sindh' },
    { name: 'Hyderabad', x: 308, y: 536, description: 'Main market distribution hub', region: 'Sindh' },
    { name: 'Mirpur Khas', x: 393, y: 453, description: 'Retail and wholesale supply', region: 'Sindh' },
    { name: 'Sukkur', x: 332, y: 462, description: 'North Sindh delivery center', region: 'Sindh' },
    { name: 'Larkana', x: 296, y: 435, description: 'Regional distributor network', region: 'Sindh' },
    { name: 'Quetta', x: 256, y: 366, description: 'Balochistan core operations', region: 'Balochistan' },
    { name: 'Gwadar', x: 82, y: 502, description: 'Coastal market access', region: 'Balochistan' },
    { name: 'Khuzdar', x: 170, y: 390, description: 'Southwest route support', region: 'Balochistan' },
    { name: 'Lahore', x: 516, y: 248, description: 'Central Punjab growth market', region: 'Punjab' },
    { name: 'Multan', x: 430, y: 301, description: 'South Punjab service zone', region: 'Punjab' },
    { name: 'Faisalabad', x: 491, y: 236, description: 'Industrial retail channel', region: 'Punjab' },
    { name: 'Sahiwal', x: 460, y: 271, description: 'Local trade activation', region: 'Punjab' },
    { name: 'Bahawalpur', x: 455, y: 336, description: 'Coverage for nearby towns', region: 'Punjab' },
    { name: 'Rawalpindi', x: 472, y: 181, description: 'North Punjab logistics point', region: 'Punjab' },
    { name: 'Islamabad', x: 479, y: 169, description: 'Federal territory operations', region: 'ICT' },
    { name: 'Peshawar', x: 406, y: 170, description: 'KPK metro retail network', region: 'KPK' },
    { name: 'Mardan', x: 422, y: 177, description: 'Fast delivery for KPK belts', region: 'KPK' },
    { name: 'DI Khan', x: 342, y: 251, description: 'Southern KPK route link', region: 'KPK' },
  ];
  const activeCity = cities.find((city) => city.name === (hoveredCity ?? selectedCity)) ?? cities[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive local distribution solutions designed to help your business reach every corner of Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* Pakistan Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Presence</span> Across Pakistan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Faast Marketing has established a strong presence in major cities and regions across Pakistan, ensuring comprehensive market coverage
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 via-white to-red-50/30 rounded-3xl shadow-2xl p-6 md:p-10 border-2 border-gray-100">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2 rounded-2xl border border-gray-200 bg-white p-4 md:p-6 shadow-inner">
            <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-br from-slate-50 to-red-50/40" style={{ paddingBottom: '66%' }}>
            <svg viewBox="0 0 825 600" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
  <defs>
    <radialGradient id="mapGlow" cx="50%" cy="40%" r="70%">
      <stop offset="0%" stopColor="#fee2e2" />
      <stop offset="100%" stopColor="#ffffff" />
    </radialGradient>

    <filter id="markerGlow">
      <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#ef4444" floodOpacity="0.6" />
    </filter>
  </defs>

  {/* Background */}
  <rect x="0" y="0" width="825" height="600" fill="url(#mapGlow)" />

  {/* Real Pakistan map shape */}
  <image
    href="/pakistan-map.svg"
    x="0"
    y="0"
    width="825"
    height="600"
    preserveAspectRatio="xMidYMid meet"
  />

  {/* City Markers */}
  {cities.map((city) => {
    const isActive = hoveredCity === city.name || selectedCity === city.name;
    const size = isActive ? 13 : 10;
    const labelOffset = city.name === 'Karachi' ? size + 6 : size + 12;

    return (
      <g
        key={city.name}
        className="cursor-pointer transition-all duration-300"
        onMouseEnter={() => setHoveredCity(city.name)}
        onMouseLeave={() => setHoveredCity(null)}
        onClick={() => setSelectedCity(city.name)}
      >
        {/* Glow ring */}
        <circle
          cx={city.x}
          cy={city.y}
          r={size + 6}
          fill="#ef4444"
          opacity={isActive ? 0.25 : 0.08}
          className="transition-all duration-300"
        />

        {/* Outer ring */}
        <circle
          cx={city.x}
          cy={city.y}
          r={size + 2}
          fill="#fff"
          filter="url(#markerGlow)"
        />

        {/* Main dot */}
        <circle
          cx={city.x}
          cy={city.y}
          r={size}
          fill="#ef4444"
          className="transition-all duration-300"
        />

        {/* City Name */}
        <text
          x={city.x}
          y={city.y - labelOffset}
          textAnchor="middle"
          className="font-semibold fill-gray-800"
          style={{ fontSize: isActive ? '15px' : '13px' }}
        >
          {city.name}
        </text>

      </g>
    );
  })}
</svg>
            </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-red-600 mb-2">Selected Coverage City</p>
                <h3 className="text-2xl font-bold text-gray-900">{activeCity.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{activeCity.region}</p>
                <p className="text-gray-700 mt-4 leading-relaxed">{activeCity.description}</p>
                <div className="mt-5 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>
                    <span>Active distributor nodes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
                    <span>Fast local delivery routes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
                    <span>Retail engagement teams</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {cities.map((city) => (
                <button
                  key={city.name}
                  type="button"
                  onMouseEnter={() => setHoveredCity(city.name)}
                  onMouseLeave={() => setHoveredCity(null)}
                  onClick={() => setSelectedCity(city.name)}
                  className={`px-3 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                    selectedCity === city.name
                      ? 'bg-red-600 text-white border-red-600 shadow-md'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-red-300 hover:text-red-600'
                  }`}
                >
                  {city.name}
                </button>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-transparent rounded-xl">
                <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
                <div className="text-gray-700 font-medium">Cities Covered</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-transparent rounded-xl">
                <div className="text-4xl font-bold text-yellow-600 mb-2">1000+</div>
                <div className="text-gray-700 font-medium">Active Distributors</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-transparent rounded-xl">
                <div className="text-4xl font-bold text-red-600 mb-2">5000+</div>
                <div className="text-gray-700 font-medium">Retail Outlets</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Local Market Distribution */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Pakistan Wide Market Distribution</h2>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Our extensive distribution network covers all major cities and towns across Pakistan. 
                We ensure your products reach every local market, shop, and retail outlet.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Nationwide coverage across all provinces
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Strategic retailer partnerships
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Inventory management and tracking
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Market penetration strategies
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time sales reporting
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 inline-block"
              >
                Get Distribution Quote
              </Link>
            </div>

            {/* Brand Promotion */}
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Brand Promotion</h2>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Build a strong brand presence in local markets with our comprehensive promotion strategies. 
                We help create memorable campaigns that resonate with local communities across Pakistan.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Local market brand awareness
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Product launch campaigns
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Local event marketing
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Retailer relationship building
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-yellow-600 transition-all duration-200 inline-block"
              >
                Get Promotion Quote
              </Link>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brand Promotion */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brand Promotion</h3>
              <p className="text-gray-600 mb-4">
                Build a strong brand presence in local markets with our comprehensive promotion strategies and memorable campaigns.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Local brand awareness campaigns</li>
                <li>• Product launch events</li>
                <li>• Local event marketing</li>
                <li>• Retailer relationship building</li>
              </ul>
            </div>

            {/* Market Research */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Market Research</h3>
              <p className="text-gray-600 mb-4">
                Get valuable insights about local markets across Pakistan with our comprehensive research services.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Local consumer behavior analysis</li>
                <li>• Regional market trend analysis</li>
                <li>• Local competitor research</li>
                <li>• Retailer feedback surveys</li>
              </ul>
            </div>

            {/* Product Launch */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Product Launch</h3>
              <p className="text-gray-600 mb-4">
                Launch your products successfully with our strategic planning and execution services.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Launch strategy development</li>
                <li>• Media outreach</li>
                <li>• Event coordination</li>
                <li>• Performance tracking</li>
              </ul>
            </div>
          </div>
        </div>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              How we work with you to achieve your marketing goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">
                We understand your business goals and target audience through detailed consultation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">
                We develop a customized marketing strategy tailored to your specific needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600">
                Our team implements the strategy with precision and attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600">
                We continuously monitor and optimize campaigns for maximum results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Let's discuss how we can help your business grow across Pakistan
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
