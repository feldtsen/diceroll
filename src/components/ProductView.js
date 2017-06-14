import React from 'react';

function ProductView(props) {
    const product = props.product;
    return(
        <div className="productView">
            <button className="close" onClick={props.close}>X</button>
            <div>
                <img src={product.image} alt=""/>
            </div>
            <div>
                <h1>{product.title}</h1>
                <h2>{product.subtitle}</h2>
                <p>{product.description}</p>
                <p>Available: {product.available}</p>
                <p>{product.genre}</p>
                <p>Age: {product.age}+</p>
                <p className="price">{product.price},- SEK</p>
                <button name={product.pid} onClick={props.addToCart}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductView;