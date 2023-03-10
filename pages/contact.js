import React from 'react'
import styles from '../styles/contact.module.css'

const Contact = () => {
  return (
    <>
      <div className={styles.map}>
        <div className="container">
          <div className={styles.mapInner}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48158.305462977965!2d-74.13283844036356!3d41.02757295168286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e440473470d7%3A0xcaf503ca2ee57958!2sSaddle%20River%2C%20NJ%2007458%2C%20USA!5e0!3m2!1sen!2sbd!4v1575917275626!5m2!1sen!2sbd" height="610" style={{ border: 0 }} allowFullScreen="">
            </iframe>
            <div className={styles.icon}>
              <i className="fa fa-map-marker"></i>
            </div>
          </div>
        </div>
      </div>


      <section className={styles.contactSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className={styles.contactTitle}>
                <h4>Contacts Us</h4>
                <p>Contrary to popular belief, Lorem Ipsum is simply random text. It has roots in a piece of
                  classNameical Latin literature from 45 BC, maki years old.</p>
              </div>
              <div className={styles.contactWidget}>
                <div className={styles.cwItem}>
                  <div className={styles.ciIcon}>
                    <i className="ti-location-pin"></i>
                  </div>
                  <div className={styles.ciText}>
                    <span>Address:</span>
                    <p>60-49 Road 11378 New York</p>
                  </div>
                </div>
                <div className={styles.cwItem}>
                  <div className={styles.ciIcon}>
                    <i className="ti-mobile"></i>
                  </div>
                  <div className={styles.ciText}>
                    <span>Phone:</span>
                    <p>+65 11.188.888</p>
                  </div>
                </div>
                <div className={styles.cwItem}>
                  <div className={styles.ciIcon}>
                    <i className="ti-email"></i>
                  </div>
                  <div className={styles.ciText}>
                    <span>Email:</span>
                    <p><a href="mailto:hello.colorlib@gmail.com">hello.colorlib@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className={styles.contactForm}>
                <div className={styles.leaveComment}>
                  <h4>Leave A Comment</h4>
                  <p>Our staff will call back later and answer your questions.</p>
                  <form action="#" className={styles.commentForm}>
                    <div className="row">
                      <div className="col-lg-6">
                        <input type="text" placeholder="Your name" />
                      </div>
                      <div className="col-lg-6">
                        <input type="text" placeholder="Your email" />
                      </div>
                      <div className="col-lg-12">
                        <textarea placeholder="Your message"></textarea>
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
    </>
  )
}

export default Contact