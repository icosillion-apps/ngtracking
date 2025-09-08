import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, MapPin, Users, BarChart3, Globe } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Real-Time Tracking',
      description: 'Monitor your assets and shipments in real-time with precise location data and status updates.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure & Reliable',
      description: 'Advanced security protocols ensure your tracking data is protected and accessible only to authorized users.',
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Analytics & Reports',
      description: 'Comprehensive reporting and analytics to help you optimize your logistics and operations.',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: '24/7 Monitoring',
      description: 'Round-the-clock monitoring and support to ensure continuous tracking and immediate alerts.',
    },
  ];

  const stats = [
    { number: '500', label: 'Tracked Vehicle' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
   
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="text-white">Advanced </span>
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Tracking
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience next-generation tracking technology that provides real-time visibility, 
              enhanced security, and comprehensive analytics for your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 flex items-center justify-center group"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-yellow-400">NG Tracking</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cutting-edge tracking solutions are designed to meet the demanding needs of modern businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 group"
              >
                <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-900/20 to-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Globe className="h-16 w-16 text-yellow-400 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Tracking Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join other businesses that trust NG Tracking for their critical operations.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 inline-flex items-center group"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;