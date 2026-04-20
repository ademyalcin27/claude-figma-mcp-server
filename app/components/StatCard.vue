<template>
  <div
    class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 flex flex-col gap-3"
  >
    <div class="flex items-center justify-between">
      <span class="text-sm text-slate-500 dark:text-slate-400">{{
        label
      }}</span>
      <div
        class="flex items-center justify-center size-8 rounded-lg bg-slate-100 dark:bg-slate-800"
      >
        <UIcon :name="icon" class="size-4 text-slate-500 dark:text-slate-400" />
      </div>
    </div>
    <div class="text-2xl font-semibold text-slate-900 dark:text-white">
      {{ value }}
    </div>
    <div v-if="description" class="text-xs text-slate-500 dark:text-slate-400">
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  value: string | number;
  icon: string;
  description?: string;
}>();
</script>
