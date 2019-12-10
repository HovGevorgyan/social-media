import React from 'react'
import Users from './Users';
import Products from './Products';
import Posts from './Posts';

const Tabs = ({setTab}) => {
    return (
        <>
            <Users
                tab={'users'}
                setTab={setTab}
            />
            <Products
                tab={'products'}
                setTab={setTab}
            />
            <Posts
                tab={'posts'}
                setTab={setTab}
            />
        </>
    )
};

export default Tabs;
