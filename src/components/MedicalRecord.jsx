import React, { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';

const MedicalRecord = ({ onPageChange }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Data dummy untuk rekam medis
  const medicalRecords = [
    {
      id: 1,
      nomorRekamMedis: "RM-2024-001",
      tanggal: "2024-03-15",
      dokter: "Dr. Sarah Johnson",
      diagnosa: "Flu dan Demam",
      treatment: "Pemberian obat antipiretik dan istirahat",
      obat: ["Paracetamol 500mg", "Vitamin C"]
    },
    {
      id: 2,
      nomorRekamMedis: "RM-2024-002",
      tanggal: "2024-02-28",
      dokter: "Dr. Michael Chen",
      diagnosa: "Migrain",
      treatment: "Terapi dan pengobatan",
      obat: ["Ibuprofen 400mg", "Amitriptyline"]
    }
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDownload = (record) => {
    // Implementasi download rekam medis
    console.log('Downloading record:', record);
  };

  const filteredRecords = medicalRecords.filter(record => 
    record.nomorRekamMedis.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} onPageChange={onPageChange} />
      
      <main className={`transition-all duration-300 ${
        isNavOpen ? 'ml-60' : 'ml-0'
      } pt-16`}>
        <div className="max-w-6xl mx-auto p-8">
          <div className="w-full text-left mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">
              Rekam Medis Pasien
            </h1>
          </div>

          {/* Search and Download Section */}
          <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="w-full md:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari nomor rekam medis..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full p-3 pl-10 bg-white text-gray-800 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleDownload(medicalRecords[0])}
              className="px-4 py-2 bg-gradient-to-r from-[#4CAF50] to-[#45a049] hover:from-[#45a049] hover:to-[#3d8b40] text-white rounded-md transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Rekam Medis
            </button>
          </div>

          <div className="space-y-6">
            {filteredRecords.map((record) => (
              <div key={record.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Kunjungan: {record.tanggal}
                    </h3>
                    <p className="text-gray-600">{record.dokter}</p>
                    <p className="text-sm text-gray-500">No. Rekam Medis: {record.nomorRekamMedis}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDownload(record)}
                      className="p-2 text-green-600 hover:text-green-700 transition-colors duration-200"
                      title="Download"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Selesai
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Diagnosa:</h4>
                    <p className="text-gray-800">{record.diagnosa}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Treatment:</h4>
                    <p className="text-gray-800">{record.treatment}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Obat:</h4>
                    <ul className="list-disc list-inside text-gray-800">
                      {record.obat.map((medicine, idx) => (
                        <li key={idx}>{medicine}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {filteredRecords.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">Tidak ada rekam medis yang ditemukan</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MedicalRecord; 