<script setup lang="ts">
const foo = useFoo()
const { data } = await useFetch('/api/hello')
</script>

<template>
  <div>
    <Header />
    {{foo.name}}
    <div>{{data}}</div>
    <div class="bg-green p-4"></div>
    <main>
      <ContentDoc path="/introduce/home"/>
    </main>
  </div>
</template>
