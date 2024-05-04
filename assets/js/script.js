const mobileButton = document.querySelector("#btn-mobile");
const header = document.querySelector("#navbar");
const headerLinks = header.querySelectorAll("a");

const themeTogglerButton = document.querySelector("#theme-toggler");

const contactForm = document.querySelector("#contact-form");
const contactFormFeedback = contactForm.querySelector(".form-message");
const contactFormEmailInput = contactForm.querySelector("#contact-email");
const contactFormMessageInput = contactForm.querySelector("#contact-message");
const contactFormSubmitButton = contactForm.querySelector("button");

const EMAIL_SERVICE_ID = "service_65278fy";
const EMAIL_TEMPLATE_ID = "template_ekqvr1p";

const THEME_STORAGE_KEY = "PORTFOLIO_THEME";
const LIGHT_THEME = "light";
const DARK_THEME = "dark";

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
    setTimeout(hideContactFormMessage, 3000);
}

function showContactFormMessage(status, message) {
    contactFormFeedback.classList.add(status);
    contactFormFeedback.innerText = message;
}

function hideContactFormMessage() {
    contactFormFeedback.classList.remove("info", "danger");
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
            showContactFormMessage("info", "Mensagem enviada com sucesso!");
            resetContactForm();
        },
        (_error) => {
            showContactFormMessage("danger", "Erro ao enviar mensagem");
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

function initializeSmoothScroll() {
    // Smooth scroll on mouse wheel
    window.addEventListener('wheel', event => {
        event.preventDefault();

        const deltaY = event.deltaY;
        const scrollValue = deltaY > 0 ? '+=100' : '-=100';

        window.scrollBy({
            top: scrollValue,
            behavior: 'smooth'
        });
    });
    
    // Smooth scroll on arrow keys
    document.addEventListener("keydown", event => {
        const isArrowUp = event.code == "ArrowUp";
        const isArrowDown = event.code == "ArrowDown";

        if (isArrowUp || isArrowDown) {
            event.preventDefault();
            const direction = isArrowUp ? '-=100' : '+=100';
            
            window.scrollBy({
                top: direction,
                behavior: 'smooth'
            });
        }
    });
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
    initializeSmoothScroll();
}

document.addEventListener("DOMContentLoaded", loadTheme);
window.addEventListener("load", initialize);