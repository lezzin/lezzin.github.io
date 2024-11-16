import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion';

import App from './App.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";

import './assets/style.css';

library.add(fas);

const app = createApp(App);
app.use(MotionPlugin)
app.component('fa', FontAwesomeIcon)
app.mount('#app');