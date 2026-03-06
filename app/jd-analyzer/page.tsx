'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function JDAnalyzer() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const analyzeJD = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/analyze-jd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobDescription: input })
      });
      const data = await response.json();
      setResult(data.analysis || 'Analysis complete');
    } catch (error) {
      setResult('Error: ' + (error instanceof Error ? error.message : String(error)));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '40px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', marginBottom: '20px', display: 'inline-block' }}>
          ← Back to Home
        </Link>
        
        <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '12px', color: '#667eea' }}>
            📋 JD Analyzer
          </h1>
          <p style={{ color: '#666', marginBottom: '32px' }}>
            Analyze job descriptions to extract requirements, skills, and candidate fit criteria
          </p>
          
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste job description here..."
            style={{ width: '100%', minHeight: '200px', padding: '16px', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '16px', marginBottom: '20px', fontFamily: 'inherit' }}
          />
          
          <button
            onClick={analyzeJD}
            disabled={loading || !input.trim()}
            style={{ background: loading ? '#ccc' : '#667eea', color: 'white', padding: '12px 32px', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? 'Analyzing...' : 'Analyze JD'}
          </button>
          
          {result && (
            <div style={{ marginTop: '32px', padding: '24px', background: '#f5f5f5', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Analysis Result:</h3>
              <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
