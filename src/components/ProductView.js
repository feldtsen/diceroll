import React from 'react';

function ProductView(props) {
    const product = props.product;
    return (
        <div className="productView">
            <div className="viewProductInformation">
                <button className="close" onClick={props.close}>X</button>
                <div>
                    <img src={product.image} alt=""/>
                </div>
                <div>
                    <h2>{product.title}</h2>
                    <h3>{product.subtitle}</h3>
                    <p>{product.description}</p>
                    <p>Genre: {product.genre}</p>
                    <p>Currently in stock: {product.available}</p>
                    <p>Age: {product.age}+</p>
                    <p className="price">{product.price},- SEK</p>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}


export default ProductView;
