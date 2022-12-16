import React from 'react'
import Link from "next/link";

const Footer = () => {
    return (
        <div>
            <footer className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer-left">
                                <div className="footer-logo">
                                    <Link href="#"><img src="img/footer-logo.png" alt="" /></Link>
                                </div>
                                <ul>
                                    <li>Address: 60-49 Road 11378 New York</li>
                                    <li>Phone: +65 11.188.888</li>
                                    <li>Email: <Link href="mailto:hello.colorlib@gmail.com">hello.colorlib@gmail.com</Link></li>
                                </ul>
                                <div className="footer-social">
                                    <Link href="#"><i className="fa fa-facebook"></i></Link>
                                    <Link href="#"><i className="fa fa-instagram"></i></Link>
                                    <Link href="#"><i className="fa fa-twitter"></i></Link>
                                    <Link href="#"><i className="fa fa-pinterest"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-lg-1">
                            <div className="footer-widget">
                                <h5>Information</h5>
                                <ul>
                                    <li><Link href="#">About Us</Link></li>
                                    <li><Link href="#">Checkout</Link></li>
                                    <li><Link href="#">Contact</Link></li>
                                    <li><Link href="#">Serivius</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer-widget">
                                <h5>My Account</h5>
                                <ul>
                                    <li><Link href="#">My Account</Link></li>
                                    <li><Link href="#">Contact</Link></li>
                                    <li><Link href="#">Shopping Cart</Link></li>
                                    <li><Link href="#">Shop</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="newslatter-item">
                                <h5>Join Our Newsletter Now</h5>
                                <p>Get E-mail updates about our latest shop and special offers.</p>
                                <form action="#" className="subscribe-form">
                                    <input type="text" placeholder="Enter Your Mail" />
                                    <button type="button">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-reserved">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright-text">

                                    Copyright &copy;2022 All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <Link href="https://colorlib.com" target="_blank">Colorlib</Link>

                                </div>
                                <div className="payment-pic">
                                    <img src="img/payment-method.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer