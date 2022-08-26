import React, { FC } from 'react'

interface PictureWallProps {}

const PortraitCookies = require('../../assets/Portrait_Cookie.jpeg')

const PictureWall: FC<PictureWallProps> = () => (
    <div className="grid grid-cols-10">
        <div className=" col-start-2 col-span-8 sm:col-start-2 sm:col-span-2 mb-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md card">
            <a href="#">
                <img className="rounded-t-lg" src={PortraitCookies} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Custom Desserts
                    </h5>
                </a>
                <p className="mb-3 font-normal text-white dark:text-white">
                    Have an order for your special occasion? Contact me to get a
                    quote.
                </p>
            </div>
        </div>
        <div className=" col-start-2 col-span-8 sm:col-start-5 sm:col-span-2 mb-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={PortraitCookies} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Custom
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                </p>
            </div>
        </div>
        <div className=" col-start-2 col-span-8 sm:col-start-8 sm:col-span-2 mb-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={PortraitCookies} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Custom
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                </p>
            </div>
        </div>
        {/* <div className=" col-start-3  max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={PortraitCookies} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                </p>
                
            </div>
        </div> */}
    </div>
)

export default PictureWall
