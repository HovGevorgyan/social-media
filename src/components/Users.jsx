import React from 'react'
import '../styles/Users.css';

const Users = ({setTab, tab}) => {

    return(
        <>
            <div className='Users'>
                <h2 className='section-header' onClick={() => setTab(tab)}>Users</h2>
            </div>
        </>
    )
};

export default Users;
