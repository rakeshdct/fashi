import React from 'react'
import styles from '../styles/login-register.module.css'

const Login = () => {
    return (
        <div className={styles.registerLoginSection}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className={styles.loginForm}>
                            <h2>Login</h2>
                            <form action="#">
                                <div className={styles.groupInput}>
                                    <label htmlFor="username">Username or email address *</label>
                                    <input type="text" id="username"/>
                                </div>
                                <div className={styles.groupInput}>
                                    <label htmlFor="pass">Password *</label>
                                    <input type="text" id="pass"/>
                                </div>
                                <div className={[styles.groupInput,styles.giCheck].join(" ")}>
                                    <div className={styles.giMore}>
                                        <label htmlFor="save-pass">
                                            Save Password
                                            <input type="checkbox" id="save-pass"/>
                                                <span className={styles.checkmark}></span>
                                        </label>
                                        <a href="./resetpassword" className={styles.forgetPass}>Forget your Password</a>
                                    </div>
                                </div>
                                <button type="submit" className={[styles.loginBtn, styles.siteBtn].join(" ")}>Sign In</button>
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

export default Login