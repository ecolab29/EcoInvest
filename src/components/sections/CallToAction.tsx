import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-b from-green-900 to-green-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-green-800 rounded-3xl p-12 md:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-green-100 text-lg mb-8">
              Join thousands of investors who are already making profits while 
              supporting environmental sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                <span>Start Investing</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center space-x-2 border-2 border-green-400 text-green-400 hover:bg-green-400/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                <span>View Projects</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}