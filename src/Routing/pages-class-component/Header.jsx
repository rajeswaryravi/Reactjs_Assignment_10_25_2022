import React from 'react'; 
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import { BrowserRouter as Router,Routes, Route, Link, Outlet} from 'react-router-dom';
class Header extends React.Component {
    render() {
        return (<Router>
                    <React.Fragment>
                        <Link to="/home">Home</Link> |
                        <Link to="/about"> About Us </Link> |
                        <Link to="/contact"> Contact Us </Link>
                        <Routes>
                        <Route exact path = "/" element = {<Home/>} />
                        <Route path = "/home" element = {<Home/>} />
                        <Route path = "/about" element = {<About/>} />
                        <Route path = "/contact" element = {<ContactUs/>} />
                        </Routes>
                        
                    </React.Fragment>
                </Router>)
    }
}
export default Header;
