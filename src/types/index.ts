// Wallet Types
export interface WalletState {
  address: string | null;
  isConnecting: boolean;
  isConnected: boolean;
  error: string | null;
}

// Project Types
export interface Project {
  id: string;
  name: string;
  description: string;
  location: string;
  type: 'Solar' | 'Wind' | 'Conservation' | 'Reforestation';
  targetFunding: number;
  currentFunding: number;
  roi: number;
  status: 'Active' | 'Completed' | 'Coming Soon';
  region: 'North America' | 'South America' | 'Europe' | 'Asia' | 'Africa';
  impact: {
    co2Offset: number;
    energyGenerated?: number;
    treesPlanted?: number;
    waterConserved?: number;
  };
}

// Carbon Credit Types
export interface CarbonCredit {
  id: string;
  type: string;
  vintage: number;
  price: number;
  quantity: number;
  verified: boolean;
  origin: string;
  verifier: string;
}

export interface Transaction {
  id: string;
  type: 'buy' | 'sell';
  creditId: string;
  quantity: number;
  price: number;
  timestamp: number;
}

// Impact Metrics Types
export interface ImpactMetrics {
  co2Offset: number;
  renewableEnergy: number;
  treesPlanted: number;
  waterConserved: number;
  timestamp: number;
}