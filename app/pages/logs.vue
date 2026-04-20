<template>
  <div class="flex flex-col flex-1 min-h-0">
    <AppHeader title="Logs" />
    <div class="p-6 overflow-y-auto flex-1">
    <div
      class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
    >
      <div v-if="pending" class="px-5 py-10 text-center text-sm text-slate-400">
        Loading…
      </div>

      <div v-else-if="error" class="px-5 py-10 text-center text-sm text-red-500">
        Failed to load logs.
      </div>

      <template v-else-if="logs?.length">
        <table class="w-full text-sm">
          <thead class="border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th
                class="px-5 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide"
              >
                Workflow
              </th>
              <th
                class="px-5 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide"
              >
                Status
              </th>
              <th
                class="px-5 py-3 text-right text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide hidden md:table-cell"
              >
                Duration
              </th>
              <th
                class="px-5 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide hidden lg:table-cell"
              >
                Date
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
            <tr
              v-for="log in logs"
              :key="log.id"
              class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <td class="px-5 py-3 text-slate-700 dark:text-slate-300">
                {{ log.workflowName }}
              </td>
              <td class="px-5 py-3">
                <StatusBadge :status="log.status" />
              </td>
              <td
                class="px-5 py-3 text-right text-slate-500 dark:text-slate-400 tabular-nums hidden md:table-cell"
              >
                {{ (log.durationMs / 1000).toFixed(1) }}s
              </td>
              <td
                class="px-5 py-3 text-slate-400 text-xs hidden lg:table-cell"
              >
                {{ new Date(log.createdAt).toLocaleString() }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>

      <div v-else class="px-5 py-10 text-center text-sm text-slate-400">
        No log entries found.
      </div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LogEntry } from "#shared/types";

definePageMeta({ layout: "dashboard" });

const { data: logs, pending, error } = await useFetch<LogEntry[]>("/api/logs");
</script>
