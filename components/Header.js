import React from 'react'
import Link from "next/link";

const Header = () => {
    return (
        <header className="header-section">
            <div className="header-top">
                <div className="container">
                    <div className="ht-left">
                        <div className="mail-service">
                            <i className=" fa fa-envelope"></i>
                            <Link href="#">hello.colorlib@gmail.com</Link>                           
                        </div>
                        <div className="phone-service">
                            <i className=" fa fa-phone"></i>
                            +65 11.188.888
                        </div>
                    </div>
                    <div className="ht-right">
                        <Link href="./login" className="login-panel"><i className="fa fa-user"></i>Login</Link>
                        <div className="top-social">
                            <Link href="#"><i className="ti-facebook"></i></Link>
                            <Link href="#"><i className="ti-twitter-alt"></i></Link>
                            <Link href="#"><i className="ti-linkedin"></i></Link>
                            <Link href="#"><i className="ti-pinterest"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="inner-header">
                    <div className="row">
                        <div className="col-lg-2 col-md-2">
                            <div className="logo">
                                <Link href="/">
                                    <img src="img/logo.png" alt=""/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <div className="advanced-search">
                                <button type="button" className="category-btn">All Categories</button>
                                <div className="input-group">
                                    <input type="text" placeholder="What do you need?"/>
                                        <button type="button"><i className="ti-search"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-right col-md-3">
                            <ul className="nav-right">
                                <li className="heart-icon">
                                    <Link href="#">
                                        <i className="icon_heart_alt"></i>
                                        <span>1</span>
                                    </Link>
                                </li>
                                <li className="cart-icon">
                                    <Link href="#">
                                        <i className="icon_bag_alt"></i>
                                        <span>3</span>
                                    </Link>
                                    <div className="cart-hover">
                                        <div className="select-items">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className="si-pic"><img src="img/select-product-1.jpg" alt=""/></td>
                                                        <td className="si-text">
                                                            <div className="product-selected">
                                                                <p>$60.00 x 1</p>
                                                                <h6>Kabino Bedside Table</h6>
                                                            </div>
                                                        </td>
                                                        <td className="si-close">
                                                            <i className="ti-close"></i>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="si-pic"><img src="img/select-product-2.jpg" alt=""/></td>
                                                        <td className="si-text">
                                                            <div className="product-selected">
                                                                <p>$60.00 x 1</p>
                                                                <h6>Kabino Bedside Table</h6>
                                                            </div>
                                                        </td>
                                                        <td className="si-close">
                                                            <i className="ti-close"></i>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="select-total">
                                            <span>total:</span>
                                            <h5>$120.00</h5>
                                        </div>
                                        <div className="select-button">
                                            <Link href="#" className="primary-btn view-card">VIEW CARD</Link>
                                            <Link href="#" className="primary-btn checkout-btn">CHECK OUT</Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="cart-price">$150.00</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-item">
                <div className="container">
                    <div className="nav-depart">
                        <div className="depart-btn">
                            <i className="ti-menu"></i>
                            <span>All departments</span>
                            <ul className="depart-hover">
                                <li className="active"><Link href="#">Women’s Clothing</Link></li>
                                <li><Link href="#">Men’s Clothing</Link></li>
                                <li><Link href="#">Underwear</Link></li>
                                <li><Link href="#">Kid's Clothing</Link></li>
                                <li><Link href="#">Brand Fashion</Link></li>
                                <li><Link href="#">Accessories/Shoes</Link></li>
                                <li><Link href="#">Luxury Brands</Link></li>
                                <li><Link href="#">Brand Outdoor Apparel</Link></li>
                            </ul>
                        </div>
                    </div>
                    <nav className="nav-menu mobile-menu">
                        <ul>
                            <li className="active"><Link href="/">Home</Link></li>
                            <li><Link href="./shop">Shop</Link></li>
                            <li><Link href="#">Collection</Link>
                                <ul className="dropdown">
                                    <li><Link href="#">Men's</Link></li>
                                    <li><Link href="#">Women's</Link></li>
                                    <li><Link href="#">Kid's</Link></li>
                                </ul>
                            </li>
                            <li><Link href="./blog">Blog</Link></li>
                            <li><Link href="./contact">Contact</Link></li>
                            <li><Link href="#">Pages</Link>
                                <ul className="dropdown">
                                    <li><Link href="./blog-details">Blog Details</Link></li>
                                    <li><Link href="./shopping-cart">Shopping Cart</Link></li>
                                    <li><Link href="./check-out">Checkout</Link></li>
                                    <li><Link href="./faq">Faq</Link></li>
                                    <li><Link href="./register">Register</Link></li>
                                    <li><Link href="./login">Login</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div id="mobile-menu-wrap"></div>
                </div>
            </div>
        </header>
    )
}

export default Header