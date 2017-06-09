import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/reducer';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

const initialState = {
    history: {

    },
    products: {
        0: {
            pid: 0,
            title: 'Munchkin',
            subtitle: 'original',
            genre: 'Adventure',
            image: './pics/munchkin.jpg',
            description: 'test info',
            price: 500,
            age: 10

        },
        1: {
            pid: 1,
            title: 'Carcassonne',
            subtitle: 'original',
            genre: 'Strategy',
            image: './pics/carcassonne.jpg',
            price: 200,
            age: 8

        },
        2: {
            pid: 2,
            title: 'D&D',
            subtitle: 'original',
            genre: 'Adventure',
            image: './pics/dd.jpg',
            price: 800,
            age: 10

        },
        allProducts: [0, 1, 2]
    },
    view: {},
    cart: {}
    },
store = createStore(rootReducer, initialState);

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);
registerServiceWorker();
