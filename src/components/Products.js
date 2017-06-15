import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProductView from './ProductView';
import Cart from './Cart';
import {toggleProductViewAction,
toggleCartViewAction,
removeItemFromCartAction ,
addToCartAction,
itemHeightAction,
addNewProductAction,
deleteProductAction,
editProductAction} from '../actions/actions'

class Products extends Component {
    constructor(){
        super();
        this.state = {
            product: {
                title: '',
                subtitle: '',
                description:'',
                genre: '',
                image: '',
                available: '',
                price: '',
                age: '',
                pid: '',
            },
            meta: {
                edit: false,
                editing: false
            }

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
                                <input onChange={this.changeInput} value={this.state.product.title} type="text" name="title" placeholder="title"/>
                                <input onChange={this.changeInput} value={this.state.product.subtitle} type="text" name="subtitle" placeholder="subtitle"/>
                                <input onChange={this.changeInput} value={this.state.product.genre} type="text" name="genre" placeholder="genre"/>
                                <input onChange={this.changeInput} value={this.state.product.image} type="text" name="image" placeholder="image url"/>
                                <input onChange={this.changeInput} value={this.state.product.description} type="text" name="description" placeholder="description"/>
                                <input onChange={this.changeInput} value={this.state.product.available} type="number" name="available" placeholder="available"/>
                                <input onChange={this.changeInput} value={this.state.product.price} type="text" name="price" placeholder="price"/>
                                <input onChange={this.changeInput} value={this.state.product.age} type="number" name="age" placeholder="age"/>
                                {
                                    this.state.meta.edit? <input type="submit" className="doneEditButton" value="Done editing" onClick={this.editProduct}/>: <input className="addNewProductButton" onClick={this.addNewProduct} type="submit" value="add product"/>
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
                                    {this.props.fakeAdminStatus?!this.state.meta.edit?<input type="submit" name={pid} onClick={this.deleteProduct} className="delete" defaultValue="delete" />:'': ''}
                                    {this.props.fakeAdminStatus?!this.state.meta.edit?<input type="submit" name={pid} onClick={this.setEditInformation} className="edit" defaultValue="edit" />:'': ''}
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
        pid = e.target.className,
        price = this.props.products[pid].price;
        const data = {products: {...this.props.products, allProducts:[...this.props.products.allProducts]}, items: [...updatedItems], sum: this.props.sum - this.props.products[pid].price};
        const past = [...this.props.past, data];
        this.props.dispatch(removeItemFromCartAction(updatedItems, price, pid, past));
    };

    addToCart = (e) => {
        let items = this.props.items;
        const pid = e.target.name;
        if(this.props.products[pid].available !== 0){
            const data = {products: {...this.props.products, allProducts:[...this.props.products.allProducts]}, items: [...this.props.items,  pid], sum: this.props.sum + this.props.products[pid].price};
            const past = [...this.props.past, data];
            items.push(pid);
            const price = this.props.products[pid].price;
            this.props.dispatch(addToCartAction(items, price, pid, past));
        }
    };

    changeInput = (e) => {
        let value = e.target.value;
        if(e.target.name === 'age' || e.target.name === 'price' || e.target.name === 'available')
            value = Number(value);
        let inputChange = this.state.product;
        inputChange[e.target.name] = value;
        this.setState(inputChange);
    };

    addNewProduct = () => {
        if(this.state.product.title !== '') {
            let newPid = (new Date().getTime());
            let newData = this.state.product;
            const products = Object.assign(this.props.products, {[newPid]: newData});
            let allProducts = this.props.products.allProducts;
            allProducts.push(newPid);
            const data = {products: {...this.props.products, [newPid]: {...this.state.product, pid: newPid}, allProducts:[...this.props.products.allProducts]}, items: {...this.props.items}, sum: this.props.sum};
            const past = [...this.props.past, data];
            this.props.dispatch(addNewProductAction(products, newPid, past));
        }
    };

    deleteProduct = (e) => {
        const productPid = Number(e.target.name);
        let products = this.props.products;
        const index = products.allProducts.indexOf(productPid);
        delete products[productPid];
         products.allProducts.splice(index, 1);
        const data = {products: {...products, allProducts:[...products.allProducts]}, items: [], sum: 0};
        const past = [...this.props.past, data];
        this.props.dispatch(deleteProductAction(products, past));

    };

    editProduct = () => {
        const newProduct = this.state.product;
        this.setState({
            product: {title: '', subtitle: '', description:'', genre: '', image: '', available: '', price: '', age: ''},
            meta: {edit: false}
        });
        this.props.dispatch(editProductAction(newProduct));
    };

    setEditInformation = (e) => {
        const pid = e.target.name,
            product = this.props.products[pid];
        let newState = this.state;
        newState.product = product;
        newState.meta.edit = true;
        this.setState(newState);
    };

    responsiveChecker = () => {
        const height = window.innerHeight;
        this.props.dispatch(itemHeightAction(height))
    };
}



function mapStateToProps(state){
    return {
        products: state.products,
        past: state.past,
        viewOpen: state.products.view.open,
        cartOpen: state.cart.view.open,
        sum: state.cart.sum,
        items: state.cart.items,
        fakeAdminStatus: state.fakeAdmin.loggedIn,
        itemHeight: state.meta.height,
    }
}

export default connect(mapStateToProps)(Products);
