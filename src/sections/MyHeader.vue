<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMobile = ref(window.innerWidth <= 768);
const canShow = ref(false);
const isHeaderActive = ref(false);
const mobileButtonTitle = ref("Abrir menu");
const ariaExpanded = ref("false");

function changeMobileButtonIcon() {
    mobileButtonTitle.value = `${isHeaderActive.value ? "Fechar" : "Abrir"} menu`;
    ariaExpanded.value = isHeaderActive.value ? "true" : "false";
}

function handleMobileButtonClick() {
    isHeaderActive.value = !isHeaderActive.value;
    changeMobileButtonIcon();
}

function handleHeaderLinkClick() {
    isHeaderActive.value = false;
    changeMobileButtonIcon();
}

function checkScroll() {
    const isScrollGreaterThanViewport = window.scrollY > (window.innerHeight / 2);

    if (isMobile.value) {
        canShow.value = true;
    } else {
        canShow.value = isScrollGreaterThanViewport;
    }
}

onMounted(() => {
    checkScroll();

    const resizeListener = () => {
        isMobile.value = window.innerWidth <= 768;
        checkScroll();
    };

    const scrollListener = () => {
        checkScroll();
    };

    window.addEventListener("resize", resizeListener);
    window.addEventListener("scroll", scrollListener);

    onUnmounted(() => {
        window.removeEventListener("resize", resizeListener);
        window.removeEventListener("scroll", scrollListener);
    });
});
</script>

<template>
    <header :class="{ show: canShow }">
        <div class="container">
            <a href="#home-section" class="logo" title="Ir para o inicio">
                <img src="/images/lezzin.svg" alt="Logo do website - lezzin" width="80" height="26" />
            </a>

            <button id="btn-mobile" :title="mobileButtonTitle" :aria-expanded="ariaExpanded"
                @click="handleMobileButtonClick">
                <div class="line" :class="{ animated: isHeaderActive }"></div>
                <div class="line" :class="{ animated: isHeaderActive }"></div>
                <div class="line" :class="{ animated: isHeaderActive }"></div>
            </button>

            <nav id="navbar" role="navigation" :class="{ active: isHeaderActive }">
                <a href="#presentation-section" @click="handleHeaderLinkClick"
                    title="Ir para a apresentação">Apresentação</a>
                <a href="#skills-section" @click="handleHeaderLinkClick" title="Ir para as habilidades">Habilidades</a>
                <a href="#projects-section" @click="handleHeaderLinkClick" title="Ir para os projetos">Projetos</a>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: var(--header-index);
    background-color: var(--primary-background);
    border-bottom: 1px solid var(--border-color);
    font-size: 1.8rem;
    transform: translateY(-100%);
    transition: transform .6s ease;
}

header.show {
    transform: translateY(0);
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1080px;
    margin: 0 auto;
    height: 10vh;
}

header nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    gap: .6rem;
}

header nav a {
    padding: .25rem 0.375rem;
}

header nav a::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    margin-top: 0.25rem;
    background-color: var(--font-primary-color);
    transition: .6s ease;
}

header nav a:hover,
header nav a:focus {
    color: var(--font-primary-color);
}

header nav a:hover::after,
header nav a:focus::after {
    width: 100%;
    transition: .6s ease;
}

@media (width <=768px) {
    header nav {
        background: var(--primary-background);
        position: fixed;
        width: 100%;
        right: 0;
        height: 90vh;
        top: 10vh;
        z-index: var(--header-index);
        justify-content: flex-start;
        flex-direction: column;
        text-align: center;
        padding: 2rem 0;
        opacity: 0;
        transform: translateX(100%);
        transition: .6s ease;
    }

    header nav.active {
        transform: translateX(0%);
        opacity: 1;
    }

    header nav a {
        padding: 1rem 2rem;
    }

    header nav a.btn-animated {
        margin-top: .6rem;
        margin-left: 0;
    }
}

.logo {
    display: grid;
    place-items: center;
}

@media (width <=768px) {
    .logo {
        margin-left: 1.6rem;
    }
}

#btn-mobile {
    position: absolute;
    top: 50%;
    right: 1.6rem;
    transform: translateY(-50%);
    width: 4rem;
    aspect-ratio: 1;
    z-index: calc(var(--header-index) + 1);
    cursor: pointer;
    display: none;
}

#btn-mobile .line {
    --padding: .5rem;

    position: absolute;
    left: var(--padding);
    top: 48%;
    width: calc(100% - var(--padding) * 2);
    height: 2px;
    background-color: var(--font-secondary-color);
    transition: .6s ease;
    transform-origin: center;
}

.line:nth-child(1) {
    transform: translateY(-1rem);
    animation-delay: 100ms;
}

.line:nth-child(1).animated {
    transform: rotate(40deg);
}

.line:nth-child(2).animated {
    opacity: 0;
}

.line:nth-child(3) {
    transform: translateY(1rem);
    animation-delay: 250ms;
}

.line:nth-child(3).animated {
    transform: rotate(-40deg);
}

#btn-mobile .clear {
    clear: both;
}

@media (width <=768px) {
    #btn-mobile {
        display: initial;
    }
}
</style>