import React from 'react'
import mwk from '../../styles/home/Mwk.module.css'

const Mwk = () => {
    return (
        <div className={mwk.bannerSection}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className={mwk.singleBanner}>
                            <img src="img/banner-1.jpg" alt="" />
                            <div className={mwk.innerText}>
                                <h4>Men’s</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={mwk.singleBanner}>
                            <img src="img/banner-2.jpg" alt="" />
                            <div className={mwk.innerText}>
                                <h4>Women’s</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={mwk.singleBanner}>
                            <img src="img/banner-3.jpg" alt="" />
                            <div className={mwk.innerText}>
                                <h4>Kid’s</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mwk