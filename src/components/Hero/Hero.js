import React from 'react'

import './Hero.css';
import { ReactComponent as WebDevLogo } from '../../svg/webdev.svg';

function Hero() {
    return (
        <div className="hero">
            <div className="intro">
                <p>
                    Hi,  I am Satya Vamsi.
                </p>
                <p>
                    I develop web applications.
                </p>
            </div>

            <div className="hero__image">
                <WebDevLogo />
            </div>
        </div>
    )
}

export default Hero
