import React from "react"

import './index.css'

export const Header = () => {
    return (
<div className='header'> 
        <div className="left-nav">
            <p className="color-1">E-<p className="color-2">sheba</p></p>
        </div>
        <div className='middle-nav'>
            <p className="middle-nav-item active">Home</p>
            <p className="middle-nav-item">About</p>
            <p className="middle-nav-item">Application</p>
            <p className="middle-nav-item">History</p>
        </div>
            <div className='left-nav'>
                <button className='log-in-btn'> <p className="color-2">login</p>
                </button>
                <button className='sign-up-btn'> Sign up
                </button>
            </div>
        </div>
    )
}