import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    
    
    return (
            <section className="navbar main-menu">
                <div className="navbar-inner main-menu">
                    <Link to="/" className="logo pull-left">
                        <img
                            src="/assets/themes/images/logo2.png"
                            className="site_logo"
                            alt=""
                        />
                    </Link>
                    <nav id="menu" className="pull-right">
                        <ul>
                            <li>
                                <a href="./products.html">Woman</a>
                                <ul>
                                    <li>
                                        <a href="./products.html">Lacinia nibh</a>
                                    </li>
                                    <li>
                                        <a href="./products.html">Eget molestie</a>
                                    </li>
                                    <li>
                                        <a href="./products.html">Varius purus</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="./products.html">Man</a>
                            </li>
                            <li>
                                <a href="./products.html">Sport</a>
                                <ul>
                                    <li>
                                        <a href="./products.html">Gifts and Tech</a>
                                    </li>
                                    <li>
                                        <a href="./products.html">Ties and Hats</a>
                                    </li>
                                    <li>
                                        <a href="./products.html">Cold Weather</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="./products.html">Hangbag</a>
                            </li>
                            <li>
                                <a href="./products.html">Best Seller</a>
                            </li>
                            <li>
                                <a href="./products.html">Top Seller</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
    );
}

export default Header;