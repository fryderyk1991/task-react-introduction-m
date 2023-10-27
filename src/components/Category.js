import React from "react";

class Category extends React.Component {
    render() {
        const styles = {
            marginTop: '10px',
            color: 'white',
            padding: '0 10px',
            listStyle: 'none'
        }
        const { arr } = this.props;
        const listItems = arr.map(item => 
            <li>{item.title}
            <p>{item.author}</p>
            </li>
        );
        return (
            <ul style={styles}>{listItems}</ul>
        )
    }
}

export default Category;