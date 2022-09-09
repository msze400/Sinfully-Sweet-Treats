import React, { FC } from 'react'
import MiniBio from '../MiniBio/MiniBio'
import PictureWall from '../PictureWall/PictureWall'
import WelcomeDescription from '../WelcomeDescription/WelcomeDescription'
import { useNavigate } from 'react-router-dom'
import NotificationBanner from '../NotificationBanner/NotificationBanner'

interface HomePageProps {}

// const logo = require('../../assets/SinfullySweetTreats_v2.svg').default
const logo = require('../../assets/SS_Logo_White.svg').default

const BG = require('../../assets/HomePageBG_v3.png')

const HomePage: FC<HomePageProps> = () => {
    const navigate = useNavigate()
    return (
        <>
            <NotificationBanner />
            <div className="grid grid-cols-10 bg-fixed bg-center bg-cover bg-no-repeat relative items-center homepage ">
                <img
                    className="object-cover col-span-8 col-start-2 sm:col-start-3 md:col-start-7 h-1/2 sm:3/4 md:h-5/6 animate__animated animate__zoomIn logo"
                    // src={logo}
                    alt="white-logo"
                ></img>
            </div>
            <WelcomeDescription />
            <MiniBio></MiniBio>
            <PictureWall />

            {/* <BestSellers></BestSellers> */}
        </>
    )
}

export default HomePage
