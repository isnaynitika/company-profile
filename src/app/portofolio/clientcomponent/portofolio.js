"use client";

import Footer1 from "../../../components/Footer";
import ItemWork from "../../../components/DataWork";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import Animation from "../../../components/Animation";

const PortofolioComponent = ({ listporto }) => {
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [currentItems, setCurrentItems] = useState([]);
  const [indexOfFirstItem, setFirst] = useState([]);
  const [indexOfLastItem, setLast] = useState([]);

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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Animation>
        <section className="w-full h-[full]">
          <div className="grid grid-rows-2 relative">
            <div className="h-[500px] md:h-[480px] bg-gradient-to-r from-red-500 to-red-800 z-[5]">
              <div className="py-8 px-[5%] md:px-[10%]">
                <div className="flex flex-col gap-y-4 md:mt-10">
                  <div className="flex flex-row gap-x-1">
                    <div className="font-normal text-sm md:text-lg text-white">
                      {mainsection.judul_path}
                    </div>
                  </div>
                  <div className="font-semibold text-xl md:text-2xl text-white">
                    {mainsection.subjudul}
                  </div>
                  <div className="font-bold text-2xl md:text-2xl lg:text-4xl text-white">
                    {mainsection.judul_utama}
                  </div>
                  <div className="font-normal text-sm md:text-lg text-white text-justify">
                    {mainsection.deskripsi}
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[10%] z-[15] bg-transparant absolute self-center justify-self-center ">
              <div className="mt-36 py-8 px-[5%]">
                <div className="flex flex-col text-center mb-5">
                  <div className="text-md lg:text-lg font-medium text-red-500 ">
                    {portofoliosection.subjudul}
                  </div>
                  <div className="text-lg lg:text-4xl font-medium text-black mb-5">
                    {portofoliosection.judul_utama}
                  </div>
                </div>
                <div>
                  <div>
                    <div className="lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 md:px-[5%]">
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
                        <button
                          onClick={() => paginate(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="mr-2 px-4 py-2    disabled:opacity-60 border border-red-500"
                        >
                          <FontAwesomeIcon
                            icon={faChevronLeft}
                            className="text-red-500 text-bold"
                          />
                        </button>
                        <button
                          onClick={() => paginate(currentPage + 1)}
                          disabled={indexOfLastItem >= listportofolio.data.length}
                          className="mr-2 px-4 py-2    disabled:opacity-60 border border-red-500"
                        >
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className="text-red-500 text-bold"
                          />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="">
                <Footer1 />
              </div>
            </div>
            <div className="bg-transparant absolute top-0 left-0 w-full h-full flex items-center justify-center md:px-8 lg:px-16">
              <div className="flex justify-center w-full px-[5%] md:px-[6%]">
                <div className="border bg-white rounded-3xl shadow-md w-screen flex flex-col p-5 gap-y-3 min-h-0 z-[6]">
                  <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x-2 md:divide-y-0">
                    <div className="p-3 grid grid-cols-2 md:flex-row md:flex md:gap-x-4 md:justify-center md:py-8">
                      <div className="text-gray-600 font-bold text-lg lg:text-4xl self-center">
                        {countsection.count1}
                      </div>
                      <div className="text-gray-400 font-normal text-sm self-center lg:text-xl">
                        {countsection.deskripsi1}
                      </div>
                    </div>
                    <div className="p-3 grid grid-cols-2 md:flex-row md:flex md:gap-x-4 md:justify-center">
                      <div className="text-gray-600 font-bold text-lg lg:text-4xl self-center">
                        {countsection.count2}
                      </div>
                      <div className="text-gray-400 font-normal text-sm self-center lg:text-xl">
                        {countsection.deskripsi2}
                      </div>
                    </div>
                    <div className="p-3 grid grid-cols-2 md:flex-row md:flex md:gap-x-4 md:justify-center">
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
      </Animation>
    </div>
  );
};

export default PortofolioComponent;
