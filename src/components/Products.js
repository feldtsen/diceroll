import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProductView from './ProductView';
import Cart from './Cart';
import { toggleProductViewAction, toggleCartViewAction, removeItemFromCartAction , addToCartAction} from '../actions/actions'

class Products extends Component {
    render(){
        return(
            <div>
                <button className="cartButton" onClick={this.toggleCartView}>Cart {this.props.items.length > 0?`[${this.props.items.length}]`:''}</button>
                <ul className="productsContainer" style={{paddingTop: window.innerHeight * 0.1}}>
                    {
                        this.props.products.allProducts.map((pid)=>{
                            const product = this.props.products[pid];
                            return(
                                <li key={pid} style={{backgroundImage: `url(${product.image})`, height: window.innerHeight / 2}}>
                                    <div>
                                        <h2>{product.title}</h2>
                                        <h3>{product.subtitle}</h3>
                                        <p>{product.genre}</p>
                                    </div>
                                    <button name={pid} onClick={this.toggleProductView}>Read more about {product.title}</button>
                                    <button name={pid} onClick={this.addToCart}>+</button>
                                </li>
                            )
                        })
                    }
                </ul>
                {
                    this.props.viewOpen ? <ProductView close={this.toggleProductView} product={this.props.products[this.props.products.view.pid]} addToCart={this.addToCart}/> : false
                }
                {
                    this.props.cartOpen ? <Cart close={this.toggleCartView} items={this.props.items} products={this.props.products} removeCartItem={this.removeCartItem} sum={this.props.sum}/>: false
                }
            </div>
        )
    }

    toggleProductView = (e) => {
        const viewOpen = this.props.viewOpen;
        this.props.dispatch(toggleProductViewAction(viewOpen, e.target.name));
    };

    toggleCartView = () => {
        const cartOpen = this.props.cartOpen;
        this.props.dispatch(toggleCartViewAction(cartOpen));
    };

    removeCartItem = (e) => {
        let items = this.props.items,
        index = e.target.name;
        items.splice(index, 1);
        const updatedItems = [].concat(items);
        const price = this.props.products[e.target.className].price;
        this.props.dispatch(removeItemFromCartAction(updatedItems, price));
    };

    addToCart = (e) => {
        let items = this.props.items;
        items.push(e.target.name);
        console.log(items);
        const price = this.props.products[e.target.name].price;
        this.props.dispatch(addToCartAction(items, price));
    }

}



function mapStateToProps(state){
    return {
        products: state.products,
        viewOpen: state.products.view.open,
        cartOpen: state.cart.view.open,
        sum: state.cart.sum,
        items: state.cart.items
    }
}

export default connect(mapStateToProps)(Products);
