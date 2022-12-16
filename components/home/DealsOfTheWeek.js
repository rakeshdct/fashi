import React from 'react'
import Link from "next/link";
import dotw from '../../styles/home/DealsOfTheWeek.module.css'

const DealsOfTheWeek = () => {
    return (
        <section className={dotw.dealOfWeek} style={{backgroundImage: "url(img/time-bg.jpg)"}}>
            <div className="container">
                <div className="col-lg-6 text-center">
                    <div className="section-title">
                        <h2>Deal Of The Week</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br /> do ipsum dolor sit amet,
                            consectetur adipisicing elit </p>
                        <div className="product-price">
                            $35.00
                            <span>/ HanBag</span>
                        </div>
                    </div>
                    <div className={dotw.countdownTimer} id="countdown">
                        <div className={dotw.cdItem}>
                            <span>56</span>
                            <p>Days</p>
                        </div>
                        <div className={dotw.cdItem}>
                            <span>12</span>
                            <p>Hrs</p>
                        </div>
                        <div className={dotw.cdItem}>
                            <span>40</span>
                            <p>Mins</p>
                        </div>
                        <div className={dotw.cdItem}>
                            <span>52</span>
                            <p>Secs</p>
                        </div>
                    </div>
                    <Link href="#" className="primary-btn">Shop Now</Link>
                </div>
            </div>
        </section>
    )
}

export default DealsOfTheWeek