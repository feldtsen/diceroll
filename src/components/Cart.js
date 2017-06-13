import React from 'react';

function ProductView(props) {
    return(
        <div className="cart">
            <button className="close" onClick={props.close}>X</button>
            <ul>
                {
                    props.items.map((pid, i)=>{
                        const product = props.products[pid];
                        return (
                            <li key={'cart' + pid + i}>
                                <p>{product.title} - {product.subtitle}</p>
                                <p>{product.price},- SEK</p>
                                <button name={i} className={pid} onClick={props.removeCartItem}>Remove</button>
                            </li>
                        )
                    })
                }
                <li><p>SUM</p><p>{props.sum},- SEK</p><p> </p></li>
            </ul>
        </div>
    )
}

export default ProductView;