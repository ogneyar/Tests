
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../components/Header'

import './Home.css'
import logo from '../logo.svg'


export const Home = () => {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)

    const addCash = () => {
        dispatch({type: "ADD_CASH", payload: 5})
    }

    const getCash = () => {
        dispatch({type: "GET_CASH", payload: 5})
    }


    return (
        <>
        <Header />
        <div className="Home">
            <header className="Home-header" id="header">
                <NavLink 
                    className="NavLink" 
                    to="/tutorials"
                >
                    Tutorials
                </NavLink>

                <img src={logo} className="Home-logo" alt="logo" />

                <h2 style={{textDecoration: "underline wavy"}}>Home Page</h2>
                <br />
                <div className='Home-box'>
                    <div className='Home-box-cash'>{cash}</div>
                    <button onClick={() => addCash()}>Пополнить счёт</button>
                    <button onClick={() => getCash()}>Снять со счёта</button>
                </div>
                <br />
            </header>
        </div>
        </>
    )
}

