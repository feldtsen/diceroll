import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProductView from './ProductView'
import Cart from './Cart'
import {viewProductAction, openCartAction, addToCartAction} from '../actions/actions'

class Products extends Component {
    render(){
        return(
            <div>
                <ul className="productsContainer">
                    {
                        this.props.products.allProducts.map((pid)=>{
                            const product = this.props.products[pid];
                            return(
                                <li key={pid} style={{backgroundImage: `url(${product.image})`, height: window.innerHeight/2}}>
                                    <div>
                                        <h2>{product.title}</h2>
                                        <h3>{product.subtitle}</h3>
                                        <p>{product.genre}</p>
                                    </div>
                                    <button name={product.pid} onClick={this.viewProduct}>Read more about {product.title}</button>
                                    <button name={product.pid} onClick={this.addToCart}>+</button>
                                </li>

                            )
                        })
                    }
                </ul>
                {
                    this.props.viewOpen ? <ProductView product={this.props.products[this.props.products.view.pid]} close={this.viewProduct}/>: false
                }
                {
                    this.props.cartOpen ? <Cart close={this.openCart} inCart={this.props.inCart} cartLength={Object.keys(this.props.cart.inCart).length}/>: false
                }
            </div>
        )
    }
    viewProduct = (e) => {
        const viewOpen = !this.props.viewOpen;
        this.props.dispatch(viewProductAction(e.target, viewOpen));
    };

    openCart = (e) => {
        const cartOpen = this.props.cartOpen;
        this.props.dispatch(openCartAction(e.target, cartOpen));
    };

    addToCart = (e) => {
        this.props.dispatch(addToCartAction(e.target));
    };
}



function mapStateToProps(state){
    console.log(state.cart);
    return {
        products: state.products,
        viewOpen: state.products.view.open,
        cartOpen: state.cart.open,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Products);
