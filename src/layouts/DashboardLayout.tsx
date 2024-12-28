import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Leaf, BarChart3, Settings, Menu } from 'lucide-react';
import { WalletButton } from '../components/wallet/WalletButton';
import { useWallet } from '../hooks/useWallet';

const navItems = [
  { path: '/app', icon: LayoutDashboard, label: 'Overview' },
  { path: '/marketplace', icon: Leaf, label: 'Marketplace' },
  { path: '/app/analytics', icon: BarChart3, label: 'Analytics' },
  { path: '/app/settings', icon: Settings, label: 'Settings' },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  const { walletAddress, isLoading, connectWallet, disconnectWallet } = useWallet();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-green-950">
      {/* Header */}
      <header className="bg-green-900 border-b border-green-800">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-green-100 hover:text-white"
              >
                <Menu className="h-6 w-6" />
              </button>
              <Link to="/app" className="flex items-center space-x-2 text-white ml-4">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-xl font-bold">EcoInvest</span>
              </Link>
            </div>
            <div className="flex items-center">
              <WalletButton
                address={walletAddress}
                isConnecting={isLoading}
                onConnect={connectWallet}
                onDisconnect={disconnectWallet}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          lg:block fixed lg:static inset-y-0 left-0 z-50 w-64 transform 
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 transition-transform duration-300 ease-in-out
          bg-green-900 border-r border-green-800
        `}>
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors
                    ${isActive 
                      ? 'bg-green-800 text-white' 
                      : 'text-green-100 hover:bg-green-800/50 hover:text-white'}
                  `}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}