"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import ContetFooter from "../ContentFooter";
import AlertModal from "../Modal";
import Image from "next/image";

const Footer1 = () => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const [loading, setLoading] = useState(true);

  const [mainfooter, setMain] = useState(null);
  const [isifooter, setIsi] = useState(null);
  const [kontak, setKontak] = useState(null);
  const [karir, setKarir] = useState(null);
  const [alamat, setAlamat] = useState(null);

  const [showmodal, setModal] = useState(false);

  const [postData, setPostData] = useState({
    nama: "",
    email: "",
    nohp: "",
    perusahaan: "",
    pesan: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = {
      data: postData,
    };
    try {
      const response = await fetch(`${url}/pesan-customers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        console.log("Post successful!");
        setPostData({
          nama: "",
          email: "",
          nohp: "",
          perusahaan: "",
          pesan: "",
        });
        setModal(true);
      } else {
        console.error("Failed to add post");
      }
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  function closeModal() {
    setModal(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const response = await axios.get(
            `${url}/footer-utama?populate[0]=main_footer.logo.media&populate[1]=main_footer.footer_contacts&populate[2]=main_footer.footer_karirs&populate[3]=main_footer.footer_alamats&populate[4]=gambar_footer.media`
          );
          setMain(response.data.data.attributes);
          setIsi(response.data.data.attributes.main_footer);
          setKontak(response.data.data.attributes.main_footer.footer_contacts.data);
          setKarir(response.data.data.attributes.main_footer.footer_karirs.data);
          setAlamat(response.data.data.attributes.main_footer.footer_alamats.data);

          setLoading(false);
        }, 300);
      } catch (error) {
        console.error("Error fetching API data:", error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <></>
      ) : (
        <div>
          <AlertModal isShow={showmodal} close={closeModal} />;
          <section className="w-full">
            <div className="grid grid-rows-2 relative">
              <div className="h-64 bg-white"></div>
              <div className="h-64 bg-gray-200"></div>
              <div className="bg-transparant absolute  top-0 left-0 z-10 h-full w-full flex items-center justify-center md:px-8 lg:px-28">
                <div className="flex justify-center max-w-7xl">
                  <div className="relative md:rounded-3xl overflow-hidden mt-4 md:mx-10">
                    <Image
                      className="w-screen h-[550px] md:h-[420px] sm:w-[1200px] xl:w-screen object-cover brightness-custom bg-gray-500"
                      src={
                        mainfooter.gambar_footer.data
                          ? `${imageurl}${mainfooter.gambar_footer.data.attributes.url}`
                          : "../../noimg.svg"
                      }
                      width={1000}
                      height={1000}
                      priority={true}
                      alt="Company Logo"
                    />
                  </div>
                  <div className="absolute">
                    <div className="relative max-w-7xl">
                      <div className="xl:grid xl:grid-cols-2 xl:px-48">
                        <div className="self-center hidden xl:block xl:px-8">
                          <div className="grid grid-rows-1 text-white gap-y-10">
                            <p className="font-medium text-xl">{mainfooter.subjudul}</p>
                            <p className="font-bold text-4xl">{mainfooter.judul_utama}</p>
                            <p className="font-light text-lg">{mainfooter.deskripsi}</p>
                          </div>
                        </div>
                        <div className="text-center ">
                          <div className="grid grid-cols-1 gap-6 ">
                            <div className="md:max-w-xl max-w-md mx-auto mt-10 md:mt-4 md:p-6 bg-transparant  w-screen md:px-16 sm:px-0 xl:px-20">
                              <div className="backdrop-blur-sm bg-white/20 rounded-lg mt-2">
                                <form className="w-full max-w-lg p-6" onSubmit={handleSubmit}>
                                  <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                      <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="text"
                                        name="nama"
                                        onChange={handleInputChange}
                                        value={postData.nama}
                                        required
                                        placeholder="Nama"
                                      />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                      <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        name="email"
                                        onChange={handleInputChange}
                                        value={postData.email}
                                        required
                                        type="text"
                                        placeholder="Email"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                      <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="text"
                                        name="nohp"
                                        onChange={handleInputChange}
                                        value={postData.nohp}
                                        required
                                        placeholder="No Handphone"
                                      />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                      <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        type="text"
                                        name="perusahaan"
                                        onChange={handleInputChange}
                                        value={postData.perusahaan}
                                        placeholder="Perusahaan"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                      <textarea
                                        className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        type="text"
                                        name="pesan"
                                        onChange={handleInputChange}
                                        value={postData.pesan}
                                        placeholder="Pesan"
                                        required
                                      ></textarea>
                                    </div>
                                  </div>
                                  <button
                                    type="submit"
                                    className="bg-red-500 text-white py-2 px-4 rounded-md w-full"
                                  >
                                    Kirim Pesan
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="mt-6 md:mt-0">
            <ContetFooter />
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer1;
