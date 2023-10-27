import React from "react";
import Category from "./Category";
const ContentRight = () => {
    const postsArr = [
        {title: 'Hello React',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, asperiores.',
        author: 'Fryderyk Jellinek',
        created: '2023-10-27 23:13:08'},
        {title: 'Hello JS',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, asperiores.',
        author: 'Joe louis',
        created: '2023-10-27 23:13:08'},
        {title: 'Hello Git',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, asperiores.',
        author: 'Andrzej Andrzej',
        created: '2023-10-27 23:13:08'},
    ]
    const contentRightStyles = {
        height: '400px',
        width: '30%',
        backgroundColor: '#00334e',
    }
    return (
        <div style={contentRightStyles}>
            <Category arr={ postsArr }/>
        </div>
    )
}

export default ContentRight;