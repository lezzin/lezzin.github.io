<script lang="ts" setup>
import { Github, Linkedin, Mail, Copy, Check } from 'lucide-vue-next'
import Title from '../../../components/common/Title.vue'
import Subtitle from '../../../components/common/Subtitle.vue'
import Button from '../../../components/common/Button.vue'
import { computed, ref } from 'vue'
import { useLanguage } from '../../../composables/useLanguage'
import { uiTranslations } from '../../../i18n/ui'

const { language } = useLanguage()
const t = computed(() => uiTranslations[language.value])

const email = 'leandrinsilva22@gmail.com'
const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}
</script>

<template>
  <section id="contact" class="py-2 scroll-mt-32">
    <div class="max-w-3xl">
      <Title class="!mb-4">{{ t.contact.title }}</Title>

      <Subtitle class="mb-12 font-handwritten text-xl">
        {{ t.contact.subtitle }}
      </Subtitle>

      <div class="flex flex-col gap-4">
        <div class="flex flex-wrap gap-2">
          <Button variant="default" as-child :href="`mailto:${email}`" size="sm">
            <div class="flex items-center gap-2">
              <Mail :size="18" />
              <span class="font-semibold">{{ email }}</span>
            </div>
          </Button>

          <Button variant="outline" @click="copyEmail" size="sm">
            <div class="flex items-center gap-2">
              <Check v-if="copied" :size="18" />
              <Copy v-else :size="18" />
              <span>{{ copied ? t.contact.copied : t.contact.copy }}</span>
            </div>
          </Button>
        </div>

        <div class="flex flex-wrap gap-2">
          <Button
            variant="outline"
            as-child
            href="https://github.com/lezzin"
            target="_blank"
            class="h-12 px-6"
            size="sm"
          >
            <div class="flex items-center gap-3">
              <Github :size="18" />
              <span>GitHub</span>
            </div>
          </Button>

          <Button
            variant="outline"
            as-child
            href="https://www.linkedin.com/in/leandro-adrian"
            target="_blank"
            class="h-12 px-6"
            size="sm"
          >
            <div class="flex items-center gap-3">
              <Linkedin :size="18" />
              <span>LinkedIn</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
