"use client";

import Footer1 from "../../../components/Footer";
import Animation from "../../../components/Animation";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import ItemProduk from "../../../components/DataProduk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState, useEffect } from "react";

const ProdukComponent = ({ produkdata }) => {
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [currentItems, setCurrentItems] = useState([]);
  const [indexOfFirstItem, setFirst] = useState([]);
  const [indexOfLastItem, setLast] = useState([]);

  const headerpath = produkdata.data.attributes;
  const listproduk = produkdata.data.attributes.list_produks.data;

  useEffect(() => {
    if (listproduk && listproduk) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const itemsToDisplay = listproduk.slice(indexOfFirstItem, indexOfLastItem);
      setFirst(indexOfFirstItem);
      setLast(indexOfLastItem);
      setCurrentItems(itemsToDisplay);
    }
  }, [listproduk, currentPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Animation className="">
        <section className="">
          <div className="h-[90px] bg-gradient-to-r from-red-500 to-red-800 ">
            <div className="py-8 px-[5%] md:px-[10%]">
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-row gap-x-1">
                  <div className="font-normal text-md md:text-lg text-white">
                    {headerpath.judul_path}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full md:min-h-[70rem] mt-20">
            <div>
              <div className=" flex items-center justify-center mb-20">
                <div className="grid grid-cols-1 gap-4">
                  {currentItems.map((item, index) => (
                    <ItemProduk
                      key={item.id}
                      gambarproduk={
                        item.attributes.gambar_produk.data
                          ? `${imageurl}${item.attributes.gambar_produk.data.attributes.url}`
                          : "../../../noimg.svg"
                      }
                      nama={item.attributes.nama_produk}
                      deskripsi={item.attributes.deskripsi}
                      linkproduk={item.attributes.url}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {listproduk.length > itemsPerPage && (
            <div className="mt-4 flex justify-center items-center text-center gap-4">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="mr-2 px-4 py-2    disabled:opacity-60 border border-red-500"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="text-red-500 text-bold" />
              </button>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastItem >= listproduk.length}
                className="mr-2 px-4 py-2    disabled:opacity-60 border border-red-500"
              >
                <FontAwesomeIcon icon={faChevronRight} className="text-red-500 text-bold" />
              </button>
            </div>
          )}
        </section>
        <div className="mt-[4rem] md:mt-[2%]">
          <Footer1 />
        </div>
      </Animation>
    </div>
  );
};
export default ProdukComponent;
