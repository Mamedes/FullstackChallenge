import React from 'react'
import {HeaderTop}from './styles'
import Logo from '../../assets/img/coodesh.png'

const Header: React.FC = () => {
    return (
        <HeaderTop>
        <a href="/">
             <img src={Logo} alt="Codesh" />
        </a>
        </HeaderTop>
    )
}
export default Header
