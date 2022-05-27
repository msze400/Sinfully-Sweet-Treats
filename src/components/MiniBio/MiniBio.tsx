import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCookieBite, faCake } from '@fortawesome/free-solid-svg-icons'

interface MiniBioProps {}

const Mandy = require('../../assets/Mandy.jpg')

const MiniBio: FC<MiniBioProps> = () => (
    <div className="grid grid-cols-6 minibio mt-8">
        <div className="col-span-2 col-start-2">
            <h1 className="text-4xl text-left">
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
        <div className="col-start-2 col-span-2 text-lg minibio-desc">
            Sinfully Sweet treats is dedicated to providing friends and family
            with a great selection of sweets and treats. Perfect for catered
            events to kiddies birthday parties!
        </div>
        <div className="text-center flex flex-col">
            <FontAwesomeIcon
                icon={faCookieBite as IconProp}
                className="text-4xl"
            />
            <button className="bg-blue-500 hover:bg-blue-700 m-8 m py-4 text-white font-bold border border-blue-700 rounded">
                See My Best Sellers
            </button>
        </div>
        <div className="flex flex-col">
            <FontAwesomeIcon icon={faCake as IconProp} className="text-4xl" />
            <button className="bg-blue-500 hover:bg-blue-700 m-8 m py-4 text-white font-bold border border-blue-700 rounded">
                Shop
            </button>
            {/* <img src={Mandy} alt="" className="rounded-md "></img> */}
        </div>
    </div>
)

export default MiniBio
