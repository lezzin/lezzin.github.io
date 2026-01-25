<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next';
import { useTheme } from '../../src/composables/useTheme';
import Button from './Button.vue';

const { theme, toggleTheme } = useTheme();
</script>

<template>
    <Button @click="toggleTheme" variant="outline">
        <span v-if="theme === 'light'">
            <Sun />
        </span>
        <span v-else>
            <Moon />
        </span>
    </Button>
</template>
