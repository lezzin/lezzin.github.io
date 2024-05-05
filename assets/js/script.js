const mobileButton = document.querySelector("#btn-mobile");
const header = document.querySelector("#navbar");
const headerLinks = header.querySelectorAll("a");

const themeTogglerButton = document.querySelector("#theme-toggler");

const contactForm = document.querySelector("#contact-form");
const contactFormEmailInput = contactForm.querySelector("#contact-email");
const contactFormMessageInput = contactForm.querySelector("#contact-message");
const contactFormSubmitButton = contactForm.querySelector("button");

const toast = document.querySelector(".toast");

const EMAIL_SERVICE_ID = "service_65278fy";
const EMAIL_TEMPLATE_ID = "template_ekqvr1p";

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
    emailjs.init({ publicKey: "w4ibtr02pG80RpOng" });
};

function initializeEventHandlers() {
    mobileButton.addEventListener("click", handleMobileButtonClick);
    themeTogglerButton.addEventListener("click", handleThemeTogglerButtonClick);
    headerLinks.forEach(link => link.addEventListener("click", handleHeaderLinkClick));
    contactForm.addEventListener("submit", handleContactFormSubmit);
}

function initialize() {
    initializeEmailJS();
    initializeEventHandlers();
}

document.addEventListener("DOMContentLoaded", loadTheme);
window.addEventListener("load", initialize);