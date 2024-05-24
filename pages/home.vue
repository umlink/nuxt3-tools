<script setup lang="ts">
  import randomEntry from '../utils/randomEntry';
  const foo = useFoo();
  const appConfig = useAppConfig();
  const runtimeConfig = useRuntimeConfig();
  const { data } = await useFetch('/api/hello');
  // test
</script>

<template>
  <div>
    <Header />
    {{ foo.name }}
    <div>{{ data }}</div>
    <div>{{ appConfig.foo }}</div>
    <div>{{ runtimeConfig.apiSecret }}</div>
    <div>{{ randomEntry([1, 2, 3, 4]) }}</div>
    <div class="bg-zinc-200 rounded-full p-4"></div>
    <main>
      <ContentDoc path="/introduce/home" />
    </main>
  </div>
</template>
