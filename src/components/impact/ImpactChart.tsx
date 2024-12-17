import React from 'react';

interface ImpactChartProps {
  data: number[];
  title: string;
}

export function ImpactChart({ data, title }: ImpactChartProps) {
  const maxValue = Math.max(...data);
  
  return (
    <div className="bg-green-900 rounded-xl p-6">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="h-64 flex items-end space-x-4">
        {data.map((value, index) => {
          const heightPercentage = maxValue > 0 ? (value / maxValue) * 100 : 0;
          return (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className="w-full bg-green-400 rounded-t-lg transition-all border border-white"
                style={{
                  height: `${heightPercentage}%`,
                  minHeight: '10px', // Ensures bars are always visible
                }}
              />
              <span className="text-sm text-green-100 mt-2">Month {index + 1}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
