"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import Footer2 from "../../../components/Footer2";
import { useState, useEffect } from "react";
import ItemPosition1 from "../../../components/DataPosition";
import Animation from "../../../components/Animation";

const CareerComponent = ({ careerdata }) => {
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const mainsection = careerdata.data.attributes.main_section;
  const sectionkarir = careerdata.data.attributes.carier_section;
  const karirlist = careerdata.data.attributes.list_karirs.data;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [currentItems, setCurrentItems] = useState([]);
  const [indexOfFirstItem, setFirst] = useState([]);
  const [indexOfLastItem, setLast] = useState([]);

  useEffect(() => {
    if (karirlist && karirlist) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const itemsToDisplay = karirlist.slice(indexOfFirstItem, indexOfLastItem);
      setFirst(indexOfFirstItem);
      setLast(indexOfLastItem);
      setCurrentItems(itemsToDisplay);
    }
  }, [karirlist, currentPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Animation>
        <section className="bg-gradient-to-r relative from-red-500 to-red-800 ">
          <div className="h-[370px] md:h-[350px] flex justify-center">
            <div className="py-8 max-w-7xl px-[5%]">
              <div className="flex flex-col gap-y-4 md:mt-8">
                <div className="flex flex-row gap-x-1">
                  <div className="font-normal text-sm md:text-lg text-white">
                    {mainsection.judul_path}
                  </div>
                </div>
                <div className="flex flex-col gap-3 lg:gap-8 lg:flex-row">
                  <div className="font-bold text-3xl md:text-2xl lg:text-5xl text-white">
                    {mainsection.judul_utama}
                  </div>
                  <div className="flex flex-row gap-3">
                    <div className="grid text-center items-center rounded-full bg-[#E6959B]">
                      <h2 className="text-xs lg:px-6 px-2 py-2 flex gap-1 font-medium text-white">
                        <span>
                          <FontAwesomeIcon icon={faStar} className=" text-[#FFC725]" />
                        </span>
                        Junior
                      </h2>
                    </div>
                    <div className="grid text-center items-center rounded-full bg-[#E6959B]">
                      <h2 className="text-xs lg:px-6 px-2 py-2 flex gap-1 font-medium text-white">
                        <span>
                          <FontAwesomeIcon icon={faStar} className=" text-[#FFC725]" />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} className=" text-[#FFC725]" />
                        </span>
                        Middle
                      </h2>
                    </div>
                    <div className="grid text-center items-center rounded-full bg-[#E6959B]">
                      <h2 className="text-xs px-2 lg:px-6 py-2 flex gap-1 font-medium text-white">
                        <span>
                          <FontAwesomeIcon icon={faStar} className=" text-[#FFC725]" />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} className=" text-[#FFC725]" />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} className=" text-[#FFC725]" />
                        </span>
                        Senior
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="font-light text-sm md:text-md lg:text-lg text-white text-justify ">
                  {mainsection.deskripsi}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="mt-8">
            <div className="flex flex-col text-center gap-5 mb-5">
              <div className="text-md lg:text-lg font-medium text-red-500 ">
                {sectionkarir.subjudul}
              </div>
              <div className="text-lg lg:text-4xl font-medium text-black mb-5">
                {sectionkarir.judul_utama}
              </div>
            </div>
          </div>
          <div className="px-[4%] flex justify-center ">
            <div className="max-w-7xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mx-20">
                {currentItems.map((item, index) => (
                  <ItemPosition1
                    key={item.id}
                    image={
                      item.attributes.icon.data
                        ? `${imageurl}${item.attributes.icon.data.attributes.url}`
                        : "../../noimg.svg"
                    }
                    text={item.attributes.posisi}
                    index={index}
                  />
                ))}
              </div>
              {karirlist.length > itemsPerPage && (
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
                    disabled={indexOfLastItem >= karirlist.length}
                    className="mr-2 px-4 py-2    disabled:opacity-60 border border-red-500"
                  >
                    <FontAwesomeIcon icon={faChevronRight} className="text-red-500 text-bold" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </Animation>
    </div>
  );
};

export default CareerComponent;
