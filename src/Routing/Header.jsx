import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'; 
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import AddEmployee from '../components/RestApiCall/AddEmployee';
import Employees from '../components/RestApiCall/Employees';
import AddEmployeeRout from '../components/AddEmployeeRout';
import './css/Header.css';
import ViewEmployee from './ViewEmployee';
import SearchComponent from './SearchComponent';
import Login from '../components/Login';
function Header() {
    
  return (
    <div>
        <BrowserRouter>
        <div class="header_router">
        <Button size="lg" className="btn btn-secondary"><Link to="/home" className=''> Home </Link></Button>
        <Button size="lg" className="btn btn-secondary"> <Link to="/about"> About Us </Link> </Button>
        <Button size="lg" className="btn btn-secondary"><Link to="/contact"> Contact Us </Link> </Button>
        </div>
        <Routes>
                <Route path = "/" element = {<Home/>} />
                <Route path = "/home/" element = {<Home/>}>
                    <Route path = "add-emp" element = {<AddEmployeeRout/>} />
                    <Route path = "view-emp" element = {<ViewEmployee/>} />
                    <Route path = "delete-emp" element = {<Employees/>} />
                    <Route path = "search-emp" element = {<SearchComponent/>} />
                </Route>
                <Route path = "/about" element = {<AboutUs/>} />
                <Route path = "/contact" element = {<ContactUs/>} />
        </Routes>
</BrowserRouter>
    </div>
  )
}

export default Header