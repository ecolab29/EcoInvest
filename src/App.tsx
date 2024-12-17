import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { OverviewPage } from './pages/OverviewPage';
import { MarketplacePage } from './pages/MarketplacePage';
import { LandingPage } from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/app" element={
          <DashboardLayout>
            <Routes>
              <Route index element={<OverviewPage />} />
              <Route path="marketplace" element={<MarketplacePage />} />
              <Route path="analytics" element={
                <div className="text-white">Analytics Page (Coming Soon)</div>
              } />
              <Route path="settings" element={
                <div className="text-white">Settings Page (Coming Soon)</div>
              } />
            </Routes>
          </DashboardLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;



// modify the dapp, let it return the connected address at the top corner after successful wallet connection, use placeholder address, let the dapp features such as  Investment Dashboard: Users browse and invest in green projects tokenized on Hedera. Carbon Credit Marketplace: Trade tokenized carbon credits using HTS. Impact Reports: Real-time updates on funded projects’ environmental impacts  
// be more robust, use placeholder values. 