import React, { FC } from 'react'

interface NotificationBannerProps {}

const NotificationBanner: FC<NotificationBannerProps> = () => (
    <div
        id="banner"
        tabIndex={-1}
        className="flex relative z-50 gap-8 justify-center text-center items-start py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 sm:items-center dark:border-gray-700 lg:py-4 dark:bg-rose-400"
    >
        <p className="text-sm font-normal text-white dark:text-white  ">
            Interested in Ordering? Email me at{' '}
            <a
                className="font-bold underline text-primary-600 dark:text-white hover:no-underline"
                href="#"
            >
                sstreatsbyamanda@gmail.com
            </a>{' '}
            or call me at 732-379-0967.
        </p>
    </div>
)

export default NotificationBanner
