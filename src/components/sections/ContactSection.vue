<script lang="ts" setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next';
import Title from '../ui/Title.vue';
import Subtitle from '../ui/Subtitle.vue';
import Button from '../ui/Button.vue';
</script>

<template>
    <section id="contact" class="py-20">
        <Title class="!mb-4">Contato</Title>

        <Subtitle>
            Aberto a novas oportunidades, projetos desafiadores e boas conversas técnicas.
            Se quiser trocar uma ideia ou discutir uma possível colaboração, é só me chamar.
        </Subtitle>

        <div class="flex flex-wrap gap-2">
            <Button variant="ghost" as-child href="mailto:leandrinsilva22@gmail.com" class="footer-link">
                <Mail :size="16" />
                <span>leandrinsilva22@gmail.com</span>
            </Button>

            <Button variant="ghost" as-child href="https://github.com/lezzin" target="_blank" class="footer-link">
                <Github :size="16" />
                <span>GitHub</span>
            </Button>

            <Button variant="ghost" as-child href="https://www.linkedin.com/in/leandro-adrian/" target="_blank"
                class="footer-link">
                <Linkedin :size="16" />
                <span>LinkedIn</span>
            </Button>
        </div>
    </section>
</template>

<style scoped lang="postcss">
.footer-link {
    @apply flex items-center gap-3;
}
</style>