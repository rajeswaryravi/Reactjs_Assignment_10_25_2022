import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import './css/Home.css';
function Home() {
  return (
    <div class="section">
      <div className="left_section">
    <Nav defaultActiveKey="/home" className="nav">
      <Nav.Item>
        <Nav.Link href="/home/add-emp" className="navitem">Add Employee</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home/view-emp"  className="navitem">View Employee</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home/delete-emp"  className="navitem" eventKey="disabled">Delete Employee</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home/search-emp"  className="navitem" eventKey="disabled">Search Employee</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
    <div className="right_section">
      <Outlet/>
    </div>
    </div>
  )
}

export default Home