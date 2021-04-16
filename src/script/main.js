import my from './my.js';
import '../style/style.scss';

import Vue from 'vue';
import VueApp from './VueApp.vue';

new Vue({
  el: '#vue-root',
  render: (h) => h(VueApp),
});

console.log('Hello World!');

