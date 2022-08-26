import React, { FC } from 'react'
import NavBar from '../NavBar/NavBar'
import { Parallax, Background } from 'react-parallax'
import MiniBio from '../MiniBio/MiniBio'
import SpecialtyDessert from '../SpecialtyDessert/SpecialtyDessert'
import BestSellers from '../BestSellers/BestSellers'
import SpecialtyDessertBanner from '../SpecialtyDessertBanner/SpecialtyDessertBanner'

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
            ></img>
        </div>
        <MiniBio></MiniBio>
        <SpecialtyDessertBanner></SpecialtyDessertBanner>
        {/* <BestSellers></BestSellers> */}
    </>
)

export default HomePage
