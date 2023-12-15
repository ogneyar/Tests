
import { NavLink } from 'react-router-dom'


const Header = () => {

    return (
        <div>
            <div className="tutorial-link">      
                <NavLink className="NavLink" to="/tutorials/transformOnScroll">transformOnScroll</NavLink>  
                <NavLink className="NavLink" to="/tutorials/main">Tutorial</NavLink>        
                <NavLink className="NavLink" to="/redux">Redux</NavLink>        
                <NavLink className="NavLink" to="/">Главная</NavLink>
            </div>
        </div>
    )
}

export default Header
