<template>
  <div>
    <ClientOnly fallback-tag="span" fallback="Loading comments...">
      <QuillEditor />
    </ClientOnly>
    <NuxtWelcome />
  </div>
</template>
<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
</script>
