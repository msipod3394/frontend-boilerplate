import '../stylesheets/style.scss'; // webpackでコンパイルするため必須. 実際には.jsには展開されない.
// import my from './components/common.js';

import Vue from 'vue';
import VueApp from './VueApp.vue';

new Vue({
  el: '#vue-root',
  render: (h) => h(VueApp),
});

console.log('Hello World!');
