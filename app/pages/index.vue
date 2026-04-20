<template>
  <div class="flex flex-col flex-1 min-h-0">
  <AppHeader title="Overview" />

  <div class="p-6 flex flex-col gap-6 overflow-y-auto flex-1">
    <!-- Stat grid -->
    <div v-if="stats" class="grid grid-cols-2 xl:grid-cols-4 gap-4">
      <StatCard
        label="MCP Servers"
        :value="`${stats.onlineServers} / ${stats.totalServers}`"
        icon="i-heroicons-server"
        :description="`${stats.totalServers - stats.onlineServers} offline`"
      />
      <StatCard
        label="Active Skills"
        :value="stats.activeSkills"
        icon="i-heroicons-bolt"
      />
      <StatCard
        label="Workflows Run"
        :value="stats.workflowsRun.toLocaleString()"
        icon="i-heroicons-arrow-path"
        description="All time"
      />
      <StatCard
        label="Success Rate"
        :value="`${stats.successRate}%`"
        icon="i-heroicons-check-circle"
        :description="`${stats.failedRuns} failed runs`"
      />
    </div>

    <!-- Skeleton while loading -->
    <div v-else class="grid grid-cols-2 xl:grid-cols-4 gap-4">
      <div
        v-for="i in 4"
        :key="i"
        class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 h-28 animate-pulse"
      />
    </div>

    <!-- Recent logs -->
    <div
      class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
    >
      <div
        class="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between"
      >
        <span class="text-sm font-medium text-slate-900 dark:text-white"
          >Recent runs</span
        >
        <NuxtLink
          to="/logs"
          class="text-xs text-primary-600 dark:text-primary-400 hover:underline"
          >View all</NuxtLink
        >
      </div>

      <div v-if="logs?.length" class="divide-y divide-slate-100 dark:divide-slate-800">
        <div
          v-for="log in logs?.slice(0, 5)"
          :key="log.id"
          class="flex items-center gap-4 px-5 py-3"
        >
          <StatusBadge :status="log.status" />
          <span class="flex-1 text-sm text-slate-700 dark:text-slate-300 truncate">{{
            log.workflowName
          }}</span>
          <span class="text-xs text-slate-400 tabular-nums shrink-0"
            >{{ (log.durationMs / 1000).toFixed(1) }}s</span
          >
          <span class="text-xs text-slate-400 shrink-0">{{
            new Date(log.createdAt).toLocaleDateString()
          }}</span>
        </div>
      </div>

      <div v-else class="px-5 py-10 text-center text-sm text-slate-400">
        No recent runs.
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import type { OverviewStats, LogEntry } from "#shared/types";

definePageMeta({ layout: "dashboard" });

const { data: stats } = await useFetch<OverviewStats>("/api/stats");
const { data: logs } = await useFetch<LogEntry[]>("/api/logs");
</script>
