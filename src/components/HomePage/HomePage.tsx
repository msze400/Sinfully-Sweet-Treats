import React, { FC } from 'react'
import NavBar from '../NavBar/NavBar'
import { Parallax } from 'react-parallax'
import MiniBio from '../MiniBio/MiniBio'
import SpecialtyDessert from '../SpecialtyDessert/SpecialtyDessert'
import BestSellers from '../BestSellers/BestSellers'
import SpecialtyDessertBanner from '../SpecialtyDessertBanner/SpecialtyDessertBanner'

interface HomePageProps {}

const logo = require('../../assets/SS_Treats_Logo_White_v2.svg').default

const HomePage: FC<HomePageProps> = () => (
    <div>
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../../assets/Macarons.jpg')}
            bgImageAlt="macarons"
            strength={-200}
        >
            <div className="parallax flex h-screen">
                <div className="parallax-text text-white m-auto text-center text-5xl">
                    <img
                        src={logo}
                        alt="white-logo"
                        style={{ width: '50vw', height: '50vh' }}
                    ></img>
                </div>
            </div>
        </Parallax>
        <MiniBio></MiniBio>
        <SpecialtyDessertBanner></SpecialtyDessertBanner>
        <BestSellers></BestSellers>
    </div>
    // </div>
)

export default HomePage
