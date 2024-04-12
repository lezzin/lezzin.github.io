const mobileBtn = document.querySelector("#btn-mobile");
const navbar = document.querySelector("#navbar");
const navbarLinks = navbar.querySelectorAll("a");

const initializeEmailJS = () => {
    emailjs.init({
        publicKey: "w4ibtr02pG80RpOng",
    });
};

const initializeScrollReveal = () => {
    const sr = ScrollReveal({
        origin: "top",
        distance: "50px",
        duration: 2000,
    });

    sr.reveal(".delay-small", { delay: 200 });
    sr.reveal(".delay-medium", { delay: 300 });
    sr.reveal(".delay-large", { delay: 400 });
    sr.reveal(".interval-small", { interval: 200 });
    sr.reveal(".interval-medium", { interval: 300 });
};

const toggleMobileButtonIcon = () => {
    const isActive = navbar.classList.contains("active");
    const lines = ["#line-1", "#line-2", "#line-3"];

    lines.forEach((line) => {
        document.querySelector(line).classList.toggle('animated', isActive);
    });

    mobileBtn.setAttribute("title", `${isActive ? "Fechar" : "Abrir"} menu`);
};

const handleMobileButtonClick = () => {
    navbar.classList.toggle("active");
    toggleMobileButtonIcon();
};

const handleNavbarLinkClick = () => {
    navbar.classList.remove("active");
    toggleMobileButtonIcon();
};

const initializeEventListeners = () => {
    mobileBtn.addEventListener("click", handleMobileButtonClick);
    navbarLinks.forEach(link => {
        link.addEventListener("click", handleNavbarLinkClick);
    });
};

const submitContactForm = () => {
    const email = emailInput.value;
    const message = messageInput.value;

    if (!email || !message) return;

    grecaptcha.execute();
};

const submitMessage = () => {
    const email = emailInput.value;
    const message = messageInput.value;

    const params = {
        from_email: email,
        message: message,
        "g-recaptcha-response": grecaptcha.getResponse()
    };

    contactButton.innerText = "Carregando...";
    emailjs.send(serviceID, templateID, params)
        .then((_response) => {
            showFormMessage("info", "Mensagem enviada com sucesso!");
            resetForm();
        })
        .catch((_error) => {
            showFormMessage("danger", "Erro ao enviar mensagem");
            resetForm();
        });
};

const resetForm = () => {
    contactButton.innerText = "Enviar mensagem";
    contactForm.reset();
    setTimeout(hideFormMessage, 3000);
};

const showFormMessage = (status, message) => {
    contactFormMessage.classList.add(status);
    contactFormMessage.innerText = message;
};

const hideFormMessage = () => {
    contactFormMessage.classList.remove("info", "danger");
};

const initialize = () => {
    initializeEmailJS();
    initializeScrollReveal();
    initializeEventListeners();
};

initialize();
