import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import './Project.css';

function Project({ title, imageUrl, intro, demoLink, direction }) {
    return (
        <Card style={{
            borderRadius: 0, backgroundColor: 'rgb(14, 95, 68)', color: 'white'
        }} elevation={4} >
            <p className={`project__title ${direction === 'rtl' ? 'rtl' : ''}`}>{title}</p>
            <div className={`project ${direction === 'rtl' ? 'rtl' : ''}`}>
                <div className={`project__image ${direction === 'rtl' ? 'rotateRight' : 'rotateLeft'}`}>
                    <Card style={{ height: '100%', width: '100%' }} elevation={20}>
                        <img src={imageUrl} alt="" />
                    </Card>
                </div>

                <div className="project__info">
                    <p>{intro}</p>
                    <p className="demo__link">Check the demo <a href={demoLink} target="__blank">here</a></p>
                </div>
            </div>
        </Card >
    )
}

export default Project
