import React, { FC } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

interface ReviewsProps {}

const Reviews: FC<ReviewsProps> = () => {
    const [open, setOpen] = React.useState(false)
    const Review1 = require('../../assets/review-1.PNG')
    const Review2 = require('../../assets/review-2.PNG')
    const Review3 = require('../../assets/review-3.PNG')
    const Review4 = require('../../assets/review-4.PNG')
    const Review5 = require('../../assets/review-5.PNG')
    const Review6 = require('../../assets/review-6.PNG')
    const Review7 = require('../../assets/review-7.PNG')
    const Review8 = require('../../assets/review-8.PNG')
    const Review9 = require('../../assets/review-9.PNG')

    return (
        <div className="flex justify-center">
            {/* <button type="button" onClick={() => setOpen(true)}>
                Open Lightbox
            </button> */}
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="bg-rose-400 hover:bg-rose-600 m-8 px-5 py-4 text-white font-bold border border-rose-600 rounded"
            >
                See My Reviews
            </button>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: Review1 },
                    { src: Review2 },
                    { src: Review3 },
                    { src: Review4 },
                    { src: Review5 },
                    { src: Review6 },
                    { src: Review7 },
                    { src: Review8 },
                    { src: Review9 },
                ]}
            />
        </div>
    )
}
export default Reviews
