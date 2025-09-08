import React from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Mission',
      description: 'To provide innovative tracking solutions that empower businesses with real-time visibility and control over their operations.',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Vision',
      description: 'To become the global leader in tracking technology, setting new standards for accuracy, reliability, and user experience.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Values',
      description: 'Innovation, integrity, excellence, and customer-centricity guide everything we do in delivering world-class solutions.',
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                NG Tracking
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We've been at the forefront of tracking technology innovation, 
              helping businesses nationwide achieve visibility and control over their operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  NG Tracking was founded with a simple yet powerful vision: to revolutionize how businesses and individuals
                  track and manage their assets.
                </p>
                <p>
                  Today, we serve over 500 clients across 9 provinces, providing them with the 
                  real-time insights they need to make informed decisions and optimize their operations.
                </p>
                <p>
                  Our commitment to innovation and excellence has earned us recognition as an industry 
                  pioneer.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/20 to-gray-900/50 p-8 rounded-2xl border border-yellow-400/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">9</div>
                  <div className="text-gray-300">Provinces</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-gray-300">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-yellow-400">Core Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide our decisions and shape our culture as we build the future of tracking technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-black/50 p-8 rounded-xl border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 text-center"
              >
                <div className="text-yellow-400 mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;