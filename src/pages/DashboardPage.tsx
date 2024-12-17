import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { LayoutDashboard, Leaf, BarChart3, Settings } from 'lucide-react';


const DashboardHome = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-white mb-6">Dashboard Overview</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-green-900 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-white mb-2">Total Investments</h3>
        <p className="text-3xl font-bold text-green-400">$25,420</p>
      </div>
      <div className="bg-green-900 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-white mb-2">Carbon Credits</h3>
        <p className="text-3xl font-bold text-green-400">156 tCO2e</p>
      </div>
      <div className="bg-green-900 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-white mb-2">Active Projects</h3>
        <p className="text-3xl font-bold text-green-400">8</p>
      </div>
    </div>
  </div>
);

const Marketplace = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-white mb-6">Carbon Credit Marketplace</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Sample marketplace items */}
      <div className="bg-green-900 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-white mb-2">Solar Farm Project</h3>
        <p className="text-green-100 mb-4">Renewable energy credits from solar installations</p>
        <div className="flex justify-between items-center">
          <span className="text-green-400 font-bold">10 tCO2e</span>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
            Trade
          </button>
        </div>
      </div>
      {/* Add more marketplace items */}
    </div>
  </div>
);

export function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-green-950">
      <aside className="w-64 bg-green-900 p-6">
        <nav className="space-y-4">
          <Link to="/app" className="flex items-center space-x-2 text-white hover:text-green-400">
            <LayoutDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link to="/marketplace" className="flex items-center space-x-2 text-white hover:text-green-400">
            <Leaf className="h-5 w-5" />
            <span>Marketplace</span>
          </Link>
          <Link to="/app/analytics" className="flex items-center space-x-2 text-white hover:text-green-400">
            <BarChart3 className="h-5 w-5" />
            <span>Analytics</span>
          </Link>
          <Link to="/settings" className="flex items-center space-x-2 text-white hover:text-green-400">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>
      
      <main className="flex-1">
        <Routes>
          <Route index element={<DashboardHome />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="analytics" element={<div className="p-6"><h1>Analytics</h1></div>} />
          <Route path="settings" element={<div className="p-6"><h1>Settings</h1></div>} />
        </Routes>
      </main>
    </div>
  );
}