import React from 'react'

const Product = () => {
    return <ProductInfo name="Dede" price="111"/>
};

const ProductInfo = ({name, price}) => {
    return (
        <section>
            <h2>product: {name}</h2>
            <p>Price: {price}</p>
        </section>
    )
}
export default Product
