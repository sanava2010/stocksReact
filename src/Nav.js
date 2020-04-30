import React from 'react'
import {Navbar} from 'react-bootstrap'
function Nav()
{
    return(
    <div className="main-nav-bar">
        <Navbar bg="#fe8520"  height="70">
            <Navbar.Brand href="https://www.delightrewards.com/">
                <img
                alt=""
                src="/footer-logo.png"
                width="45px"
                height="40px"
                className="navImg"
                />
            </Navbar.Brand>
            <Navbar.Brand href="https://www.delightrewards.com/">
            <img 
                src="/logoResize.png" 
                alt=""
                width="160px"
                height="40px"
                
                />
                
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Stock Market Prices
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    </div>
    )
}

export default Nav