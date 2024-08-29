import React from "react";
import Icon from "../assets/icon/Icon.jsx";
import { Seo } from "../components/Seo.jsx";
import Layout from "../components/Layout.jsx";
import { Carousel } from "flowbite-react";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import exam1 from "../assets/images/foto1.png";
import exam2 from "../assets/images/foto2.png";
import exam3 from "../assets/images/foto3.png";
import exam4 from "../assets/images/foto4.png";
import useLoaded from "../hooks/useLoaded.jsx";
import clsx from "clsx";
import cn from "../lib/utils/cn.jsx";
import { Link } from "react-router-dom";
import News from "../components/News.jsx";
const image = [
  exam2,
  exam3,
  exam4,
];



export default function Home() {

  const isLoaded = useLoaded();

  return (
    <>
      <Seo title="Home" description="This is the home page" />
      <Layout>
        <main className="px-4 md:px-0">
          <section className="aspect-video w-full max-w-7xl mx-auto max-h-screen">
            <News></News>
            <div className={
              clsx(
                "flex h-full items-center ",
                isLoaded && 'fade-in-start'
              )}>

              <div className={clsx(
                "flex flex-col  gap-6 text-text",
                isLoaded && 'fade-in-start'
              )}>
                <h1 data-fade="3" className="font-normal text-xl tracking-wide md:text-4xl">Website</h1>
                <h2 data-fade="4" className="font-semibold text-2xl md:text-6xl  tracking-widest">BKK SMK Negeri 2 Balikpapan</h2>
                <div>
                  
                </div>
                <Carousel className="flex  md:hidden" data-fade="5" indicators={false} >
                {image.map((item, index) => (
                  <img key={index} className="drop-shadow-2xl shadow-black max-w-[40rem]" src={item} alt={`image-${index}`} />
                ))}
              </Carousel>

                <p data-fade="6" className="text-sm md:text-lg text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. At. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ducimus.</p>
                <div data-fade="8" className="flex gap-5">

                  <button className=" bg-accent py-1 px-4 md:px-12 md:py-3 text-background rounded-md shadow-lg hover:scale-110 duration-300 border-text border-2">
                    <Link to="/profil">
                      Profil BKK
                    </Link>
                  </button>
                  <button className="bg-primary py-1 px-4 md:px-12 md:py-3 text-text rounded-md shadow-lg hover:scale-110 duration-300 border-text border-2">
                    <Link to="/lowongan">
                      Lowongan Kerja
                    </Link>
                  </button>
                </div>
              </div>
              <div>
              </div>
              <Carousel className="hidden md:block" data-fade="5" indicators={false} >
                {image.map((item, index) => (
                  <img key={index} className="drop-shadow-2xl shadow-black max-w-[40rem]" src={item} alt={`image-${index}`} />
                ))}
              </Carousel>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
