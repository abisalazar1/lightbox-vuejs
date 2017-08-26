import Vue from 'vue';

window.Event = new Vue();

Vue.component('vue-lightbox', require('./components/lightbox.vue'));


var app = new Vue({
    el: '#app'
});


