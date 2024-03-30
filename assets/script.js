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

const mobileBtn = document.querySelector("#btn-mobile");
const navbar = document.querySelector("#navbar");
const navbarLinks = navbar.querySelectorAll("a");

const skills = document.querySelectorAll(".skill.with_details");
const skillDetails = document.querySelector("#skill-details");
const skillsDetails = {
    "html": "HTML é a linguagem de marcação usada para criar a estrutura básica de uma página da web.",
    "css": "CSS é usado para estilizar páginas da web e torná-las visualmente atraentes.",
    "javascript": "JavaScript é uma linguagem de programação usada para tornar páginas da web interativas e dinâmicas.",
    "php": "PHP é uma linguagem de programação usada principalmente para desenvolvimento web, especialmente para criar aplicativos da web dinâmicos.",
    "mysql": "MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.",
}

function showSkillDetails(skillName) {
    skillDetails.classList.add("active");
    skillDetails.innerHTML = skillsDetails[skillName] ?? "---";
}

function hideSkillDetails() {
    skillDetails.classList.remove("active");
}

function changeMobileButtonIcon() {
    const isActive = navbar.classList.contains("active");

    const line1 = document.querySelector("#line-1");
    const line2 = document.querySelector("#line-2");
    const line3 = document.querySelector("#line-3");

    line1.classList.toggle('animated', isActive);
    line2.classList.toggle('animated', isActive);
    line3.classList.toggle('animated', isActive);

    mobileBtn.setAttribute("title", `${isActive ? "Fechar" : "Abrir"} menu`);
}

skills.forEach(skill => {
    const skillName = skill.querySelector(".skill-name").textContent.toLowerCase();

    skill.addEventListener("mouseover", () => {
        showSkillDetails(skillName);
    });

    skill.addEventListener("mouseout", () => {
        hideSkillDetails();
    });
});

mobileBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    changeMobileButtonIcon();
});

navbarLinks.forEach(link => {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
        changeMobileButtonIcon();
    });
})