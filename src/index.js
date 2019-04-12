import $ from 'jquery';
import './style.scss';
// import { strict } from 'assert';

let str = '';
let num = 1;

setInterval(() => {
  str = `You've been on this page for ${num} seconds`;
  $('#main').html(str);
  num += 1;
}, 1000);
