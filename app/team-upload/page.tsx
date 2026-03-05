'use client';

import { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, Download } from 'lucide-react';

export default function TeamUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<any>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setUploadStatus(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    // Simulate upload processing
    setTimeout(() => {
      setUploadStatus({
        success: true,
        recordsProcessed: 47,
        recordsAdded: 42,
        recordsUpdated: 5,
        recordsFailed: 0,
        summary: [
          { field: 'Candidates', count: 25 },
          { field: 'Job Descriptions', count: 12 },
          { field: 'Companies', count: 10 }
        ],
        warnings: []
      });
      setIsUploading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Team Data Upload</h1>
          <p className="text-gray-600">Bulk upload candidate profiles, job descriptions, and company data</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition-colors">
            <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-semibold mb-2">Upload Your Data File</h3>
            <p className="text-sm text-gray-600 mb-4">Supports CSV, Excel (.xlsx), or JSON formats</p>
            
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".csv,.xlsx,.json"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file-upload"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 cursor-pointer transition-colors"
            >
              Select File
            </label>

            {file && (
              <div className="mt-6 flex items-center justify-center gap-3 p-4 bg-blue-50 rounded-lg">
                <FileText className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-900">{file.name}</span>
                <span className="text-sm text-gray-600">({(file.size / 1024).toFixed(2)} KB)</span>
              </div>
            )}
          </div>

          {file && !uploadStatus && (
            <button
              onClick={handleUpload}
              disabled={isUploading}
              className="w-full mt-6 bg-green-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isUploading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  <span>Processing Data...</span>
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  <span>Upload and Process</span>
                </>
              )}
            </button>
          )}
        </div>

        {uploadStatus && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-6">
              {uploadStatus.success ? (
                <CheckCircle className="w-8 h-8 text-green-600" />
              ) : (
                <AlertCircle className="w-8 h-8 text-red-600" />
              )}
              <div>
                <h3 className="text-xl font-semibold">
                  {uploadStatus.success ? 'Upload Successful!' : 'Upload Failed'}
                </h3>
                <p className="text-sm text-gray-600">
                  {uploadStatus.success 
                    ? `Processed ${uploadStatus.recordsProcessed} records`
                    : 'There was an error processing your file'}
                </p>
              </div>
            </div>

            {uploadStatus.success && (
              <>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Added</p>
                    <p className="text-3xl font-bold text-green-600">{uploadStatus.recordsAdded}</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Updated</p>
                    <p className="text-3xl font-bold text-blue-600">{uploadStatus.recordsUpdated}</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Failed</p>
                    <p className="text-3xl font-bold text-gray-600">{uploadStatus.recordsFailed}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold mb-3">Data Summary</h4>
                  <div className="space-y-2">
                    {uploadStatus.summary.map((item: any, idx: number) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-gray-700">{item.field}</span>
                        <span className="font-semibold text-gray-900">{item.count} records</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setFile(null);
                    setUploadStatus(null);
                  }}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Upload Another File
                </button>
              </>
            )}
          </div>
        )}

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Template Files
          </h3>
          <p className="text-sm text-blue-800 mb-4">
            Use our template files to ensure your data is formatted correctly
          </p>
          <div className="flex gap-3">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors border border-blue-300">
              Candidate Template
            </button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors border border-blue-300">
              Job Description Template
            </button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors border border-blue-300">
              Company Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
