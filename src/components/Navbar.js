import React, {Component} from "react";
import './Navbar.css'

class Navbar extends Component{
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Login</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">SignUp</a></li>

                    </ul>
                </div>
            </nav>

        )

}}
export default Navbar;
