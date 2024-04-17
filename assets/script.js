const mobileButton = document.querySelector("#btn-mobile");
const header = document.querySelector("#navbar");
const headerLinks = header.querySelectorAll("a");

const contactForm = document.querySelector("#contact-form");
const formMessage = contactForm.querySelector(".form-message");
const emailInput = contactForm.querySelector("#contact-email");
const messageInput = contactForm.querySelector("#contact-message");
const submitButton = contactForm.querySelector("button");

const EMAIL_SERVICE_ID = "service_65278fy";
const EMAIL_TEMPLATE_ID = "template_ekqvr1p";

function changeMobileButtonIcon() {
    const isHeaderActive = header.classList.contains("active");

    const firstLine = document.querySelector("#line-1");
    const secondLine = document.querySelector("#line-2");
    const thirdLine = document.querySelector("#line-3");

    firstLine.classList.toggle('animated', isHeaderActive);
    secondLine.classList.toggle('animated', isHeaderActive);
    thirdLine.classList.toggle('animated', isHeaderActive);

    const newButtonTitle = `${isHeaderActive ? "Fechar" : "Abrir"} menu`;
    mobileButton.setAttribute("title", newButtonTitle); 
    mobileButton.setAttribute("aria-expanded", isHeaderActive ? "false" : "true");
}

function submitFormMessage() {
    const email = emailInput.value;
    const message = messageInput.value;

    const emailParams = {
        from_email: email,
        message: message,
        "g-recaptcha-response": grecaptcha.getResponse()
    }

    submitButton.innerText = "Carregando...";

    emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, emailParams).then(
        (_response) => {
            showFormMessage("info", "Mensagem enviada com sucesso!");
            resetForm();
        },
        (_error) => {
            showFormMessage("danger", "Erro ao enviar mensagem");
            resetForm();
        },
    );
}

function resetForm() {
    submitButton.innerText = "Enviar mensagem";
    contactForm.reset();
    setTimeout(hideFormMessage, 3000);
}

function showFormMessage(status, message) {
    formMessage.classList.add(status);
    formMessage.innerText = message;
}

function hideFormMessage() {
    formMessage.classList.remove("info", "danger");
}

function handleFormSubmit(event) {
    event.preventDefault();

    const email = emailInput.value;
    const message = messageInput.value;

    if (!email || !message) return;

    grecaptcha.execute();
}

function handleMobileButtonClick() {
    header.classList.toggle("active");
    changeMobileButtonIcon();
}

function initializeEmailJS() {
    emailjs.init({ publicKey: "w4ibtr02pG80RpOng" });
};

function initializeScrollReveal() {
    const sr = ScrollReveal({
        origin: "top",
        distance: "50px",
        duration: 2000,
        opacity: 0
    });

    sr.reveal(".delay-small", { delay: 200 });
    sr.reveal(".delay-medium", { delay: 300 });
    sr.reveal(".delay-large", { delay: 400 });
    sr.reveal(".interval-small", { interval: 200 });
    sr.reveal(".interval-medium", { interval: 300 });
}

function handleHeaderLinkClick() {
    header.classList.remove("active");
    changeMobileButtonIcon();
}

function initializeEventHandlers() {
    mobileButton.addEventListener("click", handleMobileButtonClick);
    headerLinks.forEach(link => {
        link.addEventListener("click", handleHeaderLinkClick);
    });
    contactForm.addEventListener("submit", handleFormSubmit);
}

function initialize() {
    initializeScrollReveal();
    initializeEmailJS();
    initializeEventHandlers();
    document.body.classList.add("loaded");
}

addEventListener("load", initialize);