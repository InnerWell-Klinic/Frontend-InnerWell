import React, { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';

const PatientDashboard = ({ onPageChange }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  // Data dummy untuk poli dan jadwal dokter
  const poliData = [
    { id: 1, nama: 'Poli Umum' },
    { id: 2, nama: 'Poli Gigi' },
    { id: 3, nama: 'Poli Anak' },
    { id: 4, nama: 'Poli Mata' },
    { id: 5, nama: 'Poli Kulit dan Kelamin' }
  ];

  const jadwalDokter = {
    1: [ // Poli Umum
      { id: 1, nama: 'dr. Sarah Johnson', jadwal: 'Senin-Jumat, 08:00-14:00' },
      { id: 2, nama: 'dr. Michael Chen', jadwal: 'Senin-Jumat, 14:00-20:00' }
    ],
    2: [ // Poli Gigi
      { id: 3, nama: 'drg. Lisa Wong', jadwal: 'Senin-Kamis, 09:00-15:00' },
      { id: 4, nama: 'drg. James Lee', jadwal: 'Selasa-Jumat, 13:00-19:00' }
    ],
    3: [ // Poli Anak
      { id: 5, nama: 'dr. Maria Garcia', jadwal: 'Senin-Jumat, 08:00-14:00' },
      { id: 6, nama: 'dr. Robert Smith', jadwal: 'Senin-Jumat, 14:00-20:00' }
    ],
    4: [ // Poli Mata
      { id: 7, nama: 'dr. David Kim', jadwal: 'Senin-Kamis, 09:00-15:00' },
      { id: 8, nama: 'dr. Sarah Wilson', jadwal: 'Selasa-Jumat, 13:00-19:00' }
    ],
    5: [ // Poli Kulit dan Kelamin
      { id: 9, nama: 'dr. Emily Brown', jadwal: 'Senin-Jumat, 08:00-14:00' },
      { id: 10, nama: 'dr. John Davis', jadwal: 'Senin-Jumat, 14:00-20:00' }
    ]
  };

  const [formData, setFormData] = useState({
    namaLengkap: '',
    keluhan: '',
    tanggalKunjungan: '',
    tempatLahir: '',
    jenisKelamin: '',
    usia: '',
    riwayatPenyakit: '',
    alamatLengkap: '',
    tanggalLahir: '',
    nomorTelepon: '',
    poliId: '',
    dokterId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
      // Reset dokterId ketika poli berubah
      ...(name === 'poliId' && { dokterId: '' })
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const inputClass = "w-full p-3 bg-white text-gray-800 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} onPageChange={onPageChange} />
      
      {/* Main content dengan transition untuk menyesuaikan dengan navbar */}
      <main className={`transition-all duration-300 ${
        isNavOpen ? 'ml-60' : 'ml-0'
      } pt-16`}>
        <div className="max-w-6xl mx-auto p-8">
          {/* Dashboard Title */}
          <div className="w-full text-left mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Dashboard Pasien
            </h1>

            {/* Statistik Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Total Pasien */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Pasien</p>
                    <p className="text-2xl font-semibold text-gray-800">45</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Jumlah Dokter */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Jumlah Dokter</p>
                    <p className="text-2xl font-semibold text-gray-800">10</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Jadwal Poli */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Jadwal Poli</p>
                    <p className="text-lg font-semibold text-gray-800">08:00 - 20:00</p>
                    <p className="text-xs text-gray-500 mt-1">Senin - Jumat</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full text-left mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Pendaftaran Periksa
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Kolom Kiri - Informasi Personal */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="namaLengkap" className={labelClass}>
                    Nama Lengkap
                  </label>
                  <input
                    id="namaLengkap"
                    type="text"
                    name="namaLengkap"
                    placeholder="Masukkan nama lengkap"
                    value={formData.namaLengkap}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="tempatLahir" className={labelClass}>
                    Tempat Lahir
                  </label>
                  <input
                    id="tempatLahir"
                    type="text"
                    name="tempatLahir"
                    placeholder="Masukkan tempat lahir"
                    value={formData.tempatLahir}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="tanggalLahir" className={labelClass}>
                    Tanggal Lahir
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      id="tanggalLahir"
                      type="text"
                      name="tanggalLahir"
                      placeholder="Tanggal Lahir"
                      onFocus={(e) => e.target.type = 'date'}
                      onBlur={(e) => {
                        if (!e.target.value) e.target.type = 'text'
                      }}
                      value={formData.tanggalLahir}
                      onChange={handleChange}
                      className={`${inputClass} pr-10`}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="jenisKelamin" className={labelClass}>
                    Jenis Kelamin
                  </label>
                  <select
                    id="jenisKelamin"
                    name="jenisKelamin"
                    value={formData.jenisKelamin}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Pilih jenis kelamin</option>
                    <option value="L">Laki-laki</option>
                    <option value="P">Perempuan</option>
                  </select>
                </div>

              </div>

              {/* Kolom Kanan - Informasi Kontak & Kesehatan */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="alamatLengkap" className={labelClass}>
                    Alamat Lengkap
                  </label>
                  <input
                    id="alamatLengkap"
                    type="text"
                    name="alamatLengkap"
                    placeholder="Masukkan alamat lengkap"
                    value={formData.alamatLengkap}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="nomorTelepon" className={labelClass}>
                    Nomor Telepon
                  </label>
                  <input
                    id="nomorTelepon"
                    type="tel"
                    name="nomorTelepon"
                    placeholder="Masukkan nomor telepon"
                    value={formData.nomorTelepon}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="usia" className={labelClass}>
                    Usia
                  </label>
                  <input
                    id="usia"
                    type="text"
                    name="usia"
                    placeholder="Masukkan usia"
                    value={formData.usia}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="riwayatPenyakit" className={labelClass}>
                    Riwayat Penyakit
                  </label>
                  <input
                    id="riwayatPenyakit"
                    type="text"
                    name="riwayatPenyakit"
                    placeholder="Masukkan riwayat penyakit jika ada"
                    value={formData.riwayatPenyakit}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Informasi Kunjungan */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-6">Informasi Kunjungan</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="poliId" className={labelClass}>
                    Poli
                  </label>
                  <select
                    id="poliId"
                    name="poliId"
                    value={formData.poliId}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Pilih Poli</option>
                    {poliData.map(poli => (
                      <option key={poli.id} value={poli.id}>
                        {poli.nama}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="dokterId" className={labelClass}>
                    Dokter & Jadwal
                  </label>
                  <select
                    id="dokterId"
                    name="dokterId"
                    value={formData.dokterId}
                    onChange={handleChange}
                    className={inputClass}
                    disabled={!formData.poliId}
                  >
                    <option value="">Pilih Dokter</option>
                    {formData.poliId && jadwalDokter[formData.poliId].map(dokter => (
                      <option key={dokter.id} value={dokter.id}>
                        {dokter.nama} - {dokter.jadwal}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="tanggalKunjungan" className={labelClass}>
                    Tanggal Kunjungan
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      id="tanggalKunjungan"
                      type="text"
                      name="tanggalKunjungan"
                      placeholder="Tanggal Kunjungan"
                      onFocus={(e) => e.target.type = 'date'}
                      onBlur={(e) => {
                        if (!e.target.value) e.target.type = 'text'
                      }}
                      value={formData.tanggalKunjungan}
                      onChange={handleChange}
                      className={`${inputClass} pr-10`}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="keluhan" className={labelClass}>
                    Keluhan
                  </label>
                  <input
                    id="keluhan"
                    type="text"
                    name="keluhan"
                    placeholder="Masukkan keluhan anda"
                    value={formData.keluhan}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <button
                type="submit"
                className="px-12 py-3 bg-gradient-to-r from-[#4CAF50] to-[#45a049] hover:from-[#45a049] hover:to-[#3d8b40] text-white rounded-md transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Daftar
              </button>
            </div>
          </form>

          {/* Status Antrian */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Status Antrian</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="text-lg font-medium text-green-600">Terdaftar</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Nomor Antrian</p>
                  <p className="text-lg font-medium text-gray-800">A-12</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Antrian Saat Ini</p>
                  <p className="text-lg font-medium text-gray-800">A-08</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Poli</p>
                  <p className="text-lg font-medium text-gray-800">Poli Umum</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Tanggal Kunjungan</p>
                  <p className="text-lg font-medium text-gray-800">15 Maret 2024</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Dokter</p>
                  <p className="text-lg font-medium text-gray-800">dr. Sarah Johnson</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Estimasi waktu tunggu</span>
                  <span>~20 menit</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>

              {/* Informasi Tambahan */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm text-blue-800">
                      Silahkan datang ke klinik 15 menit sebelum waktu pemeriksaan. 
                      Jika nomor antrian Anda terlewat, silahkan menghubungi petugas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard; 