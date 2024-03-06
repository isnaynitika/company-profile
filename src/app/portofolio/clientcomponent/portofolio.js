"use client";

import Footer1 from "../../../components/Footer";
import ItemWork from "../../../components/DataWork";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import Animation from "../../../components/Animation";
import Pagination from "../../../utils/pagination";

const PortofolioComponent = ({ listporto }) => {
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [currentItems, setCurrentItems] = useState([]);
  const [indexOfFirstItem, setFirst] = useState([]);
  const [indexOfLastItem, setLast] = useState([]);
  const totalItems = listporto.data.attributes.list_portofolios.data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const mainsection = listporto.data.attributes.main_section;
  const portofoliosection = listporto.data.attributes.portofolio_section;
  const countsection = listporto.data.attributes.count_section;
  const listportofolio = listporto.data.attributes.list_portofolios;

  useEffect(() => {
    if (listportofolio && listportofolio.data) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const itemsToDisplay = listportofolio.data.slice(indexOfFirstItem, indexOfLastItem);
      setFirst(indexOfFirstItem);
      setLast(indexOfLastItem);
      setCurrentItems(itemsToDisplay);
    }
  }, [listportofolio, currentPage]);

  const handlePageChange = (page) => {
    scrollTo({
      behavior: "instant",
      top: 600,
    });
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <Animation>
        <section className="w-full h-[full]">
          <div className="flex flex-col">
            <div className="h-[500px] md:h-[480px] bg-gradient-to-r from-red-500 to-red-800 z-[5] flex justify-center">
              <div className="py-8 max-w-7xl">
                <div className="flex flex-col gap-y-2 mt-5 md:mt-10 px-[5%]">
                  <div className="flex flex-row gap-x-1">
                    <div className="font-normal text-xs sm:text-md md:text-lg text-white">
                      {mainsection.judul_path}
                    </div>
                  </div>
                  <div className="font-semibold text-md sm:text-lg md:text-2xl text-white">
                    {mainsection.subjudul}
                  </div>
                  <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl text-white">
                    {mainsection.judul_utama}
                  </div>
                  <div className="font-normal text-sm sm:text-md md:text-lg text-white text-justify">
                    {mainsection.deskripsi}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center  h-[10rem] px-[5%]">
              <div className="flex max-w-7xl px-4">
                <div className="-mt-44 border bg-white rounded-xl md:py-8  shadow-md p-4 gap-y-2 min-h-0 z-[6] self-center">
                  <div className="grid grid-cols-1 sm:grid sm:grid-cols-3">
                    <div className="grid grid-cols-2 p-3 px-10 sm:flex sm:flex-row sm:flex-wrap xl:px-7 gap-x-6 md:gap-x-10">
                      <div className="text-gray-600 font-bold text-lg lg:text-4xl self-center">
                        {countsection.count1}
                      </div>
                      <div className="text-gray-400 font-normal text-sm self-center lg:text-xl">
                        {countsection.deskripsi1}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 p-3 px-10 sm:flex sm:flex-row sm:flex-wrap xl:px-7 gap-x-6 md:gap-x-10">
                      <div className="text-gray-600 font-bold text-lg lg:text-4xl self-center">
                        {countsection.count2}
                      </div>
                      <div className="text-gray-400 font-normal text-sm self-center lg:text-xl">
                        {countsection.deskripsi2}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 p-3 px-10 sm:flex sm:flex-row sm:flex-wrap xl:px-7 gap-x-6 md:gap-x-10">
                      <div className="text-gray-600 font-bold text-lg lg:text-4xl self-center">
                        {countsection.count3}
                      </div>
                      <div className="text-gray-400 font-normal text-sm self-center lg:text-xl">
                        {countsection.deskripsi3}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[5%] z-10 -mt-10">
          <div className="flex flex-col text-center mb-5">
            <div className="text-md lg:text-lg font-medium text-red-500 ">
              {portofoliosection.subjudul}
            </div>
            <div className="text-lg lg:text-4xl font-medium text-black mb-5">
              {portofoliosection.judul_utama}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="max-w-7xl">
              <div className="lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 gap-5  lg:px-[5%] ">
                {currentItems.map((item, index) => (
                  <div key={item.id}>
                    {item.attributes.gambar_utama.data == null ? (
                      <ItemWork
                        gambarporto="../../noimg.svg"
                        judulporto={item.attributes.nama_aplikasi}
                        perusahaan={item.attributes.perusahaan}
                        slug={item.attributes.slug}
                        index={index}
                      />
                    ) : (
                      <ItemWork
                        gambarporto={`${imageurl}${item.attributes.gambar_utama.data.attributes.url}`}
                        judulporto={item.attributes.nama_aplikasi}
                        perusahaan={item.attributes.perusahaan}
                        slug={item.attributes.slug}
                        index={index}
                      />
                    )}
                  </div>
                ))}
              </div>
              {listportofolio.data.length > itemsPerPage && (
                <div className="mt-4 flex justify-center items-center text-center gap-4">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
        <div className="">
          <Footer1 />
        </div>
      </Animation>
    </div>
  );
};

export default PortofolioComponent;
