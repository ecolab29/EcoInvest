import React from 'react';
import { Shield, Globe } from 'lucide-react';
import { CarbonCredit } from '../../types';
import { formatCurrency } from '../../utils/formatters';

interface CreditCardProps {
  credit: CarbonCredit;
  onBuy: (creditId: string) => void;
}

export function CreditCard({ credit, onBuy }: CreditCardProps) {
  return (
    <div className="bg-green-900 rounded-xl p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{credit.type}</h3>
          <p className="text-green-100">Vintage: {credit.vintage}</p>
        </div>
        {credit.verified && (
          <div className="flex items-center text-green-400">
            <Shield className="h-4 w-4 mr-1" />
            <span className="text-sm">Verified</span>
          </div>
        )}
      </div>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center text-green-200">
          <Globe className="h-4 w-4 mr-2" />
          <span>{credit.origin}</span>
        </div>
        
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-green-100">Price per Credit</p>
            <p className="text-lg font-semibold text-white">
              {formatCurrency(credit.price)} HBAR
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-green-100">Available</p>
            <p className="text-lg font-semibold text-green-400">
              {formatCurrency(credit.quantity)}
            </p>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => onBuy(credit.id)}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition-colors"
      >
        Buy Credits
      </button>
    </div>
  );
}