import React from 'react';
import { Leaf, Wallet } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export function Header() {

  const navigate = useNavigate();

  const handleLaunchClick = () => {
    navigate("/app"); // Navigate to /app
  };
  return (
    <header className="fixed w-full bg-opacity-90 bg-green-950 backdrop-blur-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-400" />
            <span className="text-2xl font-bold text-white">EcoInvest</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-green-100 hover:text-green-300">Features</a>
            <a href="#how-it-works" className="text-green-100 hover:text-green-300">How It Works</a>
            <a href="marketplace" className="text-green-100 hover:text-green-300">Marketplace</a>
            <button   onClick={handleLaunchClick} className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
              <Wallet className="h-5 w-5" />
              <span>Launch DApp</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}