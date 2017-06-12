import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProductView from './ProductView';
import { toggleProductViewAction } from '../actions/actions'

class Products extends Component {
    render(){
        return(
            <div>
                <h3>Products</h3>
                <ul className="productsContainer">
                    {
                        this.props.products.allProducts.map((pid)=>{
                            const product = this.props.products[pid];
                            return(
                                <li key={pid} style={{backgroundImage: `url(${product.image})`}}>
                                    <div>
                                        <h2>{product.title}</h2>
                                        <h3>{product.subtitle}</h3>
                                        <p>{product.genre}</p>
                                    </div>
                                    <button name={pid} onClick={this.toggleProductView}>Read more about {product.title}</button>
                                </li>
                            )
                        })
                    }
                </ul>
                {
                    this.props.viewOpen ? <ProductView close={this.toggleProductView} product={this.props.products[this.props.products.view.pid]} /> : false
                }
            </div>
        )
    }

    toggleProductView = (e) => {
        const viewOpen = this.props.viewOpen;
        this.props.dispatch(toggleProductViewAction(viewOpen, e.target.name));
    };

}



function mapStateToProps(state){
    return {
        products: state.products,
        viewOpen: state.products.view.open
    }
}

export default connect(mapStateToProps)(Products);
