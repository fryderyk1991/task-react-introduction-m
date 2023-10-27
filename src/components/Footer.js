import React from "react";
import Nav from './Nav'
import Copyrights from "./Copyrights";
const Footer = () => {
    const footerStyles = {
        minHeight: '100px',
        backgroundColor: '#ececec', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
    return (
        <footer style={footerStyles}>
            <Copyrights />
            <Nav />
        </footer>
    )
}

export default Footer;