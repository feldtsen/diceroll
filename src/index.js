import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/reducer';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

const initialState = {
        meta: {
            height: window.innerHeight,
            historyOpen: false
        },
        fakeAdmin: {
            loggedIn: false
        },
        history: [],
        past: [],
        products: {
            0: {
                pid: 0,
                title: 'D&D',
                subtitle: 'The Fantasy Adventure Board Game',
                genre: 'Adventure',
                image: './pics/dd.jpg',
                description: 'A cooperative dungeon crawl game in which a party of four heroes strives to complete adventures that the Dungeon Master puts before them. Quite similar to HeroQuest.',
                available: 4,
                price: 800,
                age: 10,
            },
            1: {
                pid: 1,
                title: 'Munchkin',
                subtitle: 'original',
                genre: 'Adventure',
                image: './pics/munchkin.jpg',
                description: 'Munchkin is the mega-hit card game about dungeon adventure . . . with none of that stupid roleplaying stuff. You and your friends compete to kill monsters and grab magic items. And what magic items! Don the Horny Helmet and the Boots of Butt-Kicking. Wield the Staff of Napalm . . . or maybe the Chainsaw of Bloody Dismemberment. Start by slaughtering the Potted Plant and the Drooling Slime, and work your way up to the Plutonium Dragon . . .',
                available: 7,
                price: 500,
                age: 10,
            },
            2: {
                pid: 2,
                title: 'Carcassonne',
                subtitle: 'original + tree and river expansion',
                genre: 'Strategy',
                image: './pics/carcassonne.jpg',
                description: 'Carcassonne is a tile-placement game in which the players draw and place a tile with a piece of southern French landscape on it. The tile might feature a city, a road, a cloister, grassland or some combination thereof, and it must be placed adjacent to tiles that have already been played, in such a way that cities are connected to cities, roads to roads, etcetera. Having placed a tile, the player can then decide to place one of his meeples on one of the areas on it: on the city as a knight, on the road as a robber, on a cloister as a monk, or on the grass as a farmer. When that area is complete, that meeple scores points for its owner.',
                available: 7,
                price: 200,
                age: 8,
            },
            3: {
                pid: 3,
                title: 'Junta',
                subtitle: 'The classic game in a new outfit',
                genre: 'Strategy',
                image: './pics/junta.jpg',
                description: "Players compete as the corrupt power elite families of a fictional parody of a stereotypical banana republic (specifically Republica de los Bananas) trying to get as much money as possible into their Swiss bank accounts before the foreign aid money runs out. Fighting in the republic's capital during recurrent coup attempts encompasses most of the game's equipment, rules and playtime. This game-within-the-game is however actually tangential to the players' main goal.",
                available: 4,
                price: 800,
                age: 16,
            },
            4: {
                pid: 4,
                title: 'Dead of Winter',
                subtitle: 'A Crossroads Game',
                genre: 'Strategy',
                image: './pics/deadofwinter.jpg',
                description: 'Dead of Winter: A Crossroads Game, the first game in this series, puts 2-5 players in a small, weakened colony of survivors in a world where most of humanity is either dead or diseased, flesh-craving monsters. Each player leads a faction of survivors with dozens of different characters in the game.',
                available: 11,
                price: 500,
                age: 11,
            },
            5: {
                pid: 5,
                title: 'Warhammer Quest',
                subtitle: 'original',
                genre: 'Adventure',
                image: './pics/warhammerquest.jpg',
                description: 'In Warhammer Quest each player takes the role of a warrior, one of four brave adventurers willing to test their courage in the search for wealth and glory. Each hero comes from a different people. The Barbarian has traveled far from the savage north, a land of bitter cold and ferocious warriors. The Wizard hails from the cities of the Empire, the largest and most important of the realms of men. The Dwarf is drawn by the goldlust for which his race is famous. Dwarfs are grim and rather abrupt, but they are good fighters and loyal friends who remember debts of gratitude as readily as debts of coin. The Elf comes from the green woods of Loren where his kin spend their days hunting and making merry, protected from evil by the strange magic of their land. Elves are incredibly quick and agile, and they are also the best archers in the world.',
                available: 3,
                price: 750,
                age: 10,
            },
            allProducts: [0, 1, 2, 3, 4, 5],
            view: {
                open: false,
                pid: 0
            }
        },
        cart: {
            items: [],
            sum: 0,
            view: {
                open: false
            }
        }
    },
    store = createStore(rootReducer, initialState);

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);
registerServiceWorker();

/*
* legge til/ ta bort -> state til produkter
* edit -> state til produkter
* delete -> state til produkter
*
* */