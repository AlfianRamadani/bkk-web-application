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
import { useQuery } from "react-query";
import { BaseApi } from "../lib/utils/BaseApi.jsx";
// import { useFilters } from "react-table";

const image = [
  exam2,
  exam3,
  exam4,
];



export default function Home() {

  const fetchCount = async () => {
    const response = await BaseApi.get('/count');
    return response.data;
  }
  const { data: countData, isLoading: countLoading } = useQuery({
    queryKey: ['Count'],
    queryFn: fetchCount,
    refetchOnWindowFocus: true,
  })
  const fetchIndustry = async () => {
    const response = await BaseApi.get('/industry');
    return response.data;
  }
  const { data: industryData } = useQuery({
    queryKey: ['Industry'],
    queryFn: fetchIndustry,
    refetchOnWindowFocus: true,
  })

  const fetchCompany = async () => {
    const response = await BaseApi.get('/top-company');
    return response.data;
  }
  const { data: companyData, isLoading, isError } = useQuery({
    queryKey: ['Company'],
    queryFn: fetchCompany,
    refetchOnWindowFocus: true,
  })

  const isLoaded = useLoaded();

  
  return (
    <>
      <Seo title="Home" description="This is the home page" />
      <Layout>
        <main className="px-4 md:px-0">
          <section className="aspect-video w-full max-w-7xl mx-auto min-h-screen md:max-h-screen md:min-h-0">
            <News></News>
            <div className={
              clsx(
                "flex h-full items-center md:py-5",
                isLoaded && 'fade-in-start'
              )}>

              <div className={clsx(
                "flex flex-col gap-2 md:gap-6 text-text",
                isLoaded && 'fade-in-start'
              )}>
                <h1 data-fade="3" className="font-normal text-xl tracking-wide md:text-4xl">Website</h1>
                <h2 data-fade="4" className="font-semibold text-2xl md:text-6xl  tracking-widest">BKK SMK Negeri 2 Balikpapan</h2>
                <Carousel className="md:hidden   min-h-full h-[25rem]  min-w-full " data-fade="5" indicators={false} >
                {image.map((item, index) => (
                  <img key={index} className="drop-shadow-2xl shadow-black w-full h-full object-cover" src={item} alt={`image-${index}`} />
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
          Filter
          <section className="max-w-7xl mx-auto space-y-2 py-14">
            <h1 className="font-medium text-3xl ">Top Company</h1>
            <p className="font-medium text-lg text-slate-500">Explore company profiles to find the right workplace for you. Learn about jobs, reviews, company culture, perks and benefits.</p>
            <div className="flex gap-5 py-10 overflow-auto">
              {
                companyData?.data?.map((item, index) => (

                  <Link className="flex flex-col gap-2 bg-white rounded-xl shadow-lg p-6 min-w-52 max-h-72" key={index} to={'/lowongan?search=' + item.company_name}>
                    <img
                      className="w-full max-h-24 rounded-lg object-fit"
                      src="https://via.placeholder.com/640x480.png/000033?text=quis"
                      alt={item.company_name}
                      loading="lazy"
                    />
                    <div className="flex flex-col h-full">

                      <p className="font-medium mb-5">{item.company_name}</p>
                      <p className="flex mt-auto  bg-slate-300 text-gray-600">
                        {item.vacancy_count} Jobs
                      </p>
                    </div>
                  </Link>

                ))
              }
            </div>
          </section>
          <section className="max-w-7xl mx-auto space-y-2 py-14">
            <h1 className="font-medium text-3xl ">Top Industry</h1>
            <p className="font-medium text-lg text-slate-500">Explore company profiles to find the right workplace for you. Learn about jobs, reviews, company culture, perks and benefits.</p>
            <div className="flex gap-5 py-10 overflow-auto">
              {
                industryData?.data?.map((item, index) => (

                  <Link className="flex flex-col gap-2 bg-white rounded-xl shadow-lg p-6 min-w-52 max-h-72" key={index} to={'/lowongan?search=' + item.name}>
                    <div className="flex flex-col h-full">

                      <p className="font-medium mb-5">{item.name}</p>
                      <p className="flex mt-auto  bg-slate-300 text-gray-600">
                        {item.vacancy_count} Jobs
                      </p>
                    </div>
                  </Link>

                ))
              }
            </div>
          </section>
          <section className="max-w-7xl mx-auto space-y-2 py-14">
            <h1 className="font-medium text-3xl ">Data</h1>
            <p className="font-medium text-lg text-slate-500">Explore company profiles to find the right workplace for you. Learn about jobs, reviews, company culture, perks and benefits.</p>
            <div className="flex gap-5 py-10 overflow-auto">
              {
                countData?.data &&
                Object.entries(countData?.data).forEach(([key, value]) => (
                  <Link className="flex flex-col gap-2 bg-white rounded-xl shadow-lg p-6 min-w-52 max-h-72" key={key} to={'/lowongan?search=' + key}>
                    <div className="flex flex-col h-full">
                      <p className="font-medium mb-5">{key}</p>
                      <p className="flex mt-auto  bg-slate-300 text-gray-600">
                        {value}
                      </p>
                    </div>
                  </Link>
                )



                )
                
                }

            </div>
          </section>

        </main>
      </Layout>
    </>
  );
}
