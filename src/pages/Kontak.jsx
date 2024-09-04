import React, { useState } from "react";
import { Seo } from "../components/Seo.jsx";
import Layout from "../components/Layout.jsx";
import BreadCrumb from "../components/BreadCrumb.jsx";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", formData);
  };

  return (
    <>
      <Seo title="Kontak" description="Hubungi kami di SMK Negeri 2 Balikpapan" />
      <Layout>
        <BreadCrumb title="Kontak Kami" pageNow="Kontak" />
        <main className="px-4 md:px-0">
          <section className="relative py-14 max-w-7xl mx-auto">
            <h1 className="text-center text-secondary font-semibold text-3xl py-4">Kontak Kami</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Hubungi Kami</h2>
                <p className="mb-4 text-gray-700">
                  Jika Anda memiliki pertanyaan atau membutuhkan informasi lebih lanjut, jangan ragu untuk menghubungi kami. Kami siap membantu!
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <i className="fas fa-map-marker-alt text-primary mr-2"></i>
                    <span>Jl. MT Haryono No. 1, Balikpapan, Indonesia</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-phone-alt text-primary mr-2"></i>
                    <span>(0542) 123-456</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-envelope text-primary mr-2"></i>
                    <span>contact@smknegeri2bpp.sch.id</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Kirimkan Pesan</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                      Nama
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="message">
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-accent text-background py-2 px-6 rounded-md shadow-lg hover:scale-110 duration-300"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </section>
          <section className="py-14 max-w-7xl mx-auto">
            <h1 className="text-center text-secondary font-semibold text-3xl py-4">Lokasi Kami</h1>
            <div className="relative h-96">
              <iframe
                title="Peta"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.568626947135!2d116.8440571!3d-1.2345632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df148c944618985%3A0x6e5c97bc73558481!2sSchool%20SMK%20Negeri%202%20Balikpapan!5e0!3m2!1sen!2sid!4v1725119662126!5m2!1sen!2sid"
                className="absolute inset-0 w-full h-full border-none"
                loading="lazy"
              ></iframe>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
