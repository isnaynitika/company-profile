"use client";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Footer2 from "../../../components/Footer2";
import Animation from "../../../components/Animation";
import Image from "next/image";

export default function DetailPage() {
  const [detail, setData] = useState(null);
  const url = process.env.NEXT_PUBLIC_API_URL;
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const router = useParams();
  const paramslug = router.slug;

  const [content, setContent] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/list-portofolios/${paramslug}`);
        const updatedData = response.data.data;
        setData(updatedData);
        setContent(response.data.data.attributes.deskripsi);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div></div>
      ) : (
        <Animation>
          <section>
            <div className="h-[90px] bg-gradient-to-r from-red-500 to-red-800 flex justify-center">
              <div className="py-8  flex justify-start items-center max-w-7xl text-white font-normal text-md md:text-lg w-5/6">
                Portofolio / Detail Project
              </div>
            </div>
          </section>
          <section>
            <div className="flex justify-center">
              <div className="max-w-7xl">
                <article className=" md:max-w-[90%] prose md:prose-xl px-8 mx-auto mt-5 text-justify">
                  <h3 className="">{detail.attributes.nama_aplikasi}</h3>
                  <div className="flex flex-row gap-x-4">
                    <div className="text-sm font-light text-gray-700 flex gap-x-2 md:text-xl">
                      <FontAwesomeIcon
                        className="text-2xl text-gray-500 self-center"
                        icon={faCircleUser}
                      />
                      <div className="self-center font-normal text-[18px]">
                        {detail.attributes.perusahaan}
                      </div>
                    </div>
                  </div>
                  <div className="-mt-6 ">
                    <Image
                      className="w-full object-scale-up rounded-xl md:w-full md:h-96 "
                      src={
                        detail.attributes.gambar_utama.data
                          ? `${imageurl}${detail.attributes.gambar_utama.data.attributes.url}`
                          : "/noimg.svg"
                      }
                      alt=""
                      priority={false}
                      width={400}
                      height={400}
                      style={{ width: "100rem", height: "26rem", objectFit: "cover" }}
                    />
                  </div>

                  <article className=" prose-a:text-red-500 -mt-7">
                    <BlocksRenderer content={content} />
                  </article>
                  <div className="">
                    <div className="">
                      <Marquee autoFill={true} gradientWidth={20}>
                        {detail.attributes.galeri_portofolio.data?.map((item) => (
                          <Image
                            key={item.id}
                            src={`${imageurl}${item.attributes.url}`}
                            alt=""
                            className="mx-3 size-64 object-cover"
                            width={300}
                            height={300}
                          />
                        ))}
                      </Marquee>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <div className="">
            <Footer2 />
          </div>
        </Animation>
      )}
    </div>
  );
}
