import React from 'react'
import Link from "next/link";
import ftb from '../../styles/home/Fromtheblog.module.css'

const Fromtheblog = () => {
    return (
        <section className={ftb.latestBlog}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>From The Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className={ftb.singleLatestBlog}>
                            <img src="img/latest-1.jpg" alt="" />
                            <div className={ftb.latestText}>
                                <div className={ftb.tagList}>
                                    <div className={ftb.tagItem}>
                                        <i className="fa fa-calendar-o" />&nbsp;May 4,2019
                                    </div>
                                    <div className={ftb.tagItem}>
                                        <i className="fa fa-comment-o" />&nbsp;5
                                    </div>
                                </div>
                                <Link href="#">
                                    <h4>The Best Street Style From London Fashion Week</h4>
                                </Link>
                                <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className={ftb.singleLatestBlog}>
                            <img src="img/latest-2.jpg" alt="" />
                            <div className={ftb.latestText}>
                                <div className={ftb.tagList}>
                                    <div className={ftb.tagItem}>
                                        <i className="fa fa-calendar-o" />&nbsp;May 4,2019
                                    </div>
                                    <div className={ftb.tagItem}>
                                        <i className="fa fa-comment-o" />&nbsp;5
                                    </div>
                                </div>
                                <Link href="#">
                                    <h4>Vogue's Ultimate Guide To Autumn/Winter 2019 Shoes</h4>
                                </Link>
                                <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className={ftb.singleLatestBlog}>
                            <img src="img/latest-3.jpg" alt="" />
                            <div className={ftb.latestText}>
                                <div className={ftb.tagList}>
                                    <div className={ftb.tagItem}>
                                        <i className="fa fa-calendar-o" />&nbsp;May 4,2019
                                    </div>
                                    <div className={ftb.tagItem}>
                                        <i className="fa fa-comment-o" />&nbsp;5
                                    </div>
                                </div>
                                <Link href="#">
                                    <h4>How To Brighten Your Wardrobe With A Dash Of Lime</h4>
                                </Link>
                                <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ftb.benefitItems}>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className={ftb.singleBenefit}>
                                <div className={ftb.sbIcon}>
                                    <img src="img/icon-1.png" alt="" />
                                </div>
                                <div className={ftb.sbText}>
                                    <h6>Free Shipping</h6>
                                    <p>For all order over 99$</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={ftb.singleBenefit}>
                                <div className={ftb.sbIcon}>
                                    <img src="img/icon-2.png" alt="" />
                                </div>
                                <div className={ftb.sbText}>
                                    <h6>Delivery On Time</h6>
                                    <p>If good have prolems</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={ftb.singleBenefit}>
                                <div className={ftb.sbIcon}>
                                    <img src="img/icon-1.png" alt="" />
                                </div>
                                <div className={ftb.sbText}>
                                    <h6>Secure Payment</h6>
                                    <p>100% secure payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fromtheblog