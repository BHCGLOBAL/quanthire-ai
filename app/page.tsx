'use client';
import Link from 'next/link';

const modules = [
  {
    id: 'jd-analyzer',
    title: 'JD Analyzer',
    description: 'Analyze job descriptions for requirements, skills, and candidate fit',
    icon: '📋'
  },
  {
    id: 'resume-match',
    title: 'Resume Match',
    description: 'Match resumes against job requirements with AI-powered scoring',
    icon: '🎯'
  },
  {
    id: 'deal-probability',
    title: 'Deal Probability',
    description: 'Calculate probability of successful placement based on multiple factors',
    icon: '📊'
  },
  {
    id: 'client-friction',
    title: 'Client Friction',
    description: 'Identify and analyze potential friction points with clients',
    icon: '⚠️'
  },
  {
    id: 'recruiter-intel',
    title: 'Recruiter Intel',
    description: 'Generate insights and recommendations for recruiters',
    icon: '🔍'
  },
  {
    id: 'market-intelligence',
    title: 'Market Intelligence',
    description: 'Analyze market trends, salary data, and hiring patterns',
    icon: '📈'
  },
  {
    id: 'team-upload',
    title: 'Team Data Upload',
    description: 'Bulk upload and process team member data',
    icon: '📁'
  }
];

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <header style={{
          textAlign: 'center',
          marginBottom: '60px',
          color: 'white'
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            QuantHire AI ✅
          </h1>
          <p style={{
            fontSize: '20px',
            opacity: 0.9
          }}>
            AI-Powered Hiring Analytics for Quant, AI & Fintech Talent
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {modules.map((module) => (
            <Link
              key={module.id}
              href={`/${module.id}`}
              style={{
                background: 'white',
                padding: '32px',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                textDecoration: 'none',
                color: '#333',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 12px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{
                fontSize: '48px',
                marginBottom: '16px'
              }}>
                {module.icon}
              </div>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '12px',
                color: '#667eea'
              }}>
                {module.title}
              </h2>
              <p style={{
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.5'
              }}>
                {module.description}
              </p>
            </Link>
          ))}
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '24px',
          borderRadius: '12px',
          color: 'white',
          textAlign: 'center'
        }}>
          <p style={{ marginBottom: '12px' }}>
            <strong>Database:</strong> ✓ Connected to Supabase
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong>API Endpoints:</strong> Ready for AI Processing
          </p>
          <p style={{ fontSize: '14px', opacity: 0.8 }}>
            Powered by Next.js 14, Supabase & Anthropic Claude
          </p>
        </div>
      </div>
    </div>
  );
}
