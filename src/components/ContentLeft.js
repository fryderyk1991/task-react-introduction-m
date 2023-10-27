import React from "react";
import Post from "./Post"
const ContentLeft = () => {
    const post = {
        title: 'Hello React',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, asperiores.',
        author: 'Fryderyk Jellinek',
        created: '2023-10-27 23:13:08'
    }
    const contentLeftStyles = {
        height: '400px',
        width: '30%',
        backgroundColor: '#00334e',
    }
    return (
        <div style={contentLeftStyles}>
            <Post post={ post }/>
        </div>
    )
}

export default ContentLeft;