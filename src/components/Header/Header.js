import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // marginBottom: 65
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        backgroundColor: 'white',
        width: 40,
        height: 40,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#0f6044',
        fontWeight: 'bold'
    },
    appBar: {
        backgroundColor: 'rgb(14, 95, 68)',
        color: 'black'
    },
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar elevation={4} className={classes.appBar} position="fixed">
                <Toolbar className={classes.toolBar}>
                    <Typography variant="h6" className={classes.title}>SV</Typography>
                    <div>
                        <IconButton href="https://github.com/satyavamsi" target="_blank"><i style={{ fontSize: 32, color: '#fff' }} className="fa fa-github"></i></IconButton>
                        <IconButton href="https://www.linkedin.com/in/satyavamsi/" target="_blank"><i style={{ fontSize: 32, color: '#fff' }} className="fa fa-linkedin-square"></i></IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
