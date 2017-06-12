import React from 'react';

function ProductView(props) {
    const product = props.product;
    return(
        <div className="productView">
            ProductView!
            <img src={product.image} alt=""/>
            <h1>{product.title}</h1>
            <h2>{product.subtitle}</h2>
            <p>{product.description}</p>
            <p>{product.genre}</p>
            <p>{product.age}</p>
            <p>{product.price}</p>
            <button onClick={props.close}>Close</button>
        </div>
    )
}

export default ProductView;