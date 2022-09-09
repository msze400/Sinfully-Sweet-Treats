import React, { FC } from 'react'

interface PictureWallProps {}

const PortraitCookies = require('../../assets/Portrait_Cookie.jpeg')
const FlowerCookies = require('../../assets/FlowerCookies.png')
const DessertPlatter = require('../../assets/DessertPlatter.png')
const AmandaPic = require('../../assets/AmandaPic.png')
const PlantCookies = require('../../assets/PlantCookies.png')

const PictureWall: FC<PictureWallProps> = () => (
    <div className="grid grid-cols-10">
        <div className=" col-start-2 col-span-8 sm:col-start-2 sm:col-span-2 mb-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md card">
            <a href="#">
                <img className="rounded-t-lg" src={FlowerCookies} alt="" />
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
        <div className=" col-start-2 col-span-8 sm:col-start-5 sm:col-span-2 mb-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md card">
            <a href="#">
                <img className="rounded-t-lg" src={PlantCookies} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Have an Idea in Mind?
                    </h5>
                </a>
                <p className="mb-3 font-normal text-white dark:text-white">
                    Send me a reference and I'll bring your idea into sweet
                    reality!
                </p>
            </div>
        </div>
        <div className=" col-start-2 col-span-8 sm:col-start-8 sm:col-span-2 mb-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md card">
            <a href="#">
                <img className="rounded-t-lg" src={DessertPlatter} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Perfect for Any Occasion
                    </h5>
                </a>
                <p className="mb-3 font-normal text-white dark:text-white">
                    Weddings, birthdays, holidays... you name it I bake for it!
                </p>
            </div>
        </div>
    </div>
)

export default PictureWall
