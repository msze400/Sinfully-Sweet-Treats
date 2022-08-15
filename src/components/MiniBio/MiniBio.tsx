import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCookieBite, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import Reviews from '../Reviews/Reviews'

interface MiniBioProps {}

const Mandy = require('../../assets/Mandy.jpg')

const MiniBio: FC<MiniBioProps> = () => (
    <div className="grid grid-cols-6 minibio mt-8">
        <div className="col-span-2 col-start-2">
            <h1 className=" text-left xl:w-12/12 lg:w-12/12 w-full font-bold text-gray-800 lg:text-3xl text-3xl lg:leading-10 leading-9 mt-2">
                Home Made New Jersey Cottage Desserts for Any Occasion
            </h1>
            <br></br>
        </div>
        <div className="flex items-center justify-center">
            <h1 className="">Made With Love</h1>
        </div>
        <div className="flex items-center justify-center">
            <h1>And Care</h1>
        </div>
        <div className="col-start-2 col-span-2 text-lg text-left">
            Sinfully Sweet treats is dedicated to providing friends and family
            with a great selection of sweets and treats. Perfect for catered
            events to kiddies birthday parties!
        </div>
        <div className="text-center flex flex-col">
            <FontAwesomeIcon
                icon={faCookieBite as IconProp}
                className="text-4xl"
            />
            <button className="bg-rose-400 hover:bg-rose-600 m-8 m py-4 text-white font-bold border border-rose-600 rounded">
                What's on the Menu?
            </button>
        </div>
        <div className="flex flex-col">
            <FontAwesomeIcon
                icon={faQuoteLeft as IconProp}
                className="text-4xl"
            />
            <Reviews />
        </div>
    </div>
)

export default MiniBio
