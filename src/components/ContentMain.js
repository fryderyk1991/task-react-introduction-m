import React from "react";
import Gallery from "./Gallery";
const ContentMain = () => {
    const galleryArr = [
        {imageSrc: 'https://pixabay.com/pl/photos/pies-pies-go%C5%84czy-%C5%82%C4%85ka-pole-natura-8006807/',
        author: 'Jan Kowalski', created: '23-10-2000'},
        {imageSrc: 'https://pixabay.com/pl/photos/pies-topielec-australijski-kelpie-8273965/',
    author: 'Roy Jones', created: '01-10-2002'}  

    ];
    const contentMainStyles = {
        height: '400px',
        width: '20%',
        backgroundColor: '#00334e',
    }
    return (
        <div style={contentMainStyles}>
            <Gallery gallery={ galleryArr }/>
        </div>
    )
}

export default ContentMain;