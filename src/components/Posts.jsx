import React from 'react'
import Item from './Item'
import '../styles/Posts.css'

const Posts = (props) => {
    const posts = ['post 1', 'post 2', 'post 3', 'post 4', 'post 5', 'post 6', 'post 7', 'post 8', 'post 9', 'post 10'];

    const renderPosts = arr => {
        return (
            arr.map((elem) => {
                return <Item
                    value={elem}
                    onClick={() => console.log(elem)}
                />
            })
        )
    };

    const showPosts = index => {
        props.setVisible(index);
    };

    return(
        <div className='Posts'>
            <h2 className='section-header' onClick={() => showPosts(2)}>Posts</h2>
            <div>
                {props.isVisible === 2 ? renderPosts(posts) : null}
            </div>
        </div>
    )
};

export default Posts;
