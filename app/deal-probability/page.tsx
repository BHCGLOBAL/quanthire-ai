'use client';

import { useState } from 'react';
import { Upload, TrendingUp, Clock, DollarSign } from 'lucide-react';

export default function DealProbability() {
  const [dealData, setDealData] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setResults({
        probability: 78,
        timeline: '45-60 days',
        value: '$150,000',
        factors: [
          { name: 'Budget Approved', impact: 'high', status: 'positive' },
          { name: 'Decision Maker Engaged', impact: 'high', status: 'positive' },
          { name: 'Timeline Uncertainty', impact: 'medium', status: 'neutral' },
          { name: 'Competitor Presence', impact: 'medium', status: 'negative' }
        ],
        recommendations: [
          'Schedule follow-up with CFO to confirm budget allocation',
          'Request formal proposal deadline from decision maker',
          'Prepare competitive differentiation document'
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Deal Probability Calculator</h1>
          <p className="text-gray-600">Analyze deal likelihood and identify key success factors</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Deal Information
            </h2>
            
            <textarea
              className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter deal details:\n\n- Company name and size\n- Decision makers involved\n- Budget status\n- Timeline\n- Competition\n- Pain points addressed\n- Previous interactions"
              value={dealData}
              onChange={(e) => setDealData(e.target.value)}
            />

            <button
              onClick={handleAnalysis}
              disabled={!dealData || isAnalyzing}
              className="w-full mt-4 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              {isAnalyzing ? 'Analyzing Deal...' : 'Calculate Probability'}
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
            
            {!results ? (
              <div className="flex items-center justify-center h-64 text-gray-400">
                <p>Enter deal information and click Calculate to see results</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">{results.probability}%</div>
                  <p className="text-gray-600">Deal Close Probability</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-gray-600 mb-2" />
                    <p className="text-sm text-gray-600">Timeline</p>
                    <p className="text-lg font-semibold">{results.timeline}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <DollarSign className="w-5 h-5 text-gray-600 mb-2" />
                    <p className="text-sm text-gray-600">Deal Value</p>
                    <p className="text-lg font-semibold">{results.value}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Key Factors</h3>
                  <div className="space-y-2">
                    {results.factors.map((factor: any, idx: number) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <span className="text-sm">{factor.name}</span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          factor.status === 'positive' ? 'bg-green-100 text-green-800' :
                          factor.status === 'negative' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {factor.impact}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Recommendations</h3>
                  <ul className="space-y-2">
                    {results.recommendations.map((rec: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
