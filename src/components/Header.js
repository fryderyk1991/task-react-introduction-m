import React from "react";
import Nav from "./Nav";
import Logo from "./Logo"
const Header = () => {
    const headerStyles = {
        height: '40px',
        backgroundColor: "#e7eaf6",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
   
    return (
        <header style={headerStyles}>
            <Logo /> 
           <Nav  />
        </header>
    )
}
export default Header;