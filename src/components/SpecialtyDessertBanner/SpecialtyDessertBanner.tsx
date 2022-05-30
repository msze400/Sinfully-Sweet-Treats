import React, { FC } from 'react'

interface SpecialtyDessertBannerProps {}

const CookieTray = require('../../assets/Cookie_Tray.jpeg')

const SpecialtyDessertBanner: FC<SpecialtyDessertBannerProps> = () => (
    <div className="dark:bg-yellow-100">
        <div className="container mx-auto py-9 md:py-12 lg:py-24">
            <div className="relative mx-4">
                <img
                    src={CookieTray}
                    alt="Cookie Tray"
                    className="w-1/2 h-1/2 hidden lg:block background-tint"
                />
                <div className="absolute z-10 top-0 left-0 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white sm:w-8/12">
                        Satisfy Your Sweet Tooth
                    </h1>
                    <p className="text-base leading-normal text-white mt-4 sm:mt-5 sm:w-5/12">
                        Check out some of my previous sweet creations and happy
                        customers!
                    </p>
                    <button className="hidden sm:flex bg-gray-800 py-4 px-8 text-base font-medium text-white mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                        Reviews
                    </button>
                </div>
                <button className="absolute bottom-0 sm:hidden dark:bg-white dark:text-gray-800 bg-gray-800 py-4 text-base font-medium text-white mt-8 flex justify-center items-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                    Explore
                </button>
            </div>
        </div>
    </div>
)

export default SpecialtyDessertBanner
