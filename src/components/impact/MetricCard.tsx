import React from 'react';
import { LucideIcon } from 'lucide-react';
import { formatMetric } from '../../utils/formatters';

interface MetricCardProps {
  title: string;
  value: number;
  unit: string;
  icon: LucideIcon;
}

export function MetricCard({ title, value, unit, icon: Icon }: MetricCardProps) {
  return (
    <div className="bg-green-900 rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-3 bg-green-800 rounded-lg text-green-400">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      
      <p className="text-3xl font-bold text-green-400">
        {formatMetric(value, unit)}
      </p>
    </div>
  );
}