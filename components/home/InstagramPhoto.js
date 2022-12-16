import React from 'react'
import Link from "next/link";
import InstPhoto from '../../styles/home/InstagramPhoto.module.css'

const InstagramPhoto = () => {
    return (
        <div className={InstPhoto.instagramPhoto}>
            <div className={InstPhoto.instaItem} style={{backgroundImage: "url(img/insta-1.jpg)"}}>
                <div className={InstPhoto.insideText}>
                    <i className="ti-instagram"></i>
                    <h5><Link href="#">colorlib_Collection</Link></h5>
                </div>
            </div>
            <div className={InstPhoto.instaItem} style={{backgroundImage: "url(img/insta-2.jpg)"}}>
                <div className={InstPhoto.insideText}>
                    <i className="ti-instagram"></i>
                    <h5><Link href="#">colorlib_Collection</Link></h5>
                </div>
            </div>
            <div className={InstPhoto.instaItem} style={{backgroundImage: "url(img/insta-3.jpg)"}}>
                <div className={InstPhoto.insideText}>
                    <i className="ti-instagram"></i>
                    <h5><Link href="#">colorlib_Collection</Link></h5>
                </div>
            </div>
            <div className={InstPhoto.instaItem} style={{backgroundImage: "url(img/insta-4.jpg)"}}>
                <div className={InstPhoto.insideText}>
                    <i className="ti-instagram"></i>
                    <h5><Link href="#">colorlib_Collection</Link></h5>
                </div>
            </div>
            <div className={InstPhoto.instaItem} style={{backgroundImage: "url(img/insta-5.jpg)"}}>
                <div className={InstPhoto.insideText}>
                    <i className="ti-instagram"></i>
                    <h5><Link href="#">colorlib_Collection</Link></h5>
                </div>
            </div>
            <div className={InstPhoto.instaItem} style={{backgroundImage: "url(img/insta-6.jpg)"}}>
                <div className={InstPhoto.insideText}>
                    <i className="ti-instagram"></i>
                    <h5><Link href="#">colorlib_Collection</Link></h5>
                </div>
            </div>
        </div>
    )
}

export default InstagramPhoto