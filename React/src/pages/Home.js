
import React from 'react'
import { NavLink } from 'react-router-dom'

import Header from '../components/Header'

import './Home.css'
import logo from '../logo.svg'


export const Home = () => {
    return (
        <div className="Home">
            <Header />
            <header className="Home-header" id="header">
                <NavLink 
                    className="NavLink" 
                    to="/tutorials"
                >
                    Tutorials
                </NavLink>

                <img src={logo} className="Home-logo" alt="logo" />

                <h1 style={{textDecoration: "underline wavy"}}>
                    Home Page
                </h1>
            </header>
        </div>
    )
}

