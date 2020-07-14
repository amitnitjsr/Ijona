import React, { Component } from 'react';
import './Navbar.css';
import logo from '../Assets/image/Swimstylers logos with text-26.png';
import group from '../Assets/image/Group 225.png';
import basket from '../Assets/image/Group 224.png';
import path from '../Assets/image/Path 1391.png';

class Navbar extends Component {

    render() {
        return (
            <div>
                <div class="nav">
                    <input type="checkbox" id="nav-check" />
                    <div class="nav-header">
                        <div class="nav-title">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                    <div class="nav-btn">
                        <label for="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>

                    <div class="nav-links">
                        <a href="//github.io/jo_geek" target="_blank">
                            <img src={path} atl="path" style={{ width: '20px', height: '20px' }} />
                            ABOUT
                            </a>
                        <a href="http://stackoverflow.com/users/4084003/" target="_blank">SWIM PROGRAMME</a>
                        <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">BRANCHES</a>
                        <a href="https://codepen.io/jo_Geek/" target="_blank">LOCATION</a>
                        <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">FRANCHISE</a>
                        <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">SHOP</a>
                        <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">NEWS</a>

                        <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">
                            <img src={group} alt="group" />
                        </a>
                        <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">
                            <img src={basket} alt="group" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;