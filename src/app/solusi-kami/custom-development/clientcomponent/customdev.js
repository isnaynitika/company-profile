"use client";

import Footer2 from "../../../../components/Footer2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import ItemCustom from "../../../../components/DataCustomDev";
import Animation from "../../../../components/Animation";
import Image from "next/image";

const CustomDevComponent = ({ customdevdata }) => {
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;

  const mainsection = customdevdata.data.attributes.main_section;
  const countsection = customdevdata.data.attributes.count_section;
  const judulsection = customdevdata.data.attributes.service_section;
  const listservice = customdevdata.data.attributes.list_services;
  const metode = customdevdata.data.attributes.Metode_Pengembangan;

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
            <div className="z-10 -mt-10">
              <div className="flex flex-col text-center mb-5">
                <div className="text-md lg:text-lg font-medium text-red-500 ">
                  {judulsection.judul_service}
                </div>
                <div className="text-lg lg:text-4xl font-medium text-black mb-5">
                  {judulsection.subjudul}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="max-w-7xl">
                  <div className=" flex items-center justify-center mb-20">
                    <div className="grid grid-cols-1 gap-4">
                      {listservice.data.map((item, index) => (
                        <ItemCustom
                          key={item.id}
                          gambarservice={
                            item.attributes.icon_service.data
                              ? `${imageurl}${item.attributes.icon_service.data.attributes.url}`
                              : "../../../noimg.svg"
                          }
                          service={item.attributes.judul_service}
                          descservice={item.attributes.deskripsi_service}
                          listservice={item.attributes.list_service_details.data.map(
                            (itemfitur) => (
                              <div key={itemfitur.id}>
                                <li className="flex gap-x-2 ">
                                  <p className="md:text-md lg:text-lg text-xs font-light self-baseline">
                                    <FontAwesomeIcon
                                      icon={faCheckCircle}
                                      className=" text-green-500 "
                                    />
                                  </p>
                                  <p className="md:text-md lg:text-lg text-xs font-light self-baseline">
                                    {itemfitur.attributes.nama_fiturservice}
                                  </p>
                                </li>
                              </div>
                            )
                          )}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center self-start items-start bg-gray-100 boreder rounded-2xl py-7 ">
                    <div className="flex flex-col gap-y-8 md:px-6 text-center md:py-10">
                      <div className="font-medium text-black text-xl md:text-3xl">
                        {metode.metode_pengembangan}
                      </div>
                      <div className="font-light text-gray-600 text-lg mx-3">
                        {metode.deskripsi}
                      </div>
                      <div className="flex justify-center items-center text-center">
                        <Image
                          src={`${imageurl}${metode.icon_metodepengembangan.data.attributes.url}`}
                          alt=""
                          className="size-52 sm:size-60 md:size-80 object-cover rounded-2xl text-center"
                          width={500}
                          height={500}
                          style={{ width: "300px", height: "300px", objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <Footer2 />
            </div>
          </div>
        </section>
      </Animation>
    </div>
  );
};

export default CustomDevComponent;
