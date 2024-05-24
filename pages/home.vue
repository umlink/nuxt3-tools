<template>
  <div>
    <Header />
    <div class="bg-green p-4"></div>
    <ClientOnly fallback-tag="span" fallback="Loading comments...">
      <QuillEditor />
    </ClientOnly>
  </div>
</template>
<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import Header from "~/components/Header.vue";
</script>
