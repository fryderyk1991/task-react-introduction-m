import React from "react";
import ContentLeft from './ContentLeft';
import ContentMain from "./ContentMain";
import ContentRight from "./ContentRight";
const Content = () => {
    const contentStyles = {
        minHeight: '600px',
        backgroundColor: "#a2a8d3",
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
    return (
        <section style={contentStyles}>
            <ContentLeft />
            <ContentMain />
            <ContentRight />
        </section>
    )
}

export default Content;