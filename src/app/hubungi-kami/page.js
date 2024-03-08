import { getContact, getLogoClient, getNavbar } from "../../utils/api";
import ContactComponent from "./clientcomponent/contact";
import Footer1 from "../../components/Footer";

export default async function Contact() {
  const contact = getContact();
  const [listcontact] = await Promise.all([contact]);

  const logodata = getLogoClient();
  const [logoclient] = await Promise.all([logodata]);

  const navbar = getNavbar();
  const [navbarmenu] = await Promise.all([navbar]);

  if (navbarmenu.data?.attributes.Kontak.active == true) {
    return (
      <div>
        <ContactComponent contactdata={listcontact} listlogo={logoclient} />
        <section className="w-full">
          <Footer1 />
        </section>
      </div>
    );
  } else {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <section className="bg-white animate-fade-up animate-once animate-duration-[800ms] animate-delay-200 animate-ease-in">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-7xl text-red-600 ">
                Maaf
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
                Halaman Tidak Tersedia
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 ">
                Maaf halaman yang anda cari tidak tersedia atau sedang diperbaiki
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
