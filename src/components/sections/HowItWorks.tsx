import React from 'react';
import { Wallet, LineChart, Award } from 'lucide-react';

const steps = [
  {
    icon: <Wallet className="h-8 w-8" />,
    title: "Connect & Invest",
    description: "Connect your wallet and browse verified green projects"
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Track Progress",
    description: "Monitor project development and environmental impact"
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Earn Rewards",
    description: "Receive carbon credits and sustainable returns"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-green-100 text-lg">
            Start your sustainable investment journey in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-green-700 transform -translate-y-1/2" />
              )}
              <div className="relative bg-green-800 p-8 rounded-xl text-center z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-700 text-green-400 mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-green-100">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}