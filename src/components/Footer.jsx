import React from 'react';
import exam from '../assets/images/foto3.png';
import Icon from '../assets/icon/Icon';


export default function Footer() {
  return (
    <footer className="bg-accent text-background">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 justify-end items-center">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img className="w-52 " src={exam} alt="SMK Logo" />
            <p className="mt-2 text-sm">
              SMK Negeri 2 Balikpapan
            </p>
          </div>

          {/* Navigation Section - Sekolah */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Sekolah</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Tentang SMK Negeri 2 Balikpapan</a></li>
              <li><a href="#" className="hover:text-primary">Program Studi</a></li>
              <li><a href="#" className="hover:text-primary">Fasilitas</a></li>
              <li><a href="#" className="hover:text-primary">Visi & Misi</a></li>
            </ul>
          </div>

          {/* Navigation Section - Lowongan */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Lowongan</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Lowongan Terbaru</a></li>
              <li><a href="#" className="hover:text-primary">Lowongan Populer</a></li>
              <li><a href="#" className="hover:text-primary">Panduan Karir</a></li>
              <li><a href="#" className="hover:text-primary">Tips Wawancara</a></li>
            </ul>
          </div>

          {/* Navigation Section - Alumni */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Alumni</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Testimoni Alumni</a></li>
              <li><a href="#" className="hover:text-primary">Statistik Alumni</a></li>
              <li><a href="#" className="hover:text-primary">Hubungi Alumni</a></li>
              <li><a href="#" className="hover:text-primary">Alumni Sukses</a></li>
            </ul>
          </div>

          {/* Navigation Section - Kontak */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Kontak</h2>
            <address className="not-italic space-y-2">
              <p>Jalan Jend. Sudirman No. 01</p>
              <p>Balikpapan, Kalimantan Timur</p>
              <p>Email: info@smkn2bpn.sch.id</p>
              <p>Telepon: (0542) 123456</p>
            </address>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4">
            <a href="#"><Icon name="facebook" size="XL"></Icon></a>
            <a href="#">        <Icon name="Instagram" size="XL"/>
            </a>
            <a href="#"><Icon name="Linkedin"></Icon></a>
          </div>
          <p className="mt-4 md:mt-0 text-sm">&copy; 2024 SMK Negeri 2 Balikpapan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
