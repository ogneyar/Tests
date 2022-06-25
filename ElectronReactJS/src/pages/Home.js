import React from 'react';
import { NavLink } from 'react-router-dom';
import path from 'path-browserify'
import './Home.css'

export const Home = () => {
    return (

        <div className="Home">
            <header className="Home-header" id="header">
                    
                <NavLink 
                    className="NavLink" 
                    to="/tutorials/main"
                >
                    Tutorials
                </NavLink>

                {/* <img src={path.join(__dirname, "/logo512.png")} className="Home-logo" alt="logo" /> */}
                {/* <img src="https://react-tes.herokuapp.com/logo512.png" className="Home-logo" alt="logo" /> */}
                <img 
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" 
                    className="Home-logo" 
                    alt="logo"
                    width="350" 
                />

                <h1 style={{textDecoration: "underline wavy"}}>
                    Home Page
                </h1>
                
            </header>

        </div>

    );
}

