import Link from "next/link";
// import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Navbar = () => {

  const router = useRouter();
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    setActivePage(router.pathname);
  }, [router.pathname]);

  const navigation = [
    { name: 'Home', path: '/' },
    // { name: 'Solution', path: '/solution' },
    // { name: 'Company', path: '/company' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const {theme} = useTheme()

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-black dark:text-gray-100">
                    <span>
                      <Image
                          src="/img/logo-black.png"
                          alt="N"
                          width={300}
                          height={300}
                          className=""
                      />
                      {/* {theme === 'dark' 
                        ? 
                        <Image
                        src="/img/logo-black.png"
                        alt="N"
                        width={300}
                        height={300}
                        className=""
                        />
                        :
                        <Image
                        src="/img/logo-white.png"
                        alt="N"
                        width={300}
                        height={300}
                        className=""
                        />
                      } */}
                    </span>
                    {/* <span className="tele-marines">POWe<span className="text-4xl text-red-500">R</span>ANGeR</span> */}
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href={item.path} className={`w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 dark:focus:bg-gray-800 focus:outline-none ${
                        router.asPath === item.path ? 'text-red-500 bg-red-100 bg-opacity-10' : ''}`}>
                        {item.name}
                      </Link>
                    ))}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={menu.path} className={`inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-red-500 dark:hover:text-red-500 dark:focus:bg-opacity-10 focus:outline-none ${
                    router.asPath === menu.path ? 'text-red-500 dark:text-red-500 bg-red-100 bg-opacity-10' : ''}`}>
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden mr-3 space-x-4 lg:flex nav__item">

          {/* <ThemeChanger /> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
