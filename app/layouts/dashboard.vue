<template>
  <div class="flex h-screen overflow-hidden">
    <AppSidebar />
    <main
      class="flex flex-col flex-1 min-w-0 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      <slot />
    </main>
  </div>
</template>
