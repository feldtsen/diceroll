import React, {Component} from 'react';
import { connect } from 'react-redux';

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
                                    <button>Read more about {product.title}</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}



function mapStateToProps(state){
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Products);
