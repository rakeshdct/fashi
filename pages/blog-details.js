import React from 'react'
import styles from '../styles/blogdetails.module.css'

const Blogdetails = () => {
    return (
        <section className={styles.blogDetails}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={styles.blogDetailsInner}>
                            <div className={styles.blogDetailTitle}>
                                <h2>The Personality Trait That Makes People Happier</h2>
                                <p>travel <span>- May 19, 2019</span></p>
                            </div>
                            <div className={styles.blogLargePic}>
                                <img src="img/blog/blog-detail.jpg" alt="" />
                            </div>
                            <div className={styles.blogDetailDesc}>
                                <p>psum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
                                </p>
                            </div>
                            <div className={styles.blogQuote}>
                                <p>“ Technology is nothing. What's important is that you have a faith in people, that
                                    they're basically good and smart, and if you give them tools, they'll do wonderful
                                    things with them.” <span>- Steven Jobs</span></p>
                            </div>
                            <div className={styles.blogMore}>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img src="img/blog/blog-detail-1.jpg" alt="" />
                                    </div>
                                    <div className="col-sm-4">
                                        <img src="img/blog/blog-detail-2.jpg" alt="" />
                                    </div>
                                    <div className="col-sm-4">
                                        <img src="img/blog/blog-detail-3.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <p>Sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                            <div className={styles.tagShare}>
                                <div className={styles.detailsTag}>
                                    <ul>
                                        <li><i className="fa fa-tags"></i></li>
                                        <li>Travel</li>
                                        <li>Beauty</li>
                                        <li>Fashion</li>
                                    </ul>
                                </div>
                                <div className={styles.blogShare}>
                                    <span>Share:</span>
                                    <div className={styles.socialLinks}>
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.blogPost}>
                                <div className="row">
                                    <div className="col-lg-5 col-md-6">
                                        <a href="#" className={styles.prevBlog}>   
                                            <div className={styles.pbPic}>
                                                <i className="ti-arrow-left"></i>
                                                <img src="img/blog/prev-blog.png" alt="" />
                                            </div>
                                            <div className={styles.pbText}>
                                                <span>Previous Post:</span>
                                                <h5>The Personality Trait That Makes People Happier</h5>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-5 offset-lg-2 col-md-6">
                                        <a href="#" className={styles.nextBlog}>
                                            <div className={styles.nbPic}>
                                                <img src="img/blog/next-blog.png" alt="" />
                                                <i className="ti-arrow-right"></i>
                                            </div>
                                            <div className={styles.nbText}>
                                                <span>Next Post:</span>
                                                <h5>The Personality Trait That Makes People Happier</h5>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.postedBy}>
                                <div className={styles.pbPic}>
                                    <img src="img/blog/post-by.png" alt="" />
                                </div>
                                <div className={styles.pbText}>
                                    <a href="#">
                                        <h5>Shane Lynch</h5>
                                    </a>
                                    <p>Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        amodo</p>
                                </div>
                            </div>
                            <div className={styles.leaveComment}>
                                <h4>Leave A Comment</h4>
                                <form action="#" className={styles.commentForm}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Name" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Email" />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea placeholder="Messages"></textarea>
                                            <button type="submit" className="site-btn">Send message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogdetails