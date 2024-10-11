<script>
import { ref, onMounted, watch } from 'vue';
import emailjs from '@emailjs/browser';

import Toast from "../components/Toast.vue";

export default {
    components: {
        Toast
    },
    setup() {
        const EMAIL_SERVICE_ID = "service_svh7f4w";
        const EMAIL_TEMPLATE_ID = "template_12gipiu";
        const EMAIL_PUBLIC_KEY = "iwzLyfgc_NAdfVZiN";
        const GOOGLE_SITE_KEY = "6Ld7ObkpAAAAAP8J9NwPrytrO7IUy4-0wT96WTLJ";

        const email = ref('');
        const message = ref('Parabéns pelo portfólio. Vamos nos conectar!');
        const emailError = ref('');
        const messageError = ref('');
        const toast = ref({
            isActive: false,
            message: '',
            status: ''
        });

        const submitBtn = ref(null);

        const handleFormSubmit = () => {
            emailError.value = '';
            messageError.value = '';

            if (!email.value) {
                emailError.value = 'Preencha o campo de email.';
            }

            if (!message.value) {
                messageError.value = 'Preencha o campo de mensagem.';
            }

            if (!email.value || !message.value) return;

            grecaptcha.execute();
        };

        const submitFormMessage = (token) => {
            const params = {
                from_email: email.value,
                message: message.value,
                'g-recaptcha-response': token
            };

            if (submitBtn.value) {
                submitBtn.value.querySelector("span").innerText = 'Carregando...';
                submitBtn.value.disabled = true;
            }

            emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, params).then(
                () => {
                    toast.value = {
                        isActive: true,
                        message: 'Mensagem enviada com sucesso!',
                        status: 'toast-success'
                    };
                    resetContactForm();
                },
                (err) => {
                    toast.value = {
                        isActive: true,
                        message: 'Erro ao enviar mensagem: ' + err,
                        status: 'toast-error'
                    };
                    resetContactForm();
                }
            );
        };

        const resetContactForm = () => {
            email.value = '';
            message.value = 'Parabéns pelo portfólio. Vamos nos conectar!';
            emailError.value = '';
            messageError.value = '';

            if (submitBtn.value) {
                submitBtn.value.querySelector("span").innerText = 'Enviar mensagem';
                submitBtn.value.disabled = false;
            }

            grecaptcha.reset();
        };

        onMounted(() => {
            emailjs.init(EMAIL_PUBLIC_KEY);

            grecaptcha.ready(() => {
                grecaptcha.render('g-recaptcha', {
                    sitekey: GOOGLE_SITE_KEY,
                    callback: submitFormMessage,
                    size: 'invisible'
                });
            });
        });

        let timeout;
        watch(toast, (data) => {
            if (data.isActive) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    toast.value.isActive = false;
                }, 2500);
            }
        });

        return {
            email,
            message,
            emailError,
            messageError,
            handleFormSubmit,
            toast,
            submitBtn
        };
    }
};
</script>

<template>
    <section id="contact-section">
        <div class="container">
            <h2 class="section-title delay-small">Contato</h2>
            <form id="contact-form" @submit.prevent="handleFormSubmit">
                <div class="form-group interval-small">
                    <label for="contact-email">Email</label>
                    <input type="email" name="from_email" v-model="email" class="form-control"
                        placeholder="usuario@gmail.com" />
                    <p class="form-message" v-if="emailError">{{ emailError }}</p>
                </div>
                <div class="form-group interval-small">
                    <label for="contact-message">Mensagem</label>
                    <textarea rows="3" name="message" class="form-control" v-model="message"></textarea>
                    <p class="form-message" v-if="messageError">{{ messageError }}</p>
                </div>
                <button type="submit" class="btn success interval-small" title="Enviar mensagem" ref="submitBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-rocket-takeoff icon" viewBox="0 0 16 16">
                        <path fill="#fff"
                            d="M9.752 6.193c.599.6 1.73.437 2.528-.362s.96-1.932.362-2.531c-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532" />
                        <path fill="#fff"
                            d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9 9 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a10 10 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093q.1.026.16.045c.184.06.279.13.351.295l.029.073a3.5 3.5 0 0 1 .157.721c.055.485.051 1.178-.159 2.065m-4.828 7.475.04-.04-.107 1.081a1.54 1.54 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a9 9 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006M5.205 5c-.625.626-.94 1.351-1.004 2.09a9 9 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a3 3 0 0 0-.045-.283 3 3 0 0 0-.3-.041Z" />
                        <path fill="#fff"
                            d="M7.009 12.139a7.6 7.6 0 0 1-1.804-1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z" />
                    </svg>
                    <span class="text">Enviar mensagem</span>
                </button>
            </form>
        </div>
        <div class="g-recaptcha" id="g-recaptcha"></div>
    </section>

    <Toast :toast="toast" />
</template>

<style scoped>
form {
    display: grid;
    gap: 1.2rem;
    width: 100%;
    max-width: 600px;
    font-style: 1.6rem;
}

form .form-group {
    display: grid;
    gap: 0.4rem;
}

.form-group .form-control {
    border: 1px solid var(--border-color);
    background-color: var(--secondary-background);
    border-radius: var(--border-radius);
    padding: 1rem;
}

.btn {
    padding: 1rem;
}

.btn:disabled {
    background-color: var(--quaternary-background);
    color: var(--font-secondary-color);
    pointer-events: none;
}

.btn .icon {
    margin-right: 3px;
    transform: rotate(5deg);
}

.btn .icon,
.btn .text {
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

.btn:hover .icon,
.btn:focus .icon {
    transform: translateX(5px) rotate(25deg);
}

.btn:hover .text,
.btn:focus .text {
    transform: translateX(7px);
}

.form-message {
    font-size: 1.2rem;
    color: var(--toast-error-color);
}
</style>