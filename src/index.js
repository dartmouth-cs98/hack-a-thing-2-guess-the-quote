import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

let str = '';
let num = 1;

setInterval(() => {
  str = `You've been on this page for ${num} seconds`;
  $('#main').html(str);
  num += 1;
}, 1000);

const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));
