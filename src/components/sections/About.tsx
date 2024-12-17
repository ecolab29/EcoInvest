import React from 'react';
import { Shield, Globe, TreePine } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-green-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Sustainable Investing for a Better Future
            </h2>
            <p className="text-green-100 text-lg mb-8">
              EcoInvest combines blockchain technology with environmental sustainability, 
              creating a transparent and efficient marketplace for green investments.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Secure & Transparent</h3>
                  <p className="text-green-100">Built on Hedera's secure and sustainable network</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Globe className="h-6 w-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Global Impact</h3>
                  <p className="text-green-100">Connect with eco-projects worldwide</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <TreePine className="h-6 w-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Verified Projects</h3>
                  <p className="text-green-100">All projects undergo rigorous verification</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3"
              alt="Sustainable Energy"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-green-400/20 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}