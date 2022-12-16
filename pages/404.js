import React from 'react'
import pageerror from '../styles/pagenotfound.module.css'

const PageNotFound = () => {
  return (
    <div className={pageerror.nextErrorH1}>
      <div>
        <h1>404</h1>
        <div>
          <h2>This page could not be found.</h2>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound