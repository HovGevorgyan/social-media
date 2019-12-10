import React from 'react'
import '../styles/Posts.css'

const Posts = ({tab, setTab}) => {

    return(
        <div className='Posts'>
            <h2 className='section-header'  onClick={() => setTab(tab)}>Posts</h2>
            <div>
            </div>
        </div>
    )
};

export default Posts;
