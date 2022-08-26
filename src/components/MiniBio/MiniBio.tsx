import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
    faCookieBite,
    faQuoteLeft,
    faGifts,
} from '@fortawesome/free-solid-svg-icons'
import Reviews from '../Reviews/Reviews'
import { useNavigate } from 'react-router-dom'

interface MiniBioProps {}

const Mandy = require('../../assets/Mandy.jpg')

const MiniBio: FC<MiniBioProps> = () => {
    const navigate = useNavigate()

    return (
        <div className="grid grid-cols-6 minibio mt-8">
            <div className="col-span-4 col-start-2 md:col-start-2 md:col-span-2">
                <h1 className=" text-center md:text-left xl:w-12/12 lg:w-12/12 w-full font-bold text-gray-800 lg:text-3xl text-3xl lg:leading-10 leading-9 mt-2 md:mr-20">
                    Home Made New Jersey Cottage
                    <br /> Desserts for Any Occasion
                </h1>
                <br></br>
            </div>
            <div className="col-start-2 col-span-4 md:col-span-2 md:col-start-4 text-lg text-justify mb-10 md:pl-5">
                Sinfully Sweet treats is dedicated to providing friends and
                family with a great selection of sweets and treats. Perfect for
                all of your events ranging from weddings all the way to your
                child's birthday parties!
            </div>
            <div className="col-span-6 sm:col-start-2 sm:col-span-1  text-xl flex items-center justify-center">
                <div className="text-center flex flex-col">
                    <h1 className="">Made With Love</h1>
                    <FontAwesomeIcon
                        icon={faCookieBite as IconProp}
                        className="text-4xl"
                    />
                    <button
                        onClick={() => navigate('/menu')}
                        className="bg-rose-400 hover:bg-rose-600 m-8 m py-4 text-white font-bold border border-rose-600 rounded w-56"
                    >
                        What's on the Menu?
                    </button>
                </div>
            </div>
            <div className="col-span-6 sm:col-start-3 sm:col-span-2 text-xl flex items-center justify-center">
                <div className="text-center flex flex-col">
                    <h1 className="">Care</h1>
                    <FontAwesomeIcon
                        icon={faQuoteLeft as IconProp}
                        className="text-4xl"
                    />
                    <Reviews />
                </div>
            </div>
            <div className="col-span-6 sm:col-start-5 sm:col-span-1 text-xl flex items-center justify-center">
                <div className="text-center flex flex-col">
                    <h1 className="">And Fun</h1>
                    <FontAwesomeIcon
                        icon={faGifts as IconProp}
                        className="text-4xl"
                    />
                    <button
                        onClick={() => navigate('/about')}
                        className="bg-rose-400 hover:bg-rose-600 m-8 m py-4 text-white font-bold border border-rose-600 rounded w-56"
                    >
                        Learn my Story
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MiniBio
