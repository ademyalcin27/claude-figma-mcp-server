<template>
  <div class="flex flex-col flex-1 min-h-0">
    <AppHeader title="MCP Servers" />
    <div class="p-6 overflow-y-auto flex-1">
    <div
      class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
    >
      <!-- Loading -->
      <div v-if="pending" class="px-5 py-10 text-center text-sm text-slate-400">
        Loading…
      </div>

      <!-- Error -->
      <div v-else-if="error" class="px-5 py-10 text-center text-sm text-red-500">
        Failed to load servers.
      </div>

      <!-- Table -->
      <template v-else-if="servers?.length">
        <table class="w-full text-sm">
          <thead class="border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th
                class="px-5 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide"
              >
                Name
              </th>
              <th
                class="px-5 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide"
              >
                Status
              </th>
              <th
                class="px-5 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide hidden md:table-cell"
              >
                Transport
              </th>
              <th
                class="px-5 py-3 text-right text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide hidden lg:table-cell"
              >
                Tools
              </th>
              <th
                class="px-5 py-3 text-right text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide hidden lg:table-cell"
              >
                Resources
              </th>
              <th
                class="px-5 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide hidden xl:table-cell"
              >
                Last sync
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
            <tr
              v-for="server in servers"
              :key="server.id"
              class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <td class="px-5 py-3 font-medium text-slate-900 dark:text-white">
                {{ server.name }}
              </td>
              <td class="px-5 py-3">
                <StatusBadge :status="server.status" />
              </td>
              <td
                class="px-5 py-3 text-slate-500 dark:text-slate-400 hidden md:table-cell"
              >
                <UBadge color="neutral" variant="outline" size="sm">{{
                  server.transport
                }}</UBadge>
              </td>
              <td
                class="px-5 py-3 text-right text-slate-700 dark:text-slate-300 tabular-nums hidden lg:table-cell"
              >
                {{ server.toolsCount }}
              </td>
              <td
                class="px-5 py-3 text-right text-slate-700 dark:text-slate-300 tabular-nums hidden lg:table-cell"
              >
                {{ server.resourcesCount }}
              </td>
              <td
                class="px-5 py-3 text-slate-400 text-xs hidden xl:table-cell"
              >
                {{ new Date(server.lastSyncAt).toLocaleString() }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>

      <!-- Empty -->
      <div v-else class="px-5 py-10 text-center text-sm text-slate-400">
        No servers configured.
      </div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MCPServer } from "#shared/types";

definePageMeta({ layout: "dashboard" });

const { data: servers, pending, error } = await useFetch<MCPServer[]>("/api/mcp-servers");
</script>
