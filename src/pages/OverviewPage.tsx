import React from 'react';
import { Cloud, Zap, TreePine, Droplets, TrendingUp, Users, DollarSign } from 'lucide-react';
import { MetricCard } from '../components/impact/MetricCard';
import { ImpactChart } from '../components/impact/ImpactChart';

const mockMetrics = {
  totalInvestment: 1250000,
  activeProjects: 8,
  investors: 450,
  co2Offset: 15000,
  renewableEnergy: 75000,
  treesPlanted: 25000,
  waterConserved: 1500000,
};

const mockChartData = {
  investments: [30, 45, 60, 75, 90, 85],
  impact: [25, 40, 55, 70, 85, 80],
};

export function OverviewPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
        <p className="text-green-100">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Investment"
          value={mockMetrics.totalInvestment}
          unit="HBAR"
          icon={DollarSign}
        />
        <MetricCard
          title="Active Projects"
          value={mockMetrics.activeProjects}
          unit="projects"
          icon={TrendingUp}
        />
        <MetricCard
          title="Total Investors"
          value={mockMetrics.investors}
          unit="users"
          icon={Users}
        />
        <MetricCard
          title="CO₂ Offset"
          value={mockMetrics.co2Offset}
          unit="tons"
          icon={Cloud}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ImpactChart
          title="Monthly Investments"
          data={mockChartData.investments}
        />
        <ImpactChart
          title="Environmental Impact"
          data={mockChartData.impact}
        />
      </div>

      {/* Environmental Impact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Renewable Energy"
          value={mockMetrics.renewableEnergy}
          unit="MWh"
          icon={Zap}
        />
        <MetricCard
          title="Trees Planted"
          value={mockMetrics.treesPlanted}
          unit="trees"
          icon={TreePine}
        />
        <MetricCard
          title="Water Conserved"
          value={mockMetrics.waterConserved}
          unit="gal"
          icon={Droplets}
        />
      </div>
    </div>
  );
}