"use client";
import { useState, useEffect } from "react";
import Animation from "../../../../components/Animation";
import ItemPrincipal from "../../../../components/DataPrincipal";
import Footer2 from "../../../../components/Footer2";
import ItemCommercials from "../../../../components/Commercials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const PrincipalComponent = ({ principaldata }) => {
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;

  const mainsection = principaldata.data.attributes.main_section;
  const principalsection = principaldata.data.attributes.principal_section;
  const listprincipal = principaldata.data.attributes.principal_section.list_principals.data;
  const commercialsection = principaldata.data.attributes.commercials_section;
  const listcommercial = principaldata.data.attributes.commercials_section.list_commercials.data;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [currentItems, setCurrentItems] = useState([]);
  const [indexOfFirstItem, setFirst] = useState([]);
  const [indexOfLastItem, setLast] = useState([]);

  useEffect(() => {
    if (listcommercial && listcommercial) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const itemsToDisplay = listcommercial.slice(indexOfFirstItem, indexOfLastItem);
      setFirst(indexOfFirstItem);
      setLast(indexOfLastItem);
      setCurrentItems(itemsToDisplay);
    }
  }, [listcommercial, currentPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Animation>
        <section className="h-full md:py-5 relative">
          <div className="flex flex-wrap flex-col gap-y-6 sm:flex sm:flex-col sm:gap-y-8 px-4 py-1 relative z-20 md:px-16 xl:px-44 md:grid md:grid-cols-2 md:gap-x-14 md:mt-10">
            <div className="flex flex-col gap-y-2 md:gap-y-5 sm:flex-col animate-delay-300 animate-fade-right animate-once animate-duration-[800ms] animate-ease-in mt-7">
              <div className="bg-gray-100 text-xs md:w-80 font-semibold self-start p-2 rounded-lg md:text-md">
                {mainsection.judul_path}
              </div>
              <p className="text-lg font-semibold md:text-2xl text-white lg:text-gray-800">
                {mainsection.subjudul}
              </p>
              <p className="text-2xl font-semibold text-white lg:bg-clip-text lg:text-transparent lg:bg-gradient-to-r lg:from-red-600 lg:to-gray-800 md:text-4xl">
                {mainsection.judul_utama}
              </p>
              <div className="bg-white rounded-xl drop-shadow-2xl p-5 md:p-10 mb-3 lg:mt-5">
                <p className="font-semibold text-lg md:text-xl md:mb-2">{mainsection.caption}</p>
                <p className="text-justify md:text-lg">{mainsection.deskripsi}</p>
              </div>
              <div className="bg-white rounded-xl drop-shadow-2xl p-5 grid grid-cols-2 gap-x-4 md:p-10 ">
                <div className="grid grid-rows-2 md:flex md:self-center md:flex-col">
                  <p className="text-3xl font-medium ">{mainsection.count1}</p>
                  <p className="text-md font-normal">{mainsection.deskripsi1}</p>
                </div>
                <div className="grid grid-rows-2 md:flex md:self-center md:flex-col">
                  <p className="text-3xl font-medium ">{mainsection.count2}</p>
                  <p className="text-md font-normal">{mainsection.deskripsi2}</p>
                </div>
              </div>
            </div>
            <div className="h-full flex flex-col gap-y-5 md:flex-col-reverse md:flex-auto md:self-start flex-auto lg:self-end animate-delay-500 animate-fade-left animate-once animate-duration-[800ms] animate-ease-in">
              <div className="h-full">
                <Image
                  src={
                    mainsection.gambar.data
                      ? `${imageurl}${mainsection.gambar.data.attributes.url}`
                      : "../../../noimg.svg"
                  }
                  className="object-cover rounded-xl shadow-md md:h-[23.1rem]"
                  alt=""
                  priority={true}
                  width={500}
                  height={500}
                  style={{ width: "1000px", height: "23.1rem", objectFit: "cover" }}
                />
              </div>
              <div className="h-full">
                <p className="md:text-white lg:text-gray-800">{mainsection.kalimat_principal}</p>
                <button className="bg-red-500 py-2 px-5 text-sm font-normal text-white rounded-full mt-4">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="bg-red-500 h-48 md:h-80 absolute top-0 lg:top-96 w-full bg-gradient-to-r from-red-500 to-red-800 z-10"></div>
        </section>
        <section className="h-full md:py-5 relative lg:mt-6 xl:mt-10">
          <div className="md:px-16 xl:px-44 px-4 gap-y-2 md:gap-y-4 flex flex-col mt-7">
            <p className="text-lg md:text-xl font-semibold text-red-500">
              {principalsection.subjudul}
            </p>
            <p className="text-xl md:text-3xl font-semibold ">{principalsection.judul_utama}</p>
            <p className="leading-7 text-justify">{principalsection.deskripsi}</p>
          </div>
          <div className="px-[4%] md:px-[5%]">
            <div className="flex flex-wrap justify-center">
              {listprincipal.map((item, index) => (
                <ItemPrincipal
                  key={item.id}
                  gambar={
                    item.attributes.icon.data
                      ? `${imageurl}${item.attributes.icon.data.attributes.url}`
                      : "../../../noimg.svg"
                  }
                  judul={item.attributes.judul}
                  deskripsi={item.attributes.deskripsi}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="bg-white ">
          <div className="py-6 md:px-16 lg:px-20 px-4 mx-auto max-w-screen-2xl lg:py-10 ">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <p className="mb-4 text-xl font-semibold text-red-500 ">
                {commercialsection.subjudul}
              </p>
              <p className="mb-5 font-semibold text-xl md:text-3xl ">
                {commercialsection.judul_utama}
              </p>
            </div>
            <div className="flex justify-center">
              {listcommercial.length > itemsPerPage && (
                <div className="xl:flex justify-center items-center text-center p-4 hidden">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="mr-2 px-4 py-2  disabled:opacity-50 "
                  >
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className="text-red-500 text-bold text-2xl"
                    />
                  </button>
                </div>
              )}

              <div className="flex flex-col xl:min-w-[67rem]">
                <div className=" flex flex-wrap justify-center gap-y-4 md:gap-7">
                  {currentItems.map((item, index) => (
                    <ItemCommercials
                      key={item.id}
                      itemicon={
                        item.attributes.icon.data
                          ? `${imageurl}${item.attributes.icon.data.attributes.url}`
                          : "../../../noimg.svg"
                      }
                      itemjudul={item.attributes.judul}
                      itemsubjudul={item.attributes.subjudul}
                      produk={item.attributes.nama_produk}
                      listitem={item.attributes.list_commercial_fiturs.data.map((itemfitur) => (
                        <div key={itemfitur.id}>
                          <li className="flex items-center space-x-3">
                            <p className="md:text-md lg:text-lg text-xs font-light self-baseline">
                              <FontAwesomeIcon icon={faCheckCircle} className=" text-green-500 " />
                            </p>
                            <span>{itemfitur.attributes.fitur}</span>
                          </li>
                        </div>
                      ))}
                      index={index}
                    />
                  ))}
                </div>
                {listcommercial.length > itemsPerPage && (
                  <div className="mt-4 flex justify-center items-center text-center gap-4 xl:hidden">
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="mr-2 px-4 py-2    disabled:opacity-60 border border-red-500"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} className="text-red-500 text-bold" />
                    </button>
                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={indexOfLastItem >= listcommercial?.length}
                      className="mr-2 px-4 py-2    disabled:opacity-60 border border-red-500"
                    >
                      <FontAwesomeIcon icon={faChevronRight} className="text-red-500 text-bold" />
                    </button>
                  </div>
                )}
              </div>
              {listcommercial.length > itemsPerPage && (
                <div className="hidden xl:flex justify-center items-center text-center p-4">
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={indexOfLastItem >= listcommercial?.length}
                    className="mr-2 px-4 py-2  disabled:opacity-50 "
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-red-500 text-bold text-2xl"
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
        <Footer2 />
      </Animation>
    </div>
  );
};
export default PrincipalComponent;
