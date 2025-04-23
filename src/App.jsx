import React, { useState } from 'react';
import PatientDashboard from './components/PatientDashboard';
import MedicalRecord from './components/MedicalRecord';
import { NavbarProvider } from './context/NavbarContext';

function App() {
  const [currentPage, setCurrentPage] = useState('pendaftaran');

  return (
    <NavbarProvider>
      <div className="bg-white">
        {currentPage === 'pendaftaran' && <PatientDashboard onPageChange={setCurrentPage} />}
        {currentPage === 'rekamMedis' && <MedicalRecord onPageChange={setCurrentPage} />}
      </div>
    </NavbarProvider>
  );
}

export default App;
