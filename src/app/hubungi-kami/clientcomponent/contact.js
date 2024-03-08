"use client";

import Footer1 from "../../../components/Footer";
import Animation from "../../../components/Animation";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import ItemCard from "../../../components/ContactCard";
import Image from "next/image";

const ContactComponent = ({ contactdata, listlogo }) => {
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;

  const mainsection = contactdata.data.attributes;
  const listcontact = contactdata.data.attributes.list_contacts.data;
  const sectionclient = listlogo.data;

  return (
    <div>
      <Animation className="">
        <section className="">
          <div className="h-[90px] bg-gradient-to-r from-red-500 to-red-800 flex justify-center">
            <div className="py-8  flex justify-start items-center max-w-7xl text-white font-normal text-md md:text-lg w-5/6">
              {mainsection.judul_path}
            </div>
          </div>
          <div className="h-full">
            <div className="flex justify-center items-center">
              <div className="text-center p-8 lg:px-52 lg:p-10 lg:mt-9 max-w-7xl">
                <p className="font-semibold text-2xl mb-5">{mainsection.judul_utama}</p>
                <p className="font-normal text-lg">{mainsection.deskripsi}</p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-8 justify-center ">
              {listcontact.map((item, index) => (
                <ItemCard
                  key={item.id}
                  itemprofile={
                    item.attributes.profile_picture.data
                      ? `${imageurl}${item.attributes.profile_picture.data.attributes.url}`
                      : "/logo.png"
                  }
                  itemnama={item.attributes.nama}
                  itememail={item.attributes.email}
                  linkfb={item.attributes.link_facebook}
                  linkig={item.attributes.link_instagram}
                  linktwitter={item.attributes.link_twitter}
                  linkwa={item.attributes.link_whatsapp}
                />
              ))}
            </div>
            <div className="flex justify-center items-center">
              <div className="px-12 max-w-7xl mt-10  ">
                <div className="flex items-center animate-fade-up animate-once animate-duration-500 animate-delay-0 animate-ease-in">
                  <Marquee autoFill={true} gradient={true} gradientWidth={50}>
                    {sectionclient.map((item) => (
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
              </div>
            </div>
          </div>
        </section>
      </Animation>
    </div>
  );
};
export default ContactComponent;
