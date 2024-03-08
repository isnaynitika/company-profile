"use client";

import { Dialog, Disclosure, Popover, Transition, Menu } from "@headlessui/react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { Fragment, useState, useEffect } from "react";
import {
  Bars3Icon,
  SquaresPlusIcon,
  Cog6ToothIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ navbarmenu }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const url = process.env.NEXT_PUBLIC_API_URL;
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const [loading, setLoading] = useState(true);
  const [logoimage, setLogo] = useState(null);

  const menuhome = navbarmenu.data?.attributes.Beranda;
  const menuporto = navbarmenu.data?.attributes.Portofolio;
  const menusolusi = navbarmenu.data?.attributes.Solusi;
  const menukarir = navbarmenu.data?.attributes.Karir;
  const menukontak = navbarmenu.data?.attributes.Kontak;
  const menuproduk = navbarmenu.data?.attributes.Produk;

  const submenusolusi = [
    {
      name: menusolusi.custom_development?.menu,
      description: menusolusi.custom_development?.deskripsi,
      href: "/solusi-kami/custom-development",
      active: menusolusi.custom_development?.active,
      icon: Cog6ToothIcon,
    },
    {
      name: menusolusi.principal_product?.menu,
      description: menusolusi.principal_product?.deskripsi,
      href: "/solusi-kami/principal-product",
      active: menusolusi.principal_product?.active,
      icon: SquaresPlusIcon,
    },
    {
      name: menusolusi.dev_service?.menu,
      description: menusolusi.dev_service?.deskripsi,
      href: "/solusi-kami/dev-service",
      active: menusolusi.dev_service?.active,
      icon: CodeBracketIcon,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/logo-navbar?populate=*`);
        setLogo(response.data.data.attributes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching API data:", error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <header className="bg-white fixed top-0 w-screen h-20 z-30 ">
          <nav
            className="mx-auto flex items-center justify-between p-6 lg:px-20 "
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 focus:outline-none">
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-[3.4rem] w-auto"
                  src={
                    logoimage.logo.data
                      ? `${imageurl}${logoimage.logo.data.attributes.url}`
                      : "/noimg.svg"
                  }
                  alt=""
                  width={300}
                  height={300}
                  priority={true}
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
              <span className={`${menuhome?.active == true ? "flex" : "hidden"}`}>
                <Link
                  className={`text-md font-medium leading-6 text-gray-900 link hover:text-red-500 ${
                    pathname === `${menuhome?.url}` ? "text-red-500" : ""
                  }`}
                  href={`${menuhome?.url}`}
                >
                  {menuhome?.menu}
                </Link>
              </span>

              <span
                className={`${
                  menusolusi.active == false || submenusolusi.every((item) => !item.active)
                    ? "hidden"
                    : "flex"
                }`}
              >
                <Popover className="relative">
                  <Popover.Button
                    className={`flex outline-none items-center gap-x-1 text-md font-medium leading-6 text-gray-900 hover:text-red-500 ${
                      pathname === "/solusi-kami/custom-development" ||
                      pathname === "/solusi-kami/principal-product" ||
                      pathname === "/solusi-kami/dev-service"
                        ? "text-red-500"
                        : ""
                    }`}
                  >
                    {menusolusi.menu}
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute -left-44 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                      {({ close }) => (
                        <div className="p-4">
                          {submenusolusi.map((item) => (
                            <span
                              key={item.name}
                              className={`${item.active == true ? "flex" : "hidden"}`}
                            >
                              <div
                                onClick={() => close()}
                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                              >
                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                  <item.icon
                                    className={`h-6 w-6 text-gray-600 group-hover:text-red-500 ${
                                      pathname === item.href ? "text-red-500" : ""
                                    }`}
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="flex-auto">
                                  <Link
                                    href={item.href}
                                    className={`block font-semibold text-gray-900 ${
                                      pathname === item.href ? "text-red-500" : ""
                                    }`}
                                  >
                                    {item.name}
                                    <span className="absolute inset-0" />
                                  </Link>
                                  <p className="mt-1 text-gray-600">{item.description}</p>
                                </div>
                              </div>
                            </span>
                          ))}
                        </div>
                      )}
                    </Popover.Panel>
                  </Transition>
                </Popover>
              </span>
              <span className={`${menuporto?.active == true ? "flex" : "hidden"}`}>
                <Link
                  className={`text-md font-medium leading-6 text-gray-900 link hover:text-red-500 ${
                    pathname === `${menuporto?.url}` ? "text-red-500" : ""
                  }`}
                  href={`${menuporto?.url}`}
                >
                  {menuporto?.menu}
                </Link>
              </span>
              <span className={`${menukarir?.active == true ? "flex" : "hidden"}`}>
                <Link
                  className={`text-md font-medium leading-6 text-gray-900 link hover:text-red-500 ${
                    pathname === `${menukarir?.url}` ? "text-red-500" : ""
                  }`}
                  href={`${menukarir?.url}`}
                >
                  {menukarir?.menu}
                </Link>
              </span>

              <span className={`${menukontak?.active == true ? "flex" : "hidden"}`}>
                <Link
                  className={`text-md font-medium leading-6 text-gray-900 link hover:text-red-500 ${
                    pathname === `${menukontak?.url}` ? "text-red-500" : ""
                  }`}
                  href={`${menukontak?.url}`}
                >
                  {menukontak?.menu}
                </Link>
              </span>

              <span className={`${menuproduk?.active == true ? "flex" : "hidden"}`}>
                <Link
                  className={`text-md font-medium leading-6 text-gray-900 link hover:text-red-500 ${
                    pathname === `${menuproduk?.url}` ? "text-red-500" : ""
                  }`}
                  href={`${menuproduk?.url}`}
                >
                  {menuproduk?.menu}
                </Link>
              </span>
            </Popover.Group>
          </nav>
          <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50 backdrop-blur-sm " />
            <Dialog.Panel className="fixed  inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 animate-fade-left animate-once animate-duration-[500ms] animate-delay-0 animate-ease-in ">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Image
                    className="h-8 w-auto"
                    src="/code.png"
                    alt=""
                    width={300}
                    height={300}
                    priority={true}
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 "
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <span className={`${menuhome?.active == true ? "flex" : "hidden"}`}>
                      <Link
                        className={`text-md block font-semibold leading-6 text-gray-900 link ${
                          pathname === `${menuhome?.url}` ? "text-red-500" : ""
                        }`}
                        href={`${menuhome?.url}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {menuhome?.menu}
                      </Link>
                    </span>
                    <span
                      className={`${
                        menusolusi.active == false || submenusolusi.every((item) => !item.active)
                          ? "hidden"
                          : "block"
                      }`}
                    >
                      <Disclosure as="div" className="-mx-3">
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={`flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ${
                                pathname === "/solusi-kami/custom-development" ||
                                pathname === "/solusi-kami/principal-product" ||
                                pathname === "/solusi-kami/dev-service"
                                  ? "text-red-500"
                                  : ""
                              }`}
                            >
                              Solusi Kami
                              <ChevronDownIcon
                                className={classNames(
                                  open ? "rotate-180" : "",
                                  "h-5 w-5 flex-none"
                                )}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-2 space-y-2">
                              {[...submenusolusi].map((item) => (
                                <span
                                  key={item.name}
                                  className={`${item.active == false ? "hidden" : "block"}`}
                                >
                                  <Disclosure.Button
                                    className={`block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 ${
                                      pathname === item.href ? "text-red-500" : ""
                                    }`}
                                  >
                                    <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                                      {item.name}
                                    </Link>
                                  </Disclosure.Button>
                                </span>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </span>

                    <span className={`${menuporto?.active == true ? "flex" : "hidden"}`}>
                      <Link
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 link ${
                          pathname === `${menuporto?.url}` ? "text-red-500" : ""
                        }`}
                        href={`${menuporto?.url}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {menuporto?.menu}
                      </Link>
                    </span>
                    <span className={`${menukarir?.active == true ? "flex" : "hidden"}`}>
                      <Link
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 link ${
                          pathname === `${menukarir?.url}` ? "text-red-500" : ""
                        }`}
                        href={`${menukarir?.url}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {menukarir?.menu}
                      </Link>
                    </span>
                    <span className={`${menukontak?.active == true ? "flex" : "hidden"}`}>
                      <Link
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 link ${
                          pathname === `${menukontak?.url}` ? "text-red-500" : ""
                        }`}
                        href={`${menukontak?.url}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {menukontak?.menu}
                      </Link>
                    </span>
                    <span className={`${menuproduk?.active == true ? "flex" : "hidden"}`}>
                      <Link
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 link ${
                          pathname === `${menuproduk?.url}` ? "text-red-500" : ""
                        }`}
                        href={`${menuproduk?.url}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {menuproduk?.menu}
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      )}
    </>
  );
};
export default Navbar;
