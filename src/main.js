import { createApp } from 'vue';
import raf from './libs/smoothscroll';
import App from './App.vue';

import './assets/style.css';

createApp(App).mount('#app');
requestAnimationFrame(raf);