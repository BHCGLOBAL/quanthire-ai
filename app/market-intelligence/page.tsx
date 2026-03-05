'use client';

import { useState } from 'react';
import { TrendingUp, DollarSign, Users, Building, BarChart3 } from 'lucide-react';

export default function MarketIntelligence() {
  const [industry, setIndustry] = useState('quantitative-finance');
  const [role, setRole] = useState('quant-developer');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const handleAnalyze = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setData({
        marketOverview: {
          avgSalary: '$185,000',
          salaryRange: '$120K - $350K',
          demandTrend: 'increasing',
          growthRate: '+15%',
          activePositions: 342
        },
        topCompanies: [
          { name: 'Jane Street', openings: 23, avgSalary: '$320K', trend: 'up' },
          { name: 'Citadel', openings: 18, avgSalary: '$295K', trend: 'up' },
          { name: 'Two Sigma', openings: 15, avgSalary: '$280K', trend: 'stable' },
          { name: 'Hudson River Trading', openings: 12, avgSalary: '$275K', trend: 'up' },
          { name: 'Jump Trading', openings: 10, avgSalary: '$265K', trend: 'stable' }
        ],
        keySkills: [
          { skill: 'C++', demand: 'Very High', growth: '+20%' },
          { skill: 'Python', demand: 'Very High', growth: '+18%' },
          { skill: 'Machine Learning', demand: 'High', growth: '+25%' },
          { skill: 'Statistics', demand: 'High', growth: '+12%' },
          { skill: 'Algorithm Design', demand: 'Very High', growth: '+15%' }
        ],
        regionalData: [
          { location: 'New York, NY', avgSalary: '$195K', openings: 156 },
          { location: 'Chicago, IL', avgSalary: '$175K', openings: 89 },
          { location: 'San Francisco, CA', avgSalary: '$185K', openings: 67 },
          { location: 'London, UK', avgSalary: '£140K', openings: 45 }
        ]
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Market Intelligence</h1>
          <p className="text-gray-600">Real-time salary data, demand trends, and hiring insights</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option value="quantitative-finance">Quantitative Finance</option>
                <option value="ai-ml">AI/ML Engineering</option>
                <option value="data-science">Data Science</option>
                <option value="software-engineering">Software Engineering</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="quant-developer">Quant Developer</option>
                <option value="quant-researcher">Quant Researcher</option>
                <option value="quant-trader">Quant Trader</option>
                <option value="ml-engineer">ML Engineer</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={handleAnalyze}
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Analyzing...' : 'Get Market Data'}
              </button>
            </div>
          </div>
        </div>

        {!data ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center text-gray-400">
            <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Select industry and role to view market intelligence</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <DollarSign className="w-8 h-8 text-green-600 mb-2" />
                <p className="text-sm text-gray-600">Average Salary</p>
                <p className="text-2xl font-bold text-gray-900">{data.marketOverview.avgSalary}</p>
                <p className="text-xs text-gray-500 mt-1">{data.marketOverview.salaryRange}</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <TrendingUp className="w-8 h-8 text-blue-600 mb-2" />
                <p className="text-sm text-gray-600">Market Growth</p>
                <p className="text-2xl font-bold text-gray-900">{data.marketOverview.growthRate}</p>
                <p className="text-xs text-green-600 mt-1">Year over year</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <Building className="w-8 h-8 text-purple-600 mb-2" />
                <p className="text-sm text-gray-600">Active Positions</p>
                <p className="text-2xl font-bold text-gray-900">{data.marketOverview.activePositions}</p>
                <p className="text-xs text-gray-500 mt-1">Currently hiring</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <Users className="w-8 h-8 text-orange-600 mb-2" />
                <p className="text-sm text-gray-600">Demand Trend</p>
                <p className="text-2xl font-bold capitalize text-gray-900">{data.marketOverview.demandTrend}</p>
                <p className="text-xs text-green-600 mt-1">High demand</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Top Hiring Companies</h3>
              <div className="space-y-3">
                {data.topCompanies.map((company: any, idx: number) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{company.name}</p>
                      <p className="text-sm text-gray-600">{company.openings} open positions</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">{company.avgSalary}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <TrendingUp className={`w-3 h-3 ${
                          company.trend === 'up' ? 'text-green-600' : 'text-gray-400'
                        }`} />
                        <span className="capitalize">{company.trend}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">In-Demand Skills</h3>
                <div className="space-y-3">
                  {data.keySkills.map((item: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between p-3 border-l-4 border-blue-600 bg-blue-50">
                      <div>
                        <p className="font-semibold text-gray-900">{item.skill}</p>
                        <p className="text-sm text-gray-600">Demand: {item.demand}</p>
                      </div>
                      <span className="text-sm font-medium text-green-600">{item.growth}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Regional Breakdown</h3>
                <div className="space-y-3">
                  {data.regionalData.map((region: any, idx: number) => (
                    <div key={idx} className="p-4 bg-gradient-to-r from-purple-50 to-transparent rounded">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-gray-900">{region.location}</p>
                        <span className="text-sm font-medium text-purple-600">{region.avgSalary}</span>
                      </div>
                      <p className="text-sm text-gray-600">{region.openings} active positions</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
