import React from 'react'
import '../styles/Products.css'

const Products = ({tab, setTab}) => {

    return(
        <>
            <div className='Products'>
                <h2 className='section-header'  onClick={() => setTab(tab)}>Products</h2>
            </div>
        </>
    )
};

export default Products;
