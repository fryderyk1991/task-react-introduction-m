import React from "react";

class Gallery extends React.Component {
    render() {
        const styles = {
            marginTop: '10px',
            color: 'white',
            padding: '0 10px',
            listStyle: 'none'
        }
       const { gallery } = this.props;
       const galleryItems = gallery.map(item => 
        <li>
            <h4>{item.author}</h4>
            <a href={item.imageSrc}>link do zdjęcia</a>
        </li>
        )
        return (
           <ul style={styles}>{galleryItems}</ul>
        )
    }
}

export default Gallery;