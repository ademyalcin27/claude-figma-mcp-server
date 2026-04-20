<template>
  <nav
    class="flex flex-col w-60 shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-full"
  >
    <div
      class="flex items-center gap-2.5 h-14 px-4 border-b border-slate-200 dark:border-slate-800 shrink-0"
    >
      <UIcon
        name="i-heroicons-cube-transparent"
        class="text-primary-500 size-5"
      />
      <span class="font-semibold text-slate-900 dark:text-white text-sm"
        >AI Dashboard</span
      >
    </div>

    <div class="flex flex-col gap-0.5 p-3 flex-1">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
        active-class="bg-slate-100 dark:bg-slate-800 !text-slate-900 dark:!text-white font-medium"
      >
        <UIcon :name="item.icon" class="size-4 shrink-0" />
        {{ item.label }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const navItems = [
  { label: "Overview", icon: "i-heroicons-squares-2x2", to: "/" },
  { label: "MCP Servers", icon: "i-heroicons-server", to: "/mcp-servers" },
  { label: "Skills", icon: "i-heroicons-bolt", to: "/skills" },
  { label: "Workflows", icon: "i-heroicons-arrow-path", to: "/workflows" },
  { label: "Logs", icon: "i-heroicons-document-text", to: "/logs" },
];
</script>
