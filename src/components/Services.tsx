import React from 'react';
import { MapPin, Truck, Package, BarChart3, Shield, Clock, Globe, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <MapPin className="h-12 w-12" />,
      title: 'Real-Time GPS Tracking',
      description: 'Monitor your vehicles, and assets with precision GPS tracking that provides accurate location data, speed, and route information in real-time.',
      features: ['Live location updates', 'Route optimization', 'Geofencing alerts', 'Historical tracking data'],
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: 'Fleet Management',
      description: 'Comprehensive fleet management solutions that help optimize operations, reduce costs, and improve efficiency across your entire vehicle fleet.',
      features: ['Vehicle monitoring', 'Fuel management', 'Maintenance scheduling', 'Driver behavior analysis'],
    },
    {
      icon: <Package className="h-12 w-12" />,
      title: 'Asset Tracking',
      description: 'Keep track of valuable assets, equipment, and inventory with our advanced tracking solutions designed for businesses of all sizes.',
      features: ['Asset location monitoring', 'Theft protection alerts', 'Usage tracking', 'Maintenance reminders'],
    },
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: 'Analytics & Reporting',
      description: 'Gain valuable insights into your operations with comprehensive analytics and customizable reporting tools that drive informed decision-making.',
      features: ['Custom dashboards', 'Performance metrics', 'Automated reports', 'Data visualization'],
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'Security Solutions',
      description: 'Advanced security features including anti-theft protection, emergency alerts, and secure data transmission to keep your assets safe.',
      features: ['Panic button alerts', 'Unauthorized use detection', 'Secure data encryption', '24/7 monitoring'],
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: 'Mobile Applications',
      description: 'Access your tracking data anywhere, anytime with our user-friendly mobile applications available for iOS and Android devices.',
      features: ['Real-time notifications', 'Offline access', 'Multi-user support', 'Intuitive interface'],
    },
  ];

  const industries = [
    'Logistics & Transportation',
    'Construction',
    'Healthcare',
    'Manufacturing',
    'Retail',
    'Government',
    'Agriculture',
    'Emergency Services',
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive tracking solutions tailored to meet the unique needs of your business. 
              From real-time GPS tracking to advanced analytics, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black/50 p-8 rounded-xl border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 group"
              >
                <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We <span className="text-yellow-400">Serve</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our tracking solutions are trusted across diverse industries, from small businesses to large enterprises.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-900/20 to-gray-900/50 p-6 rounded-xl border border-yellow-400/20 text-center hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="text-white font-semibold">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our <span className="text-yellow-400">Services</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                    <p className="text-gray-400">Round-the-clock technical support and monitoring to ensure your operations never stop.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Nationwide Coverage</h3>
                    <p className="text-gray-400">Nationwide tracking capabilities with local support teams in all provinces.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/20 to-gray-900/50 p-8 rounded-2xl border border-yellow-400/20">
              <h3 className="text-2xl font-bold text-white mb-6">Service Guarantee</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Uptime Guarantee</span>
                  <span className="text-yellow-400 font-bold">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Response Time</span>
                  <span className="text-yellow-400 font-bold">{"< 2 hours"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Data Accuracy</span>
                  <span className="text-yellow-400 font-bold">99.95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Customer Satisfaction</span>
                  <span className="text-yellow-400 font-bold">98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;