<script setup>
import { onMounted, reactive, ref } from "vue";
import emailjs from "@emailjs/browser";

const formStatus = reactive({
    show: false,
    type: "",
    text: "",
});

const name = ref("");
const email = ref("");
const message = ref("");
const isSending = ref(false);
const errors = reactive({ name: "", email: "", message: "" });

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
    showMessage("success", "Mensagem enviada com sucesso!");
    resetForm();
};

const handleError = () => {
    showMessage("error", "Erro ao enviar mensagem. Tente novamente.");
};

const showMessage = (type, text) => {
    formStatus.show = true;
    formStatus.type = type;
    formStatus.text = text;

    setTimeout(() => {
        formStatus.show = false;
        formStatus.type = "";
        formStatus.text = "";
    }, 5000);
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
        blockHeadless: true,
        limitRate: {
            id: 'app',
            throttle: 10000,
        },
    });
});
</script>

<template>
    <section id="contact-section">
        <div class="container">
            <h3 class="section-title delay-small">Contato</h3>

            <form class="delay-medium" @submit.prevent="sendMessage">
                <div v-if="formStatus.show" :class="`form-message ${formStatus.type}`" role="alert">
                    <p>{{ formStatus.text }}</p>
                </div>

                <div :class="{ 'form-error': errors.name }">
                    <input type="text" aria-label="Nome" placeholder="Nome" v-model="name">
                    <p class="form-error-message" v-if="errors.name">{{ errors.name }}</p>
                </div>

                <div :class="{ 'form-error': errors.email }">
                    <input type="email" aria-label="Email" placeholder="Email" v-model="email">
                    <p class="form-error-message" v-if="errors.email">{{ errors.email }}</p>
                </div>

                <div :class="{ 'form-error': errors.message }">
                    <textarea aria-label="Mensagem" rows="5" placeholder="Digite aqui a sua mensagem"
                        v-model="message"></textarea>
                    <p class="form-error-message" v-if="errors.message">{{ errors.message }}</p>
                </div>

                <button type="submit" class="btn success" :disabled="isSending">
                    {{ isSending ? 'Enviando...' : 'Enviar mensagem' }}
                </button>
            </form>
        </div>
    </section>
</template>

<style scoped>
form {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    display: grid;
    gap: 1rem;
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
}


.form-error :where(input, textarea) {
    border-color: var(--error-color);
}

.form-error-message {
    color: var(--error-color);
    font-size: 1.4rem;
    margin-top: 0.25rem;
}

.form-message {
    padding: 1.5rem;
    text-align: center;
    border-radius: var(--border-radius);
    margin-bottom: 1rem;

    &.success {
        color: var(--success-color);
        background-color: var(--background-success);
    }

    &.error {
        color: var(--error-color);
        background-color: var(--background-error);
    }
}
</style>
