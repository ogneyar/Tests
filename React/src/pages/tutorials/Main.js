import React from 'react'
import './Main.css'

const Main = () => {
    // eslint-disable-next-line
    function ChangeColor(e) {
        e.preventDefault()
        let Element = e.target
        if (Element.style.color === 'green') Element.style.color = 'red';
        else Element.style.color = 'green';
        return false;
    }

    return (
        <div id="Main">
            <a href="/" onClick={e => ChangeColor(e)}>
                Изменить цвет
            </a>
            <h1 className="h1">
                This main Tutorial page
            </h1>
        </div>
    )
}

export default Main
