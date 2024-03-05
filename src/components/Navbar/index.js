"use client";

import { Dialog, Disclosure, Popover, Transition, Menu } from "@headlessui/react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { Fragment, useState, useEffect } from "react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  Cog6ToothIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const navmenu = [
  {
    name: "Custom Software Development",
    description: "Get a better understanding of your traffic",
    href: "/solusi-kami/custom-development",
    icon: Cog6ToothIcon,
  },
  // {
  //   name: "Asset Management",
  //   description: "Speak directly to your customers",
  //   href: "/pages/our-solution/asset-management",
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: "Klaim Management",
  //   description: "Your customers’ data will be safe and secure",
  //   href: "/pages/our-solution/claim-management",
  //   icon: FingerPrintIcon,
  // },
  {
    name: "Principal Product",
    description: "Connect with third-party tools",
    href: "/solusi-kami/principal-product",
    icon: SquaresPlusIcon,
  },
  {
    name: "Developer as a Service",
    description: "Build strategic funnels that will convert",
    href: "/solusi-kami/dev-service",
    icon: CodeBracketIcon,
  },
];
// const callsToAction = [
//   { name: "Watch demo", href: "#", icon: PlayCircleIcon },
//   { name: "Contact sales", href: "#", icon: PhoneIcon },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const url = process.env.NEXT_PUBLIC_API_URL;
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const [loading, setLoading] = useState(true);

  const [logoimage, setLogo] = useState(null);

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
              <Link
                className={`text-md font-medium leading-6 text-gray-900 link hover:text-red-500 ${
                  pathname === "/" ? "text-red-500" : ""
                }`}
                href="/"
              >
                Beranda
              </Link>
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
                  Solusi Kami
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
                        {navmenu.map((item) => (
                          <div
                            key={item.name}
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
                        ))}
                      </div>
                    )}
                  </Popover.Panel>
                </Transition>
              </Popover>

              <Link
                className={`text-md font-medium leading-6 text-gray-900 link hover:text-red-500 ${
                  pathname === "/portofolio" ? "text-red-500" : ""
                }`}
                href="/portofolio"
              >
                Portofolio
              </Link>
              <Link
                className={`text-md font-medium leading-6 text-gray-900 link hover:text-red-500 ${
                  pathname === "/karir" ? "text-red-500" : ""
                }`}
                href="/karir"
              >
                Karir
              </Link>

              <Link
                className={`text-md font-medium leading-6 text-gray-900 link hover:text-red-500 ${
                  pathname === "/hubungi-kami" ? "text-red-500" : ""
                }`}
                href="/hubungi-kami"
              >
                Hubungi Kami
              </Link>
              <Link
                className={`text-md font-medium leading-6 text-gray-900 link hover:text-red-500 ${
                  pathname === "/produk" ? "text-red-500" : ""
                }`}
                href="/produk"
              >
                Produk
              </Link>
              {/* <Popover className={`${listproduk.length === 0 ? "hidden" : "relative"}`}>
                <Popover.Button className="flex outline-none items-center gap-x-1 text-md font-medium leading-6 text-gray-900 hover:text-red-500">
                  Produk
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
                  <Popover.Panel className="absolute -left-[21rem] top-full z-50 mt-3 w-screen max-w-md rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 ">
                    {({ close }) => (
                      <div onClick={() => close()}>
                        <div className="p-4 max-h-96 overflow-y-scroll no-scrollbar">
                          {listproduk.map((item) => (
                            <div
                              key={item.id}
                              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                            >
                              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <RectangleGroupIcon
                                  className={`h-6 w-6 text-gray-600 group-hover:text-red-500 ${
                                    pathname === item.attributes.link_produk ? "text-red-500" : ""
                                  }`}
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="flex-auto">
                                <button>
                                  <a
                                    href={item.attributes.link_produk}
                                    target="_blank"
                                    className={`block font-semibold text-gray-900 ${
                                      pathname === item.attributes.link_produk ? "text-red-500" : ""
                                    }`}
                                  >
                                    {item.attributes.nama_produk}
                                    <span className="absolute inset-0" />
                                  </a>
                                </button>

                                <p className="mt-1 text-gray-600">
                                  {item.attributes.deskripsi_singkat}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <a
                          href={
                            produk.attributes.link_semuaproduk
                              ? `${produk.attributes.link_semuaproduk}`
                              : "/"
                          }
                          target={produk.attributes.link_semuaproduk ? `_blank` : ""}
                          className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-100 hover:bg-gray-200"
                        >
                          {produk.attributes.nama_text ? (
                            <div className="inline-flex items-center py-1">
                              {produk.attributes.nama_text}
                            </div>
                          ) : (
                            <div className="inline-flex items-center py-1">Semua Produk</div>
                          )}
                        </a>
                      </div>
                    )}
                  </Popover.Panel>
                </Transition>
              </Popover> */}
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
                    <Link
                      className={`text-md block font-semibold leading-6 text-gray-900 link ${
                        pathname === "/" ? "text-red-500" : ""
                      }`}
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Beranda
                    </Link>
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            Solusi Kami
                            <ChevronDownIcon
                              className={classNames(open ? "rotate-180" : "", "h-5 w-5 flex-none")}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...navmenu].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                                  {" "}
                                  {item.name}
                                </Link>
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Link
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 link ${
                        pathname === "/portofolio" ? "text-red-500" : ""
                      }`}
                      href="/portofolio"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Portofolio
                    </Link>
                    <Link
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 link ${
                        pathname === "/karir" ? "text-red-500" : ""
                      }`}
                      href="/karir"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Karir
                    </Link>
                    <Link
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 link ${
                        pathname === "/hubungi-kami" ? "text-red-500" : ""
                      }`}
                      href="/hubungi-kami"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Hubungi Kami
                    </Link>
                    <Link
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 link ${
                        pathname === "/produk" ? "text-red-500" : ""
                      }`}
                      href="/produk"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Produk
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      )}
    </>
  );
}
