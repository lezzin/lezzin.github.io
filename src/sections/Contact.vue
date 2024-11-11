<script setup>
import { onMounted, reactive, ref, watch } from "vue";
import emailjs from "@emailjs/browser";

import 'vue3-toastify/dist/index.css';
import { toast } from 'vue3-toastify';

const name = ref("");
const email = ref("");
const message = ref("");
const isSending = ref(false);
const errors = reactive({
    name: "",
    email: "",
    message: ""
});

watch(name, () => errors.name = "");
watch(email, () => errors.email = "");
watch(message, () => errors.message = "");

const validateForm = () => {
    let valid = true;

    Object.keys(errors).forEach(key => {
        errors[key] = "";
    });

    if (!name.value) {
        errors.name = "Por favor, insira seu nome.";
        valid = false;
    }
    if (!email.value) {
        errors.email = "Por favor, insira seu e-mail.";
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        errors.email = "Por favor, insira um e-mail válido.";
        valid = false;
    }
    if (!message.value) {
        errors.message = "Por favor, insira sua mensagem.";
        valid = false;
    }

    return valid;
};

const sendMessage = () => {
    if (!validateForm()) return;

    isSending.value = true;

    const params = {
        from_email: email.value,
        from_name: name.value,
        message: message.value,
    };

    emailjs.send('service_svh7f4w', 'template_12gipiu', params)
        .then(handleResponse)
        .catch(handleError)
        .finally(() => {
            isSending.value = false;
        });
};

const handleResponse = () => {
    showToast("Mensagem enviada com sucesso!", "success");
    resetForm();
};

const handleError = () => {
    showToast("Erro ao enviar mensagem. Tente novamente.", "error");
};

const showToast = (message, type) => {
    if (type === "success") {
        toast.success(message, {
            autoClose: 5000,
            style: {
                fontSize: '1.4rem'
            }
        });

        return;
    }

    toast.error(message, {
        style: {
            fontSize: '1.4rem'
        }
    });
};

const resetForm = () => {
    name.value = "";
    email.value = "";
    message.value = "";
    Object.keys(errors).forEach(key => {
        errors[key] = "";
    });
};

onMounted(() => {
    emailjs.init({
        publicKey: "iwzLyfgc_NAdfVZiN",
    });
});
</script>

<template>
    <section id="contact-section" class="delay-medium overlay overlay--2">
        <div class="container">
            <h3 class="section-title delay-small">Contato</h3>

            <form class="delay-medium" @submit.prevent="sendMessage">
                <div :class="{ 'form-error': errors.name }">
                    <input type="text" aria-label="Nome" name="nome" placeholder="Nome" v-model="name">
                    <p class="form-error-message" v-if="errors.name">
                        <fa icon="info-circle" />
                        <span>{{ errors.name }}</span>
                    </p>
                </div>

                <div :class="{ 'form-error': errors.email }">
                    <input type="email" aria-label="Email" name="email" placeholder="Email" v-model="email">
                    <p class="form-error-message" v-if="errors.email">
                        <fa icon="info-circle" />
                        <span>{{ errors.email }}</span>
                    </p>
                </div>

                <div :class="{ 'form-error': errors.message }">
                    <textarea aria-label="Mensagem" name="mensagem" rows="5" placeholder="Digite aqui a sua mensagem"
                        v-model="message"></textarea>
                    <p class="form-error-message" v-if="errors.message">
                        <fa icon="info-circle" />
                        <span>{{ errors.message }}</span>
                    </p>
                </div>

                <button type="submit" class="btn success" :disabled="isSending">
                    {{ isSending ? 'Enviando...' : '🚀 Enviar mensagem' }}
                </button>
            </form>
        </div>
    </section>
</template>

<style scoped>
section {
    --error-color: #dd3b30;
}

section.overlay--2::before {
    background-position: right bottom;
    background-size: 55%;

    @media(max-width: 768px) {
        background-size: 100%;
    }
}

form {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    z-index: 1;
}

input,
textarea {
    width: 100%;
    background-color: var(--secondary-background);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    padding: 1rem;
    transition: border-color 0.3s;
}

button {
    padding: 1rem 0;

    &:disabled {
        cursor: not-allowed;
        opacity: .6;

        &:hover {
            filter: none;
        }
    }

    &:hover {
        letter-spacing: 1px;
    }
}

.form-error :where(input, textarea) {
    border-color: var(--error-color);
}

.form-error-message {
    color: var(--error-color);
    font-size: 1.4rem;
    margin-top: 0.25rem;

    svg {
        margin-right: .5rem;
    }
}
</style>