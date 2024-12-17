import React from "react";
import { TreePine, Sprout, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  const handleLaunchClick = () => {
    navigate("/app"); // Navigate to /app
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-950 to-green-900 pt-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center space-y-8">
          <div className="flex justify-center space-x-4 animate-float">
            <TreePine className="h-16 w-16 text-green-400" />
            <Sprout className="h-16 w-16 text-green-300" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Invest Green, <span className="text-green-400">Earn Clean</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-green-100">
            Join the future of sustainable investing on Hedera. Fund impactful green projects
            and trade carbon credits in our revolutionary marketplace.
          </p>

          <div className="flex justify-center space-x-6">
            <button
              className="group flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
              onClick={handleLaunchClick}
            >
              <span>Launch DApp</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center space-x-2 border-2 border-green-400 text-green-400 hover:bg-green-400/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
