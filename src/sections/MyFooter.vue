<template>
    <footer>
        <nav class="social-media">
            <a class="btn dark-secondary" href="https://www.linkedin.com/in/leandro-adrian/" target="_blank"
                rel="noopener noreferrer" title="Acessar Linkedin">
                <img src="/icons/linkedin.svg" alt="Logo do linkedin" width="16" height="16">
                <span class="desktop-only">LinkedIn</span>
            </a>
            <a class="btn dark-secondary" href="https://www.instagram.com/leandroadrian_/" target="_blank"
                rel="noopener noreferrer" title="Acessar Instagram">
                <img src="/icons/instagram.svg" alt="Logo do instagram" width="16" height="16">
                <span class="desktop-only">Instagram</span>
            </a>
            <a class="btn dark-secondary" href="https://github.com/lezzin/" target="_blank" rel="noopener noreferrer"
                title="Acessar GitHub">
                <img src="/icons/github.svg" alt="Logo do github" width="16" height="16">
                <span class="desktop-only">GitHub</span>
            </a>
        </nav>

        <blockquote>
            <p class="quote">
                “Programadores e artistas são os únicos profissionais que tem como hobby a própria profissão”
            </p>
        </blockquote>
        <p class="copyright">&copy; <span id="copyright-year">{{ new Date().getFullYear().toString() }}</span> - Leandro Adrian da Silva</p>
    </footer>
</template>

<style scoped>
footer {
    display: grid;
    text-align: center;
    padding: 3rem;
    color: var(--font-secondary-color);
    background: var(--primary-background);
    border-top: 1px solid var(--border-color);
}

footer .social-media {
    font-size: 1.6rem;
}

footer .quote {
    margin: 3rem 0 1rem;
    font-size: 1.4rem;
}

footer .copyright {
    font-size: 1rem;
}

@media (width <=768px) {
    footer .desktop-only {
        display: none;
    }
}
</style>