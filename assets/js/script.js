const images = document.querySelectorAll("img");
const toast = document.querySelector(".toast");

const header = document.querySelector("header");
const mobileButton = document.querySelector("#btn-mobile");
const navbar = document.querySelector("#navbar");
const navbarLinks = navbar.querySelectorAll("a");

const contactForm = document.querySelector("#contact-form");
const contactFormEmailInput = contactForm.querySelector("#contact-email");
const contactFormMessageInput = contactForm.querySelector("#contact-message");
const contactFormSubmitButton = contactForm.querySelector("button");

const EMAIL_SERVICE_ID = "service_svh7f4w";
const EMAIL_TEMPLATE_ID = "template_12gipiu";
const EMAIL_PUBLIC_KEY = "iwzLyfgc_NAdfVZiN";
const TOAST_MESSAGE_TIMER = 2500;

let isMobile = innerWidth <= 768;

function checkScroll() {
    const isScrollGreaterThanViewport = scrollY > (innerHeight / 2);

    if (isMobile) {
        header.classList.add("show");
        return;
    }

    header.classList.toggle("show", isScrollGreaterThanViewport);
}

function showToast(type, message) {
    toast.classList.add("toast-active", `toast-${type}`);
    toast.querySelector(".toast-text").textContent = message;

    setTimeout(() => {
        toast.classList.remove("toast-active");
    }, TOAST_MESSAGE_TIMER);
}

function changeMobileButtonIcon() {
    const isHeaderActive = navbar.classList.contains("active");

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

function loadImagesAnimations() {
    const loaded = (element) => { element.classList.add("loaded") };

    images.forEach(image => {
        if (image.complete) {
            loaded(image);
        } else {
            image.onload = loaded(image);
        }
    });
}

function handleMobileButtonClick() {
    navbar.classList.toggle("active");
    changeMobileButtonIcon();
}

function handleHeaderLinkClick() {
    navbar.classList.remove("active");
    changeMobileButtonIcon();
}

function removeLoader() {
    const loader = document.querySelector(".loader");
    loader.classList.add("loaded");
}

function initializeCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const element = document.querySelector("#copyright-year");

    element.textContent = currentYear.toString();
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
    sr.reveal(".interval-medium", { interval: 300 });

    setTimeout(removeLoader, 500);
};

function initializeEventHandlers() {
    mobileButton.addEventListener("click", handleMobileButtonClick);
    navbarLinks.forEach(link => link.addEventListener("click", handleHeaderLinkClick));
    contactForm.addEventListener("submit", handleContactFormSubmit);
}

function initializeWindowEvents() {
    initializeScrollReveal();
    initializeEmailJS();
    loadImagesAnimations();
    initializeCopyrightYear();
    initializeEventHandlers();
    checkScroll();
}

window.addEventListener("load", initializeWindowEvents);


window.addEventListener("resize", function () {
    isMobile = innerWidth <= 768;
    checkScroll();
});


window.addEventListener("scroll", function () {
    checkScroll();
});
