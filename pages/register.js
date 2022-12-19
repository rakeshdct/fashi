import React from 'react'
import styles from '../styles/login-register.module.css'

const Createaccount = () => {
    return (
        <div className={styles.registerLoginSection}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className={styles.registerForm}>
                            <h2>Register</h2>
                            <form action="#">
                                <div className={styles.groupInput}>
                                    <label htmlFor="username">Username or email address *</label>
                                    <input type="text" id="username"/>
                                </div>
                                <div className={styles.groupInput}>
                                    <label htmlFor="pass">Password *</label>
                                    <input type="text" id="pass"/>
                                </div>
                                <div className={styles.groupInput}>
                                    <label htmlFor="con-pass">Confirm Password *</label>
                                    <input type="text" id="con-pass"/>
                                </div>
                                <button type="submit" className={[styles.loginBtn, styles.siteBtn].join(" ")}>REGISTER</button>
                            </form>
                            <div className={styles.switchLogin}>
                                <a href="./login" className={styles.orLogin}>Or Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Createaccount