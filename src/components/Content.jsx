import React from 'react'
import '../styles/Content.css';
import Item from './Item';

const users = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5', 'User 6', 'User 7', 'User 8', 'User 9 ', 'User 10'];
const products = ['product 1', 'product 2', 'product 3', 'product 4', 'product 5', 'product 6', 'product 7', 'product 8', 'product 9', 'product 10'];
const posts = ['post 1', 'post 2', 'post 3', 'post 4', 'post 5', 'post 6', 'post 7', 'post 8', 'post 9', 'post 10'];

const Content = ({tab}) => {
    const renderItems = arr => {
        return (
            arr.map((elem) => {
                return <Item
                    value={elem}
                    onClick={() => {
                        console.log(elem)
                    }}
                />
            })
        )
    };

    return (
        <>
            <div className='content'>
                <h2 className='content-header'>Content</h2>
                {renderItems(tab === 'users' ? users : (tab === 'products' ? products : posts))}
            </div>
        </>
    )
};

export default Content;
