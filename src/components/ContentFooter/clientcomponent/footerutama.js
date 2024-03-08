"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";

const MainfooterComponent = ({ footercontent }) => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const [loading, setLoading] = useState(true);

  //   const [isifooter, setIsi] = useState(null);
  //   const [kontak, setKontak] = useState(null);
  //   const [karir, setKarir] = useState(null);
  //   const [alamat, setAlamat] = useState(null);

  const isifooter = footercontent.main_footer;
  const kontak = footercontent.main_footer.footer_contacts.data;
  const karir = footercontent.main_footer.footer_karirs.data;
  const alamat = footercontent.main_footer.footer_alamats.data;

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         setTimeout(async () => {
  //           const response = await axios.get(
  //             `${url}/footer-utama?populate[0]=main_footer.logo.media&populate[1]=main_footer.footer_contacts&populate[2]=main_footer.footer_karirs&populate[3]=main_footer.footer_alamats&populate[4]=gambar_footer.media`
  //           );
  //           setIsi(response.data.data.attributes.main_footer);
  //           setKontak(response.data.data.attributes.main_footer.footer_contacts.data);
  //           setKarir(response.data.data.attributes.main_footer.footer_karirs.data);
  //           setAlamat(response.data.data.attributes.main_footer.footer_alamats.data);

  //           setLoading(false);
  //         }, 300);
  //       } catch (error) {
  //         console.error("Error fetching API data:", error.message);
  //         setLoading(false);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  return (
    <div>
      <section className="bg-gray-200 flex justify-center items-center">
        <div className="max-w-7xl">
          <div className="grid grid-rows-3 md:grid-cols-2 lg:grid-cols-3 py-8 px-10 gap-y-6 md:px-20 lg:grid-rows-1">
            <div className="flex flex-col gap-3 self-center md:self-start">
              <div className="grid grid-cols-1">
                <Image
                  src={
                    isifooter.logo.data
                      ? `${imageurl}${isifooter.logo.data.attributes.url}`
                      : "/noimg.svg"
                  }
                  alt=""
                  height={100}
                  width={100}
                  priority={false}
                  style={{ objectFit: "contain", width: "auto", height: "auto" }}
                />
              </div>
              <p className="font-light text-md md:me-5 lg:me-8">{isifooter.deskripsi}</p>
            </div>
            <div className="flex flex-col gap-4 self-center md:self-start">
              <div>
                <p className="font-medium text-lg">Kontak</p>
                {kontak.map((item, index) => (
                  <p key={item.id} className="font-light text-sm">
                    {item.attributes.lokasi} : {item.attributes.email}
                  </p>
                ))}
              </div>
              <div>
                <p className="font-medium text-lg">Karir</p>
                {karir.map((item, index) => (
                  <p key={item.id} className="font-light text-sm">
                    {item.attributes.email}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-medium text-lg">Alamat</p>
                {alamat.map((item, index) => (
                  <div key={item.id} className="leading-9">
                    <p className="font-medium text-md">{item.attributes.lokasi}</p>
                    <p className="font-light text-sm">{item.attributes.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainfooterComponent;
