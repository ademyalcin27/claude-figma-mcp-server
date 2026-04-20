<template>
  <div
    class="flex items-center gap-3 h-14 px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0"
  >
    <h1 class="text-base font-semibold text-slate-900 dark:text-white flex-1">
      {{ title }}
    </h1>
    <slot />
    <UButton
      color="primary"
      variant="solid"
      icon="i-heroicons-arrow-right-on-rectangle"
      @click="handleLogin"
    >
      Login
    </UButton>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();

function handleLogin() {
  navigateTo("/login");
}
</script>
