'use client';

import { useState } from 'react';
import { AlertTriangle, CheckCircle, XCircle, TrendingDown } from 'lucide-react';

export default function ClientFriction() {
  const [interactionData, setInteractionData] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setResults({
        overallScore: 6.2,
        riskLevel: 'medium',
        frictionPoints: [
          { category: 'Communication Delays', severity: 'high', description: 'Average response time: 4 days', impact: 'High risk of disengagement' },
          { category: 'Unclear Requirements', severity: 'high', description: 'Multiple requirement changes in past 2 weeks', impact: 'Project scope uncertainty' },
          { category: 'Budget Concerns', severity: 'medium', description: 'Client mentioned budget constraints twice', impact: 'Potential for price negotiation' },
          { category: 'Decision Making', severity: 'low', description: 'Multiple stakeholders involved', impact: 'Extended timeline expected' }
        ],
        recommendations: [
          'Schedule daily check-ins to reduce communication lag',
          'Document all requirements in shared document for transparency',
          'Prepare flexible pricing options',
          'Create stakeholder map and identify primary decision maker'
        ],
        trend: 'worsening'
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <XCircle className="w-5 h-5 text-red-600" />;
      case 'medium': return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'low': return <CheckCircle className="w-5 h-5 text-green-600" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Client Friction Detector</h1>
          <p className="text-gray-600">Identify and address client relationship issues early</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Client Interaction History</h2>
            
            <textarea
              className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter recent client interactions:\n\n- Email exchanges\n- Meeting notes\n- Phone call summaries\n- Project feedback\n- Change requests\n- Payment discussions\n- Response times"
              value={interactionData}
              onChange={(e) => setInteractionData(e.target.value)}
            />

            <button
              onClick={handleAnalysis}
              disabled={!interactionData || isAnalyzing}
              className="w-full mt-4 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              {isAnalyzing ? 'Analyzing Friction...' : 'Detect Friction Points'}
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Friction Analysis</h2>
            
            {!results ? (
              <div className="flex items-center justify-center h-64 text-gray-400">
                <p>Enter interaction data to detect friction points</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <div className="text-5xl font-bold text-blue-600 mb-2">{results.overallScore}/10</div>
                  <p className="text-gray-600 mb-2">Relationship Health Score</p>
                  <div className="flex items-center justify-center gap-2">
                    {results.trend === 'worsening' && (
                      <>
                        <TrendingDown className="w-5 h-5 text-red-600" />
                        <span className="text-sm text-red-600 font-medium">Worsening</span>
                      </>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Friction Points</h3>
                  <div className="space-y-3">
                    {results.frictionPoints.map((point: any, idx: number) => (
                      <div key={idx} className={`p-4 border rounded-lg ${getSeverityColor(point.severity)}`}>
                        <div className="flex items-start gap-3">
                          {getSeverityIcon(point.severity)}
                          <div className="flex-1">
                            <div className="font-semibold mb-1">{point.category}</div>
                            <p className="text-sm mb-1">{point.description}</p>
                            <p className="text-xs opacity-75">{point.impact}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Action Items</h3>
                  <ul className="space-y-2">
                    {results.recommendations.map((rec: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm p-3 bg-blue-50 rounded">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
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
