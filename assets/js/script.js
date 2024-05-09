const mobileButton = document.querySelector("#btn-mobile");
const header = document.querySelector("#navbar");
const headerLinks = header.querySelectorAll("a");

const themeTogglerButton = document.querySelector("#theme-toggler");

const contactForm = document.querySelector("#contact-form");
const contactFormEmailInput = contactForm.querySelector("#contact-email");
const contactFormMessageInput = contactForm.querySelector("#contact-message");
const contactFormSubmitButton = contactForm.querySelector("button");

const toast = document.querySelector(".toast");

const EMAIL_SERVICE_ID = "service_svh7f4w";
const EMAIL_TEMPLATE_ID = "template_12gipiu";
const EMAIL_PUBLIC_KEY = "iwzLyfgc_NAdfVZiN";

const TOAST_MESSAGE_TIMER = 2500;

const THEME_STORAGE_KEY = "PORTFOLIO_THEME";
const LIGHT_THEME = "light";
const DARK_THEME = "dark";

function showToast(type, message) {
    toast.classList.add("toast-active", `toast-${type}`);
    toast.querySelector(".toast-text").textContent = message;

    setTimeout(() => {
        toast.classList.remove("toast-active");
    }, TOAST_MESSAGE_TIMER);
}

function loadTheme() {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const theme = storedTheme || DARK_THEME;
    setTheme(theme);
}

function setTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute("data-theme") === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    setTheme(currentTheme);
}

function changeMobileButtonIcon() {
    const isHeaderActive = header.classList.contains("active");

    const mobileButtonLines = document.querySelectorAll("#btn-mobile .line");
    mobileButtonLines.forEach(line => line.classList.toggle('animated', isHeaderActive));

    const newButtonTitle = `${isHeaderActive ? "Fechar" : "Abrir"} menu`;
    mobileButton.setAttribute("title", newButtonTitle);
    mobileButton.setAttribute("aria-expanded", isHeaderActive ? "false" : "true");
}

function resetContactForm() {
    contactFormSubmitButton.innerText = "Enviar mensagem";
    contactForm.reset();
}

function handleContactFormSubmit(event) {
    event.preventDefault();

    const email = contactFormEmailInput.value;
    const message = contactFormMessageInput.value;

    if (!email || !message) return;

    grecaptcha.execute();
}

// function called when recaptcha is validated
function submitFormMessage() {
    const email = contactFormEmailInput.value;
    const message = contactFormMessageInput.value;

    const params = {
        from_email: email,
        message: message,
        "g-recaptcha-response": grecaptcha.getResponse()
    }

    contactFormSubmitButton.innerText = "Carregando...";

    emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, params).then(
        (_response) => {
            showToast("success", "Mensagem enviada com sucesso!");
            resetContactForm();
        },
        (_error) => {
            showToast("error", "Erro ao enviar mensagem");
            resetContactForm();
        },
    );
}

function handleMobileButtonClick() {
    header.classList.toggle("active");
    changeMobileButtonIcon();
}

function handleThemeTogglerButtonClick() {
    toggleTheme();
}

function handleHeaderLinkClick() {
    header.classList.remove("active");
    changeMobileButtonIcon();
}

function initializeEmailJS() {
    emailjs.init({ publicKey: EMAIL_PUBLIC_KEY });
};

function initializeScrollReveal() {
    const sr = ScrollReveal({
        origin: "top",
        distance: "50px",
        duration: 1500,
    });

    sr.reveal(".delay-small", { delay: 200 });
    sr.reveal(".delay-medium", { delay: 300 });
    sr.reveal(".delay-large", { delay: 400 });
    sr.reveal(".interval-small", { interval: 200 });
    sr.reveal(".interval-large", { interval: 300 });
};

function initializeEventHandlers() {
    mobileButton.addEventListener("click", handleMobileButtonClick);
    themeTogglerButton.addEventListener("click", handleThemeTogglerButtonClick);
    headerLinks.forEach(link => link.addEventListener("click", handleHeaderLinkClick));
    contactForm.addEventListener("submit", handleContactFormSubmit);
}

function preloadImages() {
    const images = [
        "assets/images/projects/barbershop.webp",
        "assets/images/projects/ecommerce.webp",
        "assets/images/projects/ferramentas-dev.webp",
        "assets/images/projects/iniciacao-cientifica.webp",
        "assets/images/projects/minezzin.webp",
        "assets/images/projects/rockscape.webp",
        "assets/images/projects/taskflow.webp",
        "assets/images/presentation-image.svg",
        "assets/images/hero-image.svg",
        "assets/images/lezzin.svg"
    ];

    images.forEach(imageURL => {
        (new Image()).src = imageURL;
    });
}

function initializeWindowEvents() {
    initializeEmailJS();
    initializeEventHandlers();
    document.body.classList.add("loaded");
}

function initializeDocumentEvents() {
    preloadImages();
    loadTheme();
    initializeScrollReveal();
}

document.addEventListener("DOMContentLoaded", initializeDocumentEvents);
window.addEventListener("load", initializeWindowEvents);
