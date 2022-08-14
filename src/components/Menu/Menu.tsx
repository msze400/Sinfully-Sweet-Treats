import React, { FC } from 'react'

interface MenuProps {}

const SS_Menu = require('../../assets/SS_Menu.jpg')

const Menu: FC<MenuProps> = () => (
    <div className="flex justify-center">
        <img className="max-h-screen my-3" src={SS_Menu} alt="SS Menu"></img>
    </div>
)

export default Menu
