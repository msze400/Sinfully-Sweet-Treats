import React, { FC } from 'react'
import MiniBio from '../MiniBio/MiniBio'
import PictureWall from '../PictureWall/PictureWall'

interface HomePageProps {}

const logo = require('../../assets/SinfullySweetTreats_v2.svg').default
const BG = require('../../assets/HomePageBG_v3.png')

const HomePage: FC<HomePageProps> = () => (
    <>
        <div
            className="grid grid-cols-10 bg-fixed bg-center bg-cover relative items-center  "
            style={{
                backgroundImage: `url(${BG})`,
                height: '75vh',
            }}
        >
            <img
                className="object-cover col-span-8 col-start-2 sm:col-start-3 md:col-start-7 h-1/2 sm:3/4 md:h-5/6  "
                src={logo}
                alt="white-logo"
                // style={{ width: '50vw', height: '50vh' }}
            ></img>
        </div>
        <MiniBio></MiniBio>
        <PictureWall />
        {/* <BestSellers></BestSellers> */}
    </>
)

export default HomePage
