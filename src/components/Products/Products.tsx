import React, { FC } from 'react'

interface ProductsProps {}

const Products: FC<ProductsProps> = () => (
    <section className="text-gray-600 body-font">
        <div
            id="banner"
            tabIndex={-1}
            className="flex relative z-50 gap-8 justify-center text-center items-start py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 sm:items-center dark:border-gray-700 lg:py-4 dark:bg-rose-400"
        >
            <p className="text-sm font-normal text-white dark:text-white  ">
                Interested in Ordering? Email me at{' '}
                <a
                    className="font-bold underline text-primary-600 dark:text-white hover:no-underline"
                    href="#"
                >
                    sstreatsbyamanda@gmail.com
                </a>{' '}
                or call me at 732-379-0967.
            </p>
            {/* <button
                data-collapse-toggle="banner"
                type="button"
                className="flex items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
            >
                <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </button> */}
        </div>
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a
                        className="block relative h-48 rounded overflow-hidden"
                        href="/#"
                    >
                        <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            src="https://dummyimage.com/420x260"
                        />
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                            CAKE POPS
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                            Chocolate
                        </h2>
                        <p className="mt-1">$2.00/3.50 standard/specialty</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a
                        className="block relative h-48 rounded overflow-hidden"
                        href="/#"
                    >
                        <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            src="https://dummyimage.com/421x261"
                        />
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                            CAKE POPS
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                            Vanilla
                        </h2>
                        <p className="mt-1">$2.00/3.50 standard/specialty</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a
                        className="block relative h-48 rounded overflow-hidden"
                        href="/#"
                    >
                        <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            src="https://dummyimage.com/422x262"
                        />
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                            CAKE POPS
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                            Funfetti
                        </h2>
                        <p className="mt-1">$2.00/3.50 standard/specialty</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a
                        className="block relative h-48 rounded overflow-hidden"
                        href="/#"
                    >
                        <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            src="https://dummyimage.com/423x263"
                        />
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                            CAKE POPS
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                            Red Velvet
                        </h2>
                        <p className="mt-1">$2.00/3.50 standard/specialty</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a
                        className="block relative h-48 rounded overflow-hidden"
                        href="/#"
                    >
                        <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            src="https://dummyimage.com/424x264"
                        />
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                            COOKIES
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                            Standard Sugar Cookies
                        </h2>
                        <p className="mt-1">$4.00 / cookie</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a
                        className="block relative h-48 rounded overflow-hidden"
                        href="/#"
                    >
                        <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            src="https://dummyimage.com/425x265"
                        />
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                            COOKIES
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                            Chocolate
                        </h2>
                        <p className="mt-1">$4.00 / cookie</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a
                        className="block relative h-48 rounded overflow-hidden"
                        href="/#"
                    >
                        <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            src="https://dummyimage.com/427x267"
                        />
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                            COOKIES
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                            Chocolate Chip
                        </h2>
                        <p className="mt-1">$4.00 / cookie</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a
                        className="block relative h-48 rounded overflow-hidden"
                        href="/#"
                    >
                        <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            src="https://dummyimage.com/428x268"
                        />
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                            DOUBLE LAYER COOKIE CAKES
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                            Chocolate Chip
                        </h2>
                        <p className="mt-1">$50.00 / piece</p>
                    </div>
                    {/* <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                            Double Layer Cookie Cakes
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                            Red Velvet
                        </h2>
                        <p className="mt-1">$50.00 / piece</p>
                    </div> */}
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a
                        className="block relative h-48 rounded overflow-hidden"
                        href="/#"
                    >
                        <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            src="https://dummyimage.com/428x268"
                        />
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                            DOUBLE LAYER COOKIE CAKES
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                            Red Velvet
                        </h2>
                        <p className="mt-1">$50.00 / piece</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Products
