import React from "react";


class Post extends React.Component {
    render() {
        const style = {
            marginTop: '10px',
            color: 'white',
            padding: '0 10px'
        }
        const { post } = this.props;
       return (
            <article style={style}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <p>{post.author}</p>
                <p>{post.created}</p>
            </article>
       );
        
    }
}

export default Post;