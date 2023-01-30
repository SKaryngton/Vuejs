import { createApp } from 'vue';
import Products from './pages/products';

const app = createApp(Products).mount('#app');

window.app = app;
