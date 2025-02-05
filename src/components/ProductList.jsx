import React from 'react'

const ProductList = () => {

    const products = [
        {id: 1, name: "Phone", price:"$699"},
        {id: 2, name: "Laptop", price:"$1200"},
        {id: 3, name: "Headphones", price:"$199"},
    ];



    return (
        <div>
            {products.map(({name, price}) =>
                (
                    <ul key={products.id}>
                        <li>{name}</li>
                        <li>{price}</li>
                    </ul>
                ))}
        </div>
    )
}
export default ProductList
