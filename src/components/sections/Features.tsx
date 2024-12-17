import React from 'react';
import { Leaf, Coins, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Carbon Credit Marketplace",
    description: "Trade verified carbon credits using Hedera's secure token service. Track and verify environmental impact in real-time."
  },
  {
    icon: <Coins className="h-8 w-8" />,
    title: "Green Project Funding",
    description: "Invest directly in sustainable projects worldwide. Support renewable energy, reforestation, and clean technology initiatives."
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Impact Tracking",
    description: "Monitor your environmental impact with detailed analytics. See how your investments contribute to a sustainable future."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-green-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Revolutionizing Green Investment
          </h2>
          <p className="text-green-100 text-lg">
            Empowering sustainable growth through blockchain technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-green-900 p-8 rounded-xl hover:bg-green-800 transition-colors">
              <div className="text-green-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-green-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}