import React from 'react'
import './transformOnScroll.css'

const transformOnScroll = () => {
    
    window.addEventListener("scroll", () => {
        const SkewedOne = document.querySelector('.SkewedOne')
        const SkewedTwo = document.querySelector('.SkewedTwo')
        const value1 = -15 + window.scrollY / 45
        const value2 = 15 + window.scrollY / -45
        if (SkewedOne) SkewedOne.style.transform = `skewY(${value1}deg)`
        if (SkewedTwo) SkewedTwo.style.transform = `skewY(${value2}deg)`
    })

    return (
    <div id="transformOnScroll">
        <section className="bg">
            <h2>Крути</h2>
            <span className="SkewedOne"></span>
            <span className="SkewedTwo"></span>
        </section>
        <section id="section">
            <h2>Какой-то текст тут так на всякий случай</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laudantium deleniti fugiat corporis, aut tempora aliquid assumenda maiores facere eius iure, molestiae expedita, dignissimos vitae! Architecto blanditiis animi voluptates provident!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laudantium deleniti fugiat corporis, aut tempora aliquid assumenda maiores facere eius iure, molestiae expedita, dignissimos vitae! Architecto blanditiis animi voluptates provident!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laudantium deleniti fugiat corporis, aut tempora aliquid assumenda maiores facere eius iure, molestiae expedita, dignissimos vitae! Architecto blanditiis animi voluptates provident!<br/><br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laudantium deleniti fugiat corporis, aut tempora aliquid assumenda maiores facere eius iure, molestiae expedita, dignissimos vitae! Architecto blanditiis animi voluptates provident!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laudantium deleniti fugiat corporis, aut tempora aliquid assumenda maiores facere eius iure, molestiae expedita, dignissimos vitae! Architecto blanditiis animi voluptates provident!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laudantium deleniti fugiat corporis, aut tempora aliquid assumenda maiores facere eius iure, molestiae expedita, dignissimos vitae! Architecto blanditiis animi voluptates provident!<br/><br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laudantium deleniti fugiat corporis, aut tempora aliquid assumenda maiores facere eius iure, molestiae expedita, dignissimos vitae! Architecto blanditiis animi voluptates provident!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laudantium deleniti fugiat corporis, aut tempora aliquid assumenda maiores facere eius iure, molestiae expedita, dignissimos vitae! Architecto blanditiis animi voluptates provident!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laudantium deleniti fugiat corporis, aut tempora aliquid assumenda maiores facere eius iure, molestiae expedita, dignissimos vitae! Architecto blanditiis animi voluptates provident!<br/><br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laudantium deleniti fugiat corporis, aut tempora aliquid assumenda maiores facere eius iure, molestiae expedita, dignissimos vitae! Architecto blanditiis animi voluptates provident!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laudantium deleniti fugiat corporis, aut tempora aliquid assumenda maiores facere eius iure, molestiae expedita, dignissimos vitae! Architecto blanditiis animi voluptates provident!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laudantium deleniti fugiat corporis, aut tempora aliquid assumenda maiores facere eius iure, molestiae expedita, dignissimos vitae! Architecto blanditiis animi voluptates provident!<br/><br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laudantium deleniti fugiat corporis, aut tempora aliquid assumenda maiores facere eius iure, molestiae expedita, dignissimos vitae! Architecto blanditiis animi voluptates provident!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laudantium deleniti fugiat corporis, aut tempora aliquid assumenda maiores facere eius iure, molestiae expedita, dignissimos vitae! Architecto blanditiis animi voluptates provident!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laudantium deleniti fugiat corporis, aut tempora aliquid assumenda maiores facere eius iure, molestiae expedita, dignissimos vitae! Architecto blanditiis animi voluptates provident!</p>
        </section>
    </div>
)}

export default transformOnScroll
