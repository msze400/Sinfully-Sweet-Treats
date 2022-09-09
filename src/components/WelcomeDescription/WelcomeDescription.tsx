import React, { FC } from 'react'

interface WelcomeDescriptionProps {}

const AmandaPic = require('../../assets/AmandaPic.png')
const AmandaSquarePic = require('../../assets/AmandaSquarePic.png')

const WelcomeDescription: FC<WelcomeDescriptionProps> = () => (
    <>
        <div className="grid grid-cols-6 my-8">
            <h1 className="text-4xl font-extrabold col-start-2 col-span-4 md:col-span-2 md:col-start-2 md:text-left custom-font">
                Hand Crafted Treats Made With Love
            </h1>
        </div>
        <div className="grid grid-cols-12 mb-4">
            <p className=" text-2xl col-start-2 col-span-10 text-justify md:col-span-4 md:col-start-3 md:py-9 custom-font font-semibold">
                The last few years I have had the chance to create custom
                designs and treats that have allowed me to learn , grow, and
                acquire new talents.
                <br />
                <br />
                My treats are sinfully delicious and unique. Explore my site to
                see what I offer and please don’t hesitate to reach out with any
                questions! I look forward to helping you make your next event
                spectacular! - Amanda
            </p>
            <div className="col-start-2 md:col-start-8 col-span-10  md:col-span-2 my-9 md:my-0">
                {/* <div className="w-9/12 sm:w-4/12 px-4 my-9"> */}
                <img
                    src={AmandaSquarePic}
                    alt="..."
                    className="shadow rounded-full max-w-full h-auto align-middle border-none"
                />
            </div>
        </div>
    </>
)

export default WelcomeDescription
