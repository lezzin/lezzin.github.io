import { createApp } from 'vue';
import App from './App.vue';
import Lenis from 'lenis';

import './assets/style.css';
import 'lenis/dist/lenis.css'

createApp(App).mount('#app');

const lenis = new Lenis({
    duration: 1.2,
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)