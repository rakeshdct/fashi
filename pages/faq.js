import React from 'react'
import styles from '../styles/faq.module.css'

const Faq = () => {
    return (
        <div className={styles.faqSection}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={styles.faqAccordin}>
                            <div className={styles.accordion} id="accordionExample">
                                <div className={styles.card}>
                                    <div className={[styles.cardHeading, styles.active].join(" ")}>
                                        <a className="active" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true">
                                            Is There Anything I Should Bring?
                                        </a>
                                    </div>
                                    <div id="collapseOne" className={[styles.collapse, styles.show].join(" ")} data-parent="#accordionExample">
                                        <div className={styles.cardBody}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.card}>
                                    <div className={styles.cardHeading}>
                                        <a data-toggle="collapse" data-target="#collapseTwo">
                                            Where Can I Find Market Research Reports?
                                        </a>
                                    </div>
                                    <div id="collapseTwo" className={styles.collapse} data-parent="#accordionExample">
                                        <div className={styles.cardBody}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.card}>
                                    <div className={styles.cardHeading}>
                                        <a data-toggle="collapse" data-target="#collapseThree">
                                            Where Can I Find The Wall Street Journal?
                                        </a>
                                    </div>
                                    <div id="collapseThree" className={styles.collapse} data-parent="#accordionExample">
                                        <div className={styles.cardBody}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq