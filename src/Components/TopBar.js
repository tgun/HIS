import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import LogoImage from '../Content/Logo Blue 2HD.bmp';

const $ = window.$;

export default class TopBarComp extends Component {
    componentDidMount() {
        $(document).foundation();
    }

    render() {
        const logoStyle = {
            width: '106px',
            height: '57px',
            'margin-top': '-19px',
            'margin-bottom': '-10px',
            'margin-right': '10px'
        };

        return (
            <div>
                <div className="title-bar" data-responsive-toggle="responsive-menu" data-hide-for="medium">
                    <button className="menu-icon" type="button" data-toggle="responsive-menu"></button>
                    <div className="title-bar-title">Home Inspection Specilists</div>
                </div>

                <div className="top-bar" id="responsive-menu">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="menu-text">
                                <Link to="/">
                                    <img
                                        src={LogoImage}
                                        alt="HIS"
                                        style={logoStyle}
                                    />

                                    Home Inspection Specialists
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="top-bar-right">
                        <ul className="dropdown menu" data-dropdown-menu>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/faq">F.A.Q.</Link></li>
                            <li><Link to="/reviews">Reviews</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}