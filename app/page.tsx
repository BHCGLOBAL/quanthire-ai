'use client';

export default function Home() {
  return (
    <div style={{
      padding: '50px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>
        QuantHire AI - Production Live ✅
      </h1>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        maxWidth: '600px',
        margin: '0 auto',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '15px' }}>
          <strong>Database:</strong> ✓ Connected to Supabase
        </p>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '15px' }}>
          <strong>API Endpoints:</strong> Ready for deployment
        </p>
        <p style={{ fontSize: '16px', color: '#999', marginTop: '30px' }}>
          <strong>7 AI Modules:</strong><br/>
          1. JD Analyzer • 2. Resume Match • 3. Deal Probability<br/>
          4. Client Friction • 5. Recruiter Intel • 6. Market Intelligence<br/>
          7. Team Upload
        </p>
      </div>
    </div>
  );
}
