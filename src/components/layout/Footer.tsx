import React from 'react';
import { Leaf, Twitter, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-green-950 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold text-white">EcoInvest</span>
            </div>
            <p className="text-green-100">
              Revolutionizing sustainable investments through blockchain technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-green-100 hover:text-green-300">Features</a></li>
              <li><a href="#marketplace" className="text-green-100 hover:text-green-300">Marketplace</a></li>
              <li><a href="#how-it-works" className="text-green-100 hover:text-green-300">How It Works</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-green-300">Documentation</a></li>
              <li><a href="#" className="text-green-100 hover:text-green-300">API Reference</a></li>
              <li><a href="#" className="text-green-100 hover:text-green-300">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-green-400 hover:text-green-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-400 hover:text-green-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-400 hover:text-green-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-800 pt-8">
          <p className="text-center text-green-100">
            © {new Date().getFullYear()} EcoInvest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}