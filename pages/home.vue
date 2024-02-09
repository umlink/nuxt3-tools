<template>
  <div>
    <div class="bg-zinc-200 p-4 border-b-solid border-b-orange">222</div>
    <ClientOnly fallback-tag="span" fallback="Loading comments...">
      <QuillEditor />
    </ClientOnly>
  </div>
</template>
<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
</script>
