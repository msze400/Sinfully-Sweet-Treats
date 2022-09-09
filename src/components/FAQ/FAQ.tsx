import React, { FC, useState } from 'react'

interface FaqProps {}

const FAQ_Info: FC<FaqProps> = () => {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    return (
        <div className=" lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
            <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
                FAQ's
            </h1>

            <div className="lg:w-8/12 w-full mx-auto">
                {/* <!-- Question 1 --> */}
                <hr className=" w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

                <div className="w-full md:px-6  ">
                    <div
                        id="mainHeading"
                        className="flex justify-between items-center w-full"
                    >
                        <div className=" ">
                            <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800">
                                {' '}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                                    Q1.
                                </span>{' '}
                                How do I order cookies?
                            </p>
                        </div>
                        <button
                            aria-label="toggler"
                            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                            onClick={() => setOpen(!open)}
                        >
                            <svg
                                className={
                                    'transform ' +
                                    (open ? 'rotate-180' : 'rotate-0')
                                }
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 9L12 15L18 9"
                                    stroke="black"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        id="menu"
                        className={'mt-6 w-full ' + (open ? 'block' : 'hidden')}
                    >
                        <p className="text-base leading-6 text-gray-600 font-normal">
                            Email sstreatsbyamanda@gmail.com. Please include the
                            date of your event, the type of treats you are
                            interested in, the number of desserts you will need,
                            and any inspiration photos!
                        </p>
                    </div>
                </div>

                {/* <!-- Question 2 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6 ">
                    <div
                        id="mainHeading"
                        className="flex justify-between items-center w-full"
                    >
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                {' '}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                                    Q2.
                                </span>{' '}
                                How far in advance should I order?
                            </p>
                        </div>
                        <button
                            aria-label="toggler"
                            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                            onClick={() => setOpen2(!open2)}
                        >
                            <svg
                                className={
                                    'transform ' +
                                    (open2 ? 'rotate-180' : 'rotate-0')
                                }
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 9L12 15L18 9"
                                    stroke="black"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        id="menu"
                        className={
                            'mt-6 w-full ' + (open2 ? 'block' : 'hidden')
                        }
                    >
                        <p className="text-base leading-6 text-gray-600 font-normal">
                            Please allow a minimum 2 weeks prior to your event.
                            Allowing more time before the event will ensure a
                            trial of your requests
                        </p>
                    </div>
                </div>

                {/* <!-- Question 3 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6 ">
                    <div
                        id="mainHeading"
                        className="flex justify-between items-center w-full"
                    >
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                {' '}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                                    Q3.
                                </span>
                                What are your prices?
                            </p>
                        </div>
                        <button
                            aria-label="toggler"
                            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                            onClick={() => setOpen3(!open3)}
                        >
                            <svg
                                className={
                                    'transform ' +
                                    (open ? 'rotate-180' : 'rotate-0')
                                }
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 9L12 15L18 9"
                                    stroke="black"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        id="menu"
                        className={
                            'mt-6 w-full ' + (open3 ? 'block' : 'hidden')
                        }
                    >
                        <p className="text-base leading-6 text-gray-600 font-normal">
                            Please refer to my menu tab for detailed pricing
                            information on sweet treats offered
                        </p>
                    </div>
                </div>

                {/* <!-- Question 4 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6  ">
                    <div
                        id="mainHeading"
                        className="flex justify-between items-center w-full"
                    >
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                {' '}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                                    Q4.
                                </span>
                                What is the minimum order?
                            </p>
                        </div>
                        <button
                            aria-label="toggler"
                            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                            onClick={() => setOpen4(!open4)}
                        >
                            <svg
                                className={
                                    'transform ' +
                                    (open4 ? 'rotate-180' : 'rotate-0')
                                }
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 9L12 15L18 9"
                                    stroke="black"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        id="menu"
                        className={
                            'mt-6 w-full ' + (open4 ? 'block' : 'hidden')
                        }
                    >
                        <p className="text-base leading-6 text-gray-600 font-normal">
                            1 dozen (cookies, cake pops, cupcakes)
                        </p>
                    </div>
                </div>

                {/* <!-- Question 5 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6 ">
                    <div
                        id="mainHeading"
                        className="flex justify-between items-center w-full"
                    >
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                {' '}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                                    Q5.
                                </span>
                                Do you ship?
                            </p>
                        </div>
                        <button
                            aria-label="toggler"
                            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                            onClick={() => setOpen5(!open5)}
                        >
                            <svg
                                className={
                                    'transform ' +
                                    (open5 ? 'rotate-180' : 'rotate-0')
                                }
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 9L12 15L18 9"
                                    stroke="black"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        id="menu"
                        className={
                            'mt-6 w-full ' + (open5 ? 'block' : 'hidden')
                        }
                    >
                        <p className="text-base leading-6 text-gray-600 font-normal">
                            Unfortunately no. Due to the cottage food laws in NJ
                            orders are only allowed to be picked up or
                            delivered.
                        </p>
                    </div>
                </div>

                <hr className=" w-full lg:mt-10 my-8" />

                {/* <!-- Question 6 --> */}

                <div className="w-full md:px-6 ">
                    <div
                        id="mainHeading"
                        className="flex justify-between items-center w-full"
                    >
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                {' '}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                                    Q6.
                                </span>
                                How will I get my order?
                            </p>
                        </div>
                        <button
                            aria-label="toggler"
                            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                            onClick={() => setOpen5(!open5)}
                        >
                            <svg
                                className={
                                    'transform ' +
                                    (open5 ? 'rotate-180' : 'rotate-0')
                                }
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 9L12 15L18 9"
                                    stroke="black"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        id="menu"
                        className={
                            'mt-6 w-full ' + (open5 ? 'block' : 'hidden')
                        }
                    >
                        <p className="text-base leading-6 text-gray-600 font-normal">
                            Pick up or delivery (additional delivery fee applies
                            and is subject to location at the discretion of
                            Sinfully Sweet Treats by Amanda)
                        </p>
                    </div>
                </div>

                <hr className=" w-full lg:mt-10 my-8" />
            </div>
        </div>
    )
}

export default FAQ_Info
