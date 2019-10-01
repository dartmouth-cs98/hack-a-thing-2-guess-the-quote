import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import axios from 'axios';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import $ from 'jquery';
import reducers from './reducers';


// const App = () => <div className="test">Hey</div>;

import App from './components/app';

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

$('.logo').attr('src', 'src/img/ron.jpg');
$('.logo').attr('width', '200px');
$('.logo2').attr('src', 'src/img/kanye.jpg');
$('.logo2').attr('height', '300px');
$('#main2').text('Click the one you think! The real speaker will remain.');

num = Math.floor(Math.random() * 2 + 1);

if (num === 1) {
  axios.get('https://api.kanye.rest').then((response) => {
    str = JSON.stringify(response.data.quote);
    console.log(str);
    $('#main').text(str);
  });
} else {
  axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes').then((response) => {
    str = JSON.stringify(response.data);
    console.log(str);
    $('#main').text(str);
  });
}

$('#ron').on('click', () => {
  if (num === 1) {
    $('.logo').hide();
    console.log('hello!');
  } else {
    $('.logo2').hide();
    console.log('EY!');
  }
});
$('#kanye').on('click', () => {
  if (num === 1) {
    $('.logo').hide();
  } else {
    $('.logo2').hide();
  }
});

// axios.get('https://api.tronalddump.io/random/quote', { headers: { accept: 'application/hal+json' } }).then((response) => {
//   str = JSON.stringify(response.data);
//   console.log(str);
//   $('#main2').text(str);
// });


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
