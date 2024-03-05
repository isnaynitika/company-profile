"use client";

import Image from "next/image";
import Footer1 from "../../../components/Footer";
import Marquee from "react-fast-marquee";
import ItemSolution from "../../../components/DataSolution";
import ItemFeature from "../../../components/DataFeature";
import Animation from "../../../components/Animation";
import { motion } from "framer-motion";
import HeroSection from "../../../components/Hero";
import OurProduct from "../../../components/OurProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const HomeComponent = ({ homedata }) => {
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;

  const sectionbisnis = homedata.data.attributes.bisnis_section;
  const sectionhero = homedata.data.attributes.hero_section;
  const sectionclient = homedata.data.attributes.list_logos;
  const sectionproduk = homedata.data.attributes.produk_section;
  const sectionlistproduk = homedata.data.attributes.list_solusis;
  const sectionlistbisnis = homedata.data.attributes.list_bidangs;
  const sectionkeunggulan = homedata.data.attributes.keunggulan_section;

  return (
    <div className="h-full ">
      <Animation>
        <section className="flex justify-center ">
          <HeroSection
            gambar={
              sectionhero.gambar_hero.data
                ? `${imageurl}${sectionhero.gambar_hero.data.attributes.url}`
                : "../../noimg.svg"
            }
            perusahaan={sectionhero.nama_pt}
            kalimat={sectionhero.kalimat_utama}
            deskripsi={sectionhero.kalimat_kedua}
          />
        </section>
        <div className="px-12 lg:px-36 mt-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
          >
            <div className="flex items-center   ">
              <Marquee autoFill={true} gradient={true} gradientWidth={50}>
                {sectionclient.data.map((item) => (
                  <Image
                    key={item.id}
                    src={`${imageurl}${item.attributes.logo_client.data.attributes.url}`}
                    alt=""
                    className="h-14 w-18 md:h-26 md:w-30 object-scale-up rounded-2xl md-1 md:mx-3"
                    height={300}
                    width={300}
                    style={{ width: "auto", height: "200" }}
                  />
                ))}
              </Marquee>
            </div>
          </motion.div>
        </div>
        <section className=" items-center justify-center">
          <div className=" px-4 py-8 mt-10">
            <div className="row-span-2 text-center mb-10">
              <h2 className="text-xl px-8 font-medium  text-center text-red-500 lg:text-xl md:px-36 ">
                {sectionproduk.judul}
              </h2>
              <h2 className="text-sm font-medium text-center mt-4 px-8 md:text-4xl lg:px-[20%] ">
                {sectionproduk.subjudul}
              </h2>
            </div>
            <div className=" flex items-center justify-center mb-20">
              <div className="grid grid-cols-1 gap-4">
                {sectionlistproduk.data.map((item, index) => (
                  <ItemSolution
                    key={item.id}
                    gambarfitur={
                      item.attributes.gambar.data
                        ? `${imageurl}${item.attributes.gambar.data.attributes.url}`
                        : "../../../noimg.svg"
                    }
                    judulgambar={item.attributes.judul}
                    descjudul={item.attributes.deskripsi}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 ">
          <OurProduct
            text={sectionkeunggulan.judul}
            desc={sectionkeunggulan.deskripsi}
            image={
              sectionkeunggulan.mockup_produk.data
                ? `${imageurl}${sectionkeunggulan.mockup_produk.data.attributes.url}`
                : "../../noimg.svg"
            }
            listfitur={sectionkeunggulan.list_fiturs.data.map((itemfitur) => (
              <div key={itemfitur.id}>
                <li className="flex gap-x-2 ">
                  <p className="md:text-md lg:text-lg text-xs font-light self-baseline">
                    <FontAwesomeIcon icon={faCheckCircle} className=" text-green-500 " />
                  </p>
                  <p className="md:text-md lg:text-lg text-xs font-light self-baseline">
                    {itemfitur.attributes.fitur}
                  </p>
                </li>
              </div>
            ))}
          />
        </section>
        <section className="py-16">
          <div className="row-span-2 text-center mb-10 ">
            <h2 className="text-xl px-8 font-medium  text-center text-red-500 lg:text-xl md:px-36 ">
              {sectionbisnis.judul}
            </h2>
            <h2 className="text-sm font-medium text-center mt-4 px-8 md:text-4xl lg:px-[20%] ">
              {sectionbisnis.subjudul}
            </h2>
          </div>
          <div className="md:flex md:flex-row md:justify-center">
            <div className="min-h-0 items-center justify-center mb-8 mt-4 ">
              <div
                className={`flex flex-wrap-reverse justify-center gap-4 max-w-[72rem] ${
                  sectionlistbisnis.data.length == 4
                    ? "px-[2rem] md:px-[10rem]"
                    : "px-[2rem] md:px-[1rem]"
                }`}
              >
                {sectionlistbisnis.data.map((item, index) => (
                  <div key={item.id} className="w-72 flex-auto bg-transparant min-h-0 ">
                    {item.attributes.icon_bisnis.data == null ? (
                      <ItemFeature
                        gambar="../../noimg.svg"
                        bidangbisnis={item.attributes.bidang_bisnis}
                        penjelas={item.attributes.deskripsi}
                      />
                    ) : (
                      <ItemFeature
                        gambar={`${imageurl}${item.attributes.icon_bisnis.data.attributes.url}`}
                        bidangbisnis={item.attributes.bidang_bisnis}
                        penjelas={item.attributes.deskripsi}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full">
          <Footer1 />
        </section>
      </Animation>
      {/* {loading ? (
        <div className="flex justify-center items-center min-h-full">
          <Image
            src="/logo.png"
            className="size-24 object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse "
            width={200}
            height={300}
            alt=""
            style={{ width: "300", height: "300" }}
          />
        </div>
      ) : (
        
      )} */}
    </div>
  );
};

export default HomeComponent;
