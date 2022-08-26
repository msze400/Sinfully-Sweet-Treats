// import React, { FC } from 'react'

// interface NavBarProps {}

// const NavBar: FC<NavBarProps> = () => (
//     <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 navbar">
//         <div className="container flex flex-wrap justify-between items-center mx-auto">
//             <a href="/" className="flex items-center">
//                 {/* <img src="/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
//                 <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
//                     Sinfully Sweet Treats By Amanda
//                 </span>
//             </a>
//             <button
//                 data-collapse-toggle="mobile-menu"
//                 type="button"
//                 className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//             >
//                 <span className="sr-only">Open main menu</span>
//                 <svg
//                     className="w-6 h-6"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <path
//                         fillRule="evenodd"
//                         d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                         clipRule="evenodd"
//                     ></path>
//                 </svg>
//                 <svg
//                     className="hidden w-6 h-6"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <path
//                         fillRule="evenodd"
//                         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                     ></path>
//                 </svg>
//             </button>
//             <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
//                 <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
//                     <li>
//                         <a
//                             href="/"
//                             className="block py-2 pr-4 pl-3 text-white bg-rose-700 rounded md:bg-transparent md:text-rose-700 md:p-0 dark:text-white"
//                             aria-current="page"
//                         >
//                             Home
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="/about"
//                             className="block py-2 pr-4 pl-3 text-white-700 border-b border-white-100 hover:text-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-rose-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                         >
//                             About
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="/menu"
//                             className="block py-2 pr-4 pl-3 text-white-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-rose-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                         >
//                             Menu
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="/products"
//                             className="block py-2 pr-4 pl-3 text-white-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-rose-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                         >
//                             Products
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="/#"
//                             className="block py-2 pr-4 pl-3 text-white-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-rose-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                         >
//                             Contact
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>
// )

// export default NavBar

import React from 'react'

export default function Navbar({}) {
    const [navbarOpen, setNavbarOpen] = React.useState(false)
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm sm:text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            href="/"
                        >
                            Sinfully Sweet Treats by Amanda
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            'lg:flex flex-grow items-center' +
                            (navbarOpen ? ' flex' : ' hidden')
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="/"
                                >
                                    <span className="ml-2">Home</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="/about"
                                >
                                    <span className="ml-2">About</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="/menu"
                                >
                                    <span className="ml-2">Menu</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="/products"
                                >
                                    <span className="ml-2">Products</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="/contact"
                                >
                                    <span className="ml-2">Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
