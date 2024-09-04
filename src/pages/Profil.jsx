import React from "react";
import { Seo } from "../components/Seo.jsx";
import Layout from "../components/Layout.jsx";
import { Link } from "react-router-dom";
import exam from '../assets/images/exam1.jpeg';
import exam2 from '../assets/images/foto2.png';
import cn from "../lib/utils/cn.jsx";
import BreadCrumb from "../components/BreadCrumb.jsx";

const structure = [
  {
    jabatan: "Wakil Kepala BKK",
    nama: "Nama Wakil Kepala BKK",
    img: exam2,
    color: "bg-accent"

  },
  {
    jabatan: "Kepala BKK",
    nama: "Nama Kepala BKK",
    img: exam2,
    color: "bg-primary"

  },
  {
    jabatan: "Sekretaris",
    nama: "Nama Sekretaris",
    img: exam2,
    color: "bg-accent"
  }
]

export default function Profil() {
  return (
    <>
      <Seo title="Profil" description="This is the lowongan page" />
      <Layout>
        <main className="">
          <BreadCrumb title="Profil BKK" pageNow='Profil'></BreadCrumb>
          <section className="relative">
            <img className="min-w-full h-[30rem] overflow-hidden object-cover rounded-tr-[15rem]" src={exam} alt="" />
            <div className="absolute inset-x-[15%] -bottom-1/4">
              <div className="w-2/3 text-background bg-accent rounded-br-[10rem] px-10 py-8">
                <p className="w-3/4 text-background">Lo rem ipsum dolor sit amet consectetur adipisicing elit. Quisquam pariatur obcaecati aut voluptate in quam hic illum atque nesciunt impedit ipsam dolor iure commodi voluptatum dolore omnis, ipsum vitae temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia at, consequuntur nulla iure numquam facere exercitationem fugiat quos aliquid eligendi nemo, inventore voluptas iste quas eos obcaecati ipsum tenetur est praesentium suscipit totam laudantium! Aliquam autem perspiciatis delectus hic recusandae maiores architecto quisquam iusto nesciunt eaque. Cupiditate odit nisi nulla.</p>
              </div>
            </div>
          </section>
          <section className="py-72 max-w-7xl mx-auto">
            <div className="grid grid-cols-2">
              <div className="shadow-xl text-text px-10 py-16">
                <h1 className="text-4xl font-semibold text-accent mb-5">Tugas</h1>
                <p className="l">Tugas pokok dan fungsi serta struktur organisasi Institut Teknologi Kalimantan tertuang dalam Peraturan Menteri Riset, Teknologi dan Pendidikan Tinggi Republik Indonesia Nomor 40 Tahun 2015 tentang Organisasi dan Tata Kerja Institut Teknologi Kalimantan. Tugas pokok Institut Teknologi Kalimantan adalah menyelenggarakan pendidikan akademik dan dapat menyelenggarakan pendidikan vokasi dalam sejumlah rumpun ilmu pengetahuan dan teknologi dan jika memenuhi syarat dapat menyelenggarakan pendidikan profesi.</p>
              </div>
              <div className=" text-background shadow-xl px-10 py-16 bg-accent">
                <h1 className="text-4xl font-semibold  mb-5">Fungsi</h1>
                <p className="">Tugas pokok dan fungsi serta struktur organisasi Institut Teknologi Kalimantan tertuang dalam Peraturan Menteri Riset, Teknologi dan Pendidikan Tinggi Republik Indonesia Nomor 40 Tahun 2015 tentang Organisasi dan Tata Kerja Institut Teknologi Kalimantan. Tugas pokok Institut Teknologi Kalimantan adalah menyelenggarakan pendidikan akademik dan dapat menyelenggarakan pendidikan vokasi dalam sejumlah rumpun ilmu pengetahuan dan teknologi dan jika memenuhi syarat dapat menyelenggarakan pendidikan profesi.</p>
              </div>
            </div>
          </section>
          <section className="py-5">
            <h1 className="text-center text-secondary font-semibold text-2xl py-4">Struktur BKK</h1>
            <div className="grid grid-cols-3">
              {structure.map((item, index) => (
                <div key={index} className={cn("gap-2 overflow-hidden ", item.color)}>
                  <div className="relative max-h-[30rem] flex flex-col items-center ">
                    <img className="object-cover opacity-50" src={item.img} alt="" />
                    <div className="absolute bottom-5 text-white font-medium text-xl opacity-100">
                      <h1 className="text-center">{item.jabatan}</h1>
                      <p>{item.nama}</p>
                    </div>
                  </div>
                </div>
              ))}

            </div>

          </section>
        </main>
      </Layout>
    </>
  );
}
