import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import axios from 'axios';

let str = '';
let num = 1;
// let num = 1;
// kanye(() => {
//   axios.get('https://api.kanye.rest').then(response => {
//     str = response.data;
//     console.log(str);
//   });
//   $('#main').html(str);
// });

num = Math.floor(Math.random() * 2 + 1)


if (num === 1) {
    axios.get('https://api.kanye.rest').then((response) => {
    str = JSON.stringify(response.data.quote);
    $('#main').text(str);
    });
} else {
    axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes').then((response) => {
    str = JSON.stringify(response.data);
    $('#main').text(str);
    });
}
axios.get('https://api.tronalddump.io/random/quote', {headers: {'accept': 'application/hal+json'}}).then((response) => {
    str = JSON.stringify(response.data);
    console.log(str);
    $('#main2').text(str);
    });

const App = () => <div className="test">Hey</div>;

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';

import App from './components/app';



// this creates the store with the reducers, and does some other stuff to initialize devtools
// boilerplate to copy, don't have to know
const store = createStore(reducers, {}, compose(
  applyMiddleware(),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
));

// we now wrap App in a Provider
ReactDOM.render(
  <Provider store={store}>

    <App />
  </Provider>,
  document.getElementById('main'),
);


// ReactDOM.render(<App />, document.getElementById('main'));
