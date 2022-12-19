import React from 'react'
import styles from '../styles/login-register.module.css'

const Resetpassword = () => {
    return (
        <div className={styles.registerLoginSection}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className={styles.loginForm}>
                            <h2>Reset Password</h2>
                            <form action="#">
                                <div className={styles.groupInput}>
                                    <label for="username">Username or email address *</label>
                                    <input type="text" id="username" />
                                </div>
                                <button type="submit" className={[styles.loginBtn, styles.siteBtn].join(" ")}>Reset Password</button>
                            </form>
                            <div className={styles.switchLogin}>
                                <a href="./register" className={styles.orLogin}>Or Create An Account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resetpassword