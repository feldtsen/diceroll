import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProductView from './ProductView';
import Cart from './Cart';
import {toggleProductViewAction,
toggleCartViewAction,
removeItemFromCartAction ,
addToCartAction,
itemHeightAction,
addNewProductAction} from '../actions/actions'

class Products extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            subtitle: '',
            description:'',
            genre: '',
            image: '',
            available: 0,
            price: 0,
            age: 0
        }
    }
    render(){
        return(
            <div>
                <button className="cartButton" onClick={this.toggleCartView}>Cart {this.props.items.length > 0?`[${this.props.items.length}]`:''}</button>
                <ul className="productsContainer" style={{paddingTop: window.innerHeight * 0.1}}>
                    {
                        this.props.fakeAdminStatus?
                            <li className="addProduct">
                                <input onChange={this.changeInput} type="text" name="title" placeholder="title"/>
                                <input onChange={this.changeInput} type="text" name="subtitle" placeholder="subtitle"/>
                                <input onChange={this.changeInput} type="text" name="genre" placeholder="genre"/>
                                <input onChange={this.changeInput} type="text" name="image" placeholder="image url"/>
                                <input onChange={this.changeInput} type="text" name="description" placeholder="description"/>
                                <input onChange={this.changeInput} type="number" name="available" placeholder="available"/>
                                <input onChange={this.changeInput} type="text" name="price" placeholder="price"/>
                                <input onChange={this.changeInput} type="number" name="age" placeholder="age"/>
                                {
                                    this.props.edit? <input onChange={()=>console.log("eddiiitittt")} type="submit" value="edit product"/>: <input onClick={this.addNewProduct} type="submit" value="add product"/>
                                }
                            </li>
                            : ""
                    }
                    {
                        this.props.products.allProducts.map((pid)=>{
                            const product = this.props.products[pid];
                            return(
                                <li key={pid} style={{backgroundImage: `url(${product.image})`, height: this.props.itemHeight / 2}}>
                                    <div>
                                        <h2>{product.title}</h2>
                                        <h3>{product.subtitle}</h3>
                                        <p>{product.genre}</p>
                                    </div>
                                    {this.props.fakeAdminStatus?<input type="submit" className="delete" defaultValue="delete" />: ''}
                                    {this.props.fakeAdminStatus?<input type="submit" className="edit" defaultValue="edit" />: ''}
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
    componentDidMount() {
        window.addEventListener('resize', this.responsiveChecker);
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.responsiveChecker);
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
        const updatedItems = [].concat(items),

        price = this.props.products[e.target.className].price;

        this.props.dispatch(removeItemFromCartAction(updatedItems, price));
    };

    addToCart = (e) => {
        let items = this.props.items;
        items.push(e.target.name);
        const price = this.props.products[e.target.name].price;
        this.props.dispatch(addToCartAction(items, price));
    };

    changeInput = (e) => {
        let value = e.target.value;
        if(e.target.name === 'age' || e.target.name === 'price' || e.target.name === 'available')
            value = Number(value);
        this.setState({[e.target.name]: value});
    };

    addNewProduct = () => {
        if(this.state.title !== '') {
            let newPid = (new Date().getTime());
            let newData = this.state;
            const products = Object.assign(this.props.products, {[newPid]: newData});
            let allProducts = this.props.products.allProducts;
            allProducts.push(newPid);
            this.props.dispatch(addNewProductAction(products, newPid));
        }
    };

    responsiveChecker = () => {
        const height = window.innerHeight;
        this.props.dispatch(itemHeightAction(height))
    };
}



function mapStateToProps(state){
    return {
        products: state.products,
        viewOpen: state.products.view.open,
        cartOpen: state.cart.view.open,
        sum: state.cart.sum,
        items: state.cart.items,
        fakeAdminStatus: state.fakeAdmin.loggedIn,
        itemHeight: state.meta.height,
        tempData: state.tempData
    }
}

export default connect(mapStateToProps)(Products);
