import Lenis from 'lenis';
import 'lenis/dist/lenis.css'

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

export default function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

