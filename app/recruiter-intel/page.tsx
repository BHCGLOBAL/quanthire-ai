'use client';

import { useState } from 'react';
import { Search, TrendingUp, Users, Briefcase, MapPin } from 'lucide-react';

export default function RecruiterIntel() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleSearch = async () => {
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setResults({
        recruiterName: 'Sarah Johnson',
        company: 'TechRecruit Partners',
        location: 'San Francisco, CA',
        specialization: 'Quantitative Finance & AI/ML',
        activityLevel: 'high',
        recentPlacements: [
          { role: 'Senior Quant Developer', company: 'Hedge Fund ABC', date: '2 weeks ago' },
          { role: 'ML Engineer', company: 'FinTech Startup', date: '1 month ago' },
          { role: 'Quantitative Analyst', company: 'Investment Bank XYZ', date: '6 weeks ago' }
        ],
        activeClients: [
          { name: 'Citadel', openRoles: 5, focus: 'Algo Trading' },
          { name: 'Jane Street', openRoles: 3, focus: 'Market Making' },
          { name: 'Two Sigma', openRoles: 4, focus: 'Research' }
        ],
        insights: [
          'High placement rate in quantitative roles (85% success)',
          'Specializes in mid to senior level positions ($150K-$400K)',
          'Strong network in algorithmic trading firms',
          'Active on LinkedIn with 500+ connections in finance'
        ],
        contactInfo: {
          email: 'sarah.j@techrecruit.com',
          linkedin: 'linkedin.com/in/sarahjohnson-recruiter',
          phone: '+1 (415) 555-0123'
        }
      });
      setIsSearching(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Recruiter Intelligence</h1>
          <p className="text-gray-600">Research recruiters, track placements, and analyze market activity</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search by recruiter name, company, or specialization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              onClick={handleSearch}
              disabled={!searchQuery || isSearching}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              {isSearching ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>

        {!results ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center text-gray-400">
            <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Enter a recruiter name or company to get intelligence data</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{results.recruiterName}</h2>
                  <p className="text-lg text-gray-600">{results.company}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {results.location}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      {results.activityLevel} activity
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-2">Specialization</p>
                  <p className="font-semibold text-blue-600">{results.specialization}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <a href={`mailto:${results.contactInfo.email}`} className="text-sm text-blue-600 hover:underline">
                  {results.contactInfo.email}
                </a>
                <a href={`https://${results.contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                  LinkedIn Profile
                </a>
                <span className="text-sm text-gray-600">{results.contactInfo.phone}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  Recent Placements
                </h3>
                <div className="space-y-3">
                  {results.recentPlacements.map((placement: any, idx: number) => (
                    <div key={idx} className="p-3 bg-gray-50 rounded">
                      <p className="font-semibold text-sm">{placement.role}</p>
                      <p className="text-sm text-gray-600">{placement.company}</p>
                      <p className="text-xs text-gray-500 mt-1">{placement.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Active Clients
                </h3>
                <div className="space-y-3">
                  {results.activeClients.map((client: any, idx: number) => (
                    <div key={idx} className="p-3 bg-blue-50 rounded">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold text-sm">{client.name}</p>
                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                          {client.openRoles} open roles
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">Focus: {client.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Key Insights
              </h3>
              <ul className="space-y-3">
                {results.insights.map((insight: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-transparent rounded">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
