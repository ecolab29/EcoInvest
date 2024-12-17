import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { CreditCard } from '../components/marketplace/CreditCard';
import { CarbonCredit } from '../types';

const mockCredits: CarbonCredit[] = [
  {
    id: '1',
    type: 'Solar Energy Credits',
    vintage: 2024,
    price: 25.50,
    quantity: 1000,
    verified: true,
    origin: 'Solar Farm, Arizona',
    verifier: 'Gold Standard'
  },
  {
    id: '2',
    type: 'Wind Energy Credits',
    vintage: 2024,
    price: 22.75,
    quantity: 750,
    verified: true,
    origin: 'Wind Farm, Texas',
    verifier: 'Verra'
  },
  {
    id: '3',
    type: 'Forest Conservation',
    vintage: 2023,
    price: 30.00,
    quantity: 500,
    verified: true,
    origin: 'Amazon Rainforest, Brazil',
    verifier: 'Gold Standard'
  }
];

export function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const handleBuy = (creditId: string) => {
    console.log('Buying credit:', creditId);
    // Implement buy functionality
  };

  const filteredCredits = mockCredits.filter(credit => {
    const matchesSearch = credit.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         credit.origin.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || credit.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Carbon Credit Marketplace</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
          <input
            type="text"
            placeholder="Search credits..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-green-800 text-green-100 rounded-lg 
                     placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-4">
          <Filter className="h-5 w-5 text-green-400" />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-green-800 text-green-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">All Types</option>
            <option value="Solar Energy Credits">Solar</option>
            <option value="Wind Energy Credits">Wind</option>
            <option value="Forest Conservation">Forest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCredits.map(credit => (
          <CreditCard
            key={credit.id}
            credit={credit}
            onBuy={handleBuy}
          />
        ))}
      </div>
    </div>
  );
}