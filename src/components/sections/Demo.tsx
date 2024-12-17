import React from 'react';
import { Play } from 'lucide-react';

export function Demo() {
  return (
    <section id="demo" className="py-24 bg-green-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            See EcoInvest in Action
          </h2>
          <p className="text-green-100 text-lg">
            Watch how easy it is to start your sustainable investment journey
          </p>
        </div>
        
        <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3"
            alt="Platform Demo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-950/60 flex items-center justify-center group-hover:bg-green-950/40 transition-colors">
            <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="h-8 w-8 text-green-950 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}