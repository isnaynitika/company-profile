"use client";

import Footer1 from "../../../components/Footer";
import Animation from "../../../components/Animation";
import ItemProduk from "../../../components/DataProduk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchComponent from "../../../components/Search";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const ProdukComponent = ({ produkdata }) => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;

  const [searchResults, setSearchResults] = useState([]);
  const [searchActive, setSearchActive] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [currentItems, setCurrentItems] = useState([]);
  const [indexOfFirstItem, setFirst] = useState([]);
  const [indexOfLastItem, setLast] = useState([]);
  const totalItems = produkdata.data.attributes.list_produks.data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPageresult, setCurrentPageresult] = useState(1);
  const itemsPerPageresult = 4;
  const [currentItemsresult, setCurrentItemsresult] = useState([]);
  const [indexOfFirstItemresult, setFirstresult] = useState([]);
  const [indexOfLastItemresult, setLastresult] = useState([]);
  const totalItemsresult = searchResults.length;
  const totalPagesresult = Math.ceil(totalItemsresult / itemsPerPageresult);

  const headerpath = produkdata.data.attributes;
  const listproduk = produkdata.data.attributes.list_produks.data;

  const handleSearch = async (query) => {
    if (query == "") {
      setSearchActive(false);
    } else {
      const response = await fetch(
        `${url}/list-produks?populate=gambar_produk.media&filters[nama_produk][$contains]=${query}&sort[0]=createdAt:desc`
      );
      const hasil = await response.json();
      setSearchResults(hasil.data);
      setSearchActive(true);
    }
  };

  useEffect(() => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
    if (searchActive) {
      if (searchResults && searchResults) {
        const indexOfLastItemresult = currentPageresult * itemsPerPageresult;
        const indexOfFirstItemresult = indexOfLastItemresult - itemsPerPageresult;
        const itemsToDisplayresult = searchResults.slice(
          indexOfFirstItemresult,
          indexOfLastItemresult
        );
        setFirstresult(indexOfFirstItemresult);
        setLastresult(indexOfLastItemresult);
        setCurrentItemsresult(itemsToDisplayresult);
      }
    } else {
      if (listproduk && listproduk) {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const itemsToDisplay = listproduk.slice(indexOfFirstItem, indexOfLastItem);
        setFirst(indexOfFirstItem);
        setLast(indexOfLastItem);
        setCurrentItems(itemsToDisplay);
      }
    }
  }, [listproduk, currentPage, searchActive, searchResults, currentPageresult]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginateresult = (pageNumberresult) => setCurrentPageresult(pageNumberresult);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 3;

    if (totalPages > maxPagesToShow) {
      let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
      let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

      if (endPage - startPage < maxPagesToShow - 1) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }

      if (startPage > 1) {
        pageNumbers.push(
          <button key={1} onClick={() => handlePageChange(1)} className="px-4 py-2 text-red-500">
            1
          </button>
        );
        if (startPage > 2) {
          pageNumbers.push(
            <span key="ellipsis1" className="text-red-500">
              ...
            </span>
          );
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            disabled={currentPage === i}
            className={`${
              currentPage === i
                ? "bg-red-500 text-white font-semibold rounded-md mr-2 px-4 py-2"
                : ""
            } px-4 py-2 text-red-500  `}
          >
            {i}
          </button>
        );
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push(
            <span key="ellipsis2" className="text-red-500">
              ...
            </span>
          );
        }
        pageNumbers.push(
          <button
            key={totalPages}
            onClick={() => handlePageChange(totalPages)}
            className="px-4 py-2 text-red-500"
          >
            {totalPages}
          </button>
        );
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            disabled={currentPage === i}
            className={`${
              currentPage === i
                ? "bg-red-500 text-white font-semibold rounded-md mr-2 px-4 py-2"
                : ""
            } px-4 py-2 text-red-500  `}
          >
            {i}
          </button>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div>
      <Animation className="">
        <div className="h-fit">
          <div className="h-[90px] bg-gradient-to-r from-red-500 to-red-800 ">
            <div className="py-8 px-[5%] md:px-[10%]">
              <div className="mx-auto flex items-center justify-between">
                <div className="hidden lg:flex flex-row gap-x-1">
                  <div className="font-normal text-md md:text-lg text-white">
                    {headerpath.judul_path}
                  </div>
                </div>
                <SearchComponent onSearch={handleSearch} />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className=" flex items-center justify-center mb-20">
              <div className="grid grid-cols-1 gap-4">
                {searchActive ? (
                  <div>
                    {searchResults.length == 0 ? (
                      <div className="min-h-[28rem] flex justify-center items-center">
                        <section className="bg-white animate-fade-up animate-once animate-duration-[800ms] animate-delay-200 animate-ease-in">
                          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                            <div className="mx-auto max-w-screen-sm text-center">
                              <h1 className="mb-4 text-3xl tracking-tight font-extrabold lg:text-5xl text-red-600 ">
                                Maaf
                              </h1>
                              <p className="mb-4 text-2xl tracking-tight font-bold text-gray-900 md:text-3xl ">
                                Produk Tidak Ditemukan
                              </p>
                              <p className="mb-4 text-lg font-light text-gray-500 ">
                                Anda bisa mencari produk kami yang lain
                              </p>
                            </div>
                          </div>
                        </section>
                      </div>
                    ) : (
                      <div>
                        {currentItemsresult.map((item, index) => (
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
                    )}
                  </div>
                ) : (
                  <div>
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
                )}
              </div>
            </div>
            {searchActive ? (
              <div>
                {searchResults.length > itemsPerPageresult && (
                  <div className="mt-4 flex justify-center items-center text-center gap-4">
                    <button
                      onClick={() => paginateresult(currentPageresult - 1)}
                      disabled={currentPageresult === 1}
                      className="mr-2 px-4 py-2    disabled:opacity-60 border border-red-500"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} className="text-red-500 text-bold" />
                    </button>
                    <button
                      onClick={() => paginateresult(currentPageresult + 1)}
                      disabled={currentPageresult === totalPagesresult}
                      className="mr-2 px-4 py-2    disabled:opacity-60 border border-red-500"
                    >
                      <FontAwesomeIcon icon={faChevronRight} className="text-red-500 text-bold" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div>
                {listproduk.length > itemsPerPage && (
                  <div className="mt-4 flex justify-center items-center text-center gap-4">
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2    disabled:opacity-60 "
                    >
                      <FontAwesomeIcon icon={faChevronLeft} className="text-red-500 text-bold" />
                    </button>
                    {renderPageNumbers()}
                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2    disabled:opacity-60 "
                    >
                      <FontAwesomeIcon icon={faChevronRight} className="text-red-500 text-bold" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="mt-[4rem] md:mt-[2%]">
          <Footer1 />
        </div>
      </Animation>
    </div>
  );
};
export default ProdukComponent;
