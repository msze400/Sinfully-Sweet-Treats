import React, { FC } from 'react'

interface AboutProps {}

const Mandy = require('../../assets/Mandy.jpg')
const Cookies = require('../../assets/Choco-chip.jpg')

const About: FC<AboutProps> = () => (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="lg:w-10/12 w-full">
            <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer">
                About
            </p>
            <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
                I'm here to make great tasting treats for any occassion.
            </h2>
            <p className="text-lg text-base leading-6 text-gray-600 mt-6">
                Back in 2021, New Jersey reinstated its home cottage food laws,
                allowing bakers like myself to sell desserts straight from their
                home kitchen. Ever since then I've been providing friends and
                family with delicious treats for their special occassions. If
                you have a special request, please don't hesistate to reach out
                and contact me!
            </p>
        </div>

        <div className="lg:mt-14 sm:mt-10 mt-12">
            <img
                className="lg:block hidden w-full rounded-3xl"
                src={Cookies}
                alt="Group of people Chilling"
            />
            {/* <img
                className="lg:hidden sm:block hidden w-full"
                src="https://i.ibb.co/5sZTmHq/Rectangle-116.png"
                alt="Group of people Chilling"
            />
            <img
                className="sm:hidden block w-full"
                src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png"
                alt="Group of people Chilling"
            /> */}
        </div>

        <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
            <div className="w-full xl:w-5/12 lg:w-6/12">
                <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
                    Amanda DiPietrantonio
                </h2>
                <p className="font-normal text-xl leading-6 text-gray-600 mt-4">
                    I’m a self taught baker/cookier venturing on a new
                    adventure. I have spent years practicing my skill and am
                    ready to share my imagination with the world.
                </p>
                <p className="font-normal text-xl leading-6 text-gray-600 mt-6">
                    🧁 I’m a full time Physical Therapist <br />
                    🧁 I love spending time with my family and friends <br />
                    🧁 I married my best friend of 9 years last November <br />
                    🧁 I enjoy traveling to new places <br />
                    🧁 I learned to like football because of Fantasy football
                </p>
            </div>
            <div className="lg:flex items-center w-full lg:w-1/2 ">
                <img
                    className="lg:block hidden w-full rounded-3xl"
                    src={Mandy}
                    alt="people discussing on board"
                />
                <img
                    className="lg:hidden sm:block hidden w-full h-3/4"
                    src="https://i.ibb.co/ZLgK3NQ/Group-788.png"
                    alt="people discussing on board"
                />
                <img
                    className="sm:hidden block w-full"
                    src="https://i.ibb.co/9g2R7Xr/Group-803.png"
                    alt="people discussing on board"
                />
            </div>
        </div>
    </div>
)

export default About
