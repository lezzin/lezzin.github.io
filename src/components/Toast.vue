<script>
export default {
    props: ["toast"]
}
</script>

<template>
    <aside :class="['toast', toast.isActive && 'toast-active', toast.status]">
        <div class="toast-banner"></div>
        <div class="toast-content">
            <p class="toast-text">{{ toast.message }}</p>
        </div>
    </aside>
</template>

<style scoped>
.toast {
    --toast-radius: calc(var(--border-radius) / 2);

    position: fixed;
    bottom: 1rem;
    right: 0;
    z-index: calc(var(--header-index) + 2);
    display: grid;
    grid-template-columns: 2rem auto;
    background-color: var(--tertiary-background);
    border-radius: var(--toast-radius) 0 0 var(--toast-radius);
    border: 1px solid var(--border-color);
    border-right: none;
    overflow: hidden;
    min-width: 20%;
    transform: translateX(100%);
    pointer-events: none;
    transition: .6s ease;
}

.toast.toast-active {
    transform: translateX(0);
    pointer-events: all;
}

.toast-success .toast-banner,
.toast-success .toast-icon {
    background-color: var(--toast-success-color);
}

.toast-error .toast-banner,
.toast-error .toast-icon {
    background-color: var(--toast-error-color);
}

.toast-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 1.5rem;
}

.toast-content .toast-text {
    font-size: 1.4rem;
}
</style>