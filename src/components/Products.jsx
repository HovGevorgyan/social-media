import React from 'react'
import Item from './Item'
import '../styles/Products.css'

const Products = (props) => {
    const products = ['product 1', 'product 2', 'product 3', 'product 4', 'product 5', 'product 6', 'product 7', 'product 8', 'product 9', 'product 10'];

    const renderProducts = arr => {
        return (
            arr.map((elem) => {
                return <Item value={elem}
                onClick={() => {console.log(elem)}}
                />
            })
        )
    };

    const showProducts = index => {
        props.setVisible(index);
    };

    return(
        <>
            <div className="Products">
                <h2 className='section-header' onClick={() => showProducts(1)}>Products</h2>
                <div>
                    {props.isVisible === 1 ? renderProducts(products) : null}
                </div>
            </div>
        </>
    )
};

export default Products;
