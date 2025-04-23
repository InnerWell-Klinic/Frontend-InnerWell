import React from 'react';

const Navbar = ({ isOpen, setIsOpen, onPageChange }) => {
  const navItems = [
    { icon: "✎", label: "Pendaftaran", page: 'pendaftaran' },
    { icon: "⌘", label: "Rekam Medis", page: 'rekamMedis' },
  ];

  const handleNavClick = (page) => {
    onPageChange(page);
    // Optional: tutup navbar setelah navigasi di mobile
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Toggle Button - Selalu visible */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 text-white text-xl font-light bg-[#4CAF50]"
      >
        {isOpen ? "☰" : "☰"}
      </button>

      {/* Navbar */}
      <div className={`fixed left-0 top-0 h-screen bg-[#4CAF50] transition-all duration-300 ${
        isOpen ? 'w-60' : 'w-0 overflow-hidden'
      }`}>
        {/* Logo/Brand Area */}
        <div className="h-16 flex items-center px-4">
          <span className="text-white text-xl font-light">☰</span>
        </div>

        {/* Nav Items */}
        <div className="mt-8">
          {navItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavClick(item.page)}
              className="flex items-center text-white hover:bg-[#45a049] px-6 py-4 cursor-pointer transition-colors duration-200"
            >
              <span className="text-3xl mr-4">{item.icon}</span>
              <span className="text-lg font-medium tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar; 