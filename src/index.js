import $ from 'jquery';
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

ReactDOM.render(<App />, document.getElementById('main'));
