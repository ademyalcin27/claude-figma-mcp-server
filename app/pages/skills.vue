<template>
  <div class="flex flex-col flex-1 min-h-0">
    <AppHeader title="Skills" />
    <div class="p-6 overflow-y-auto flex-1">
    <div
      class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
    >
      <div v-if="pending" class="px-5 py-10 text-center text-sm text-slate-400">
        Loading…
      </div>

      <div v-else-if="error" class="px-5 py-10 text-center text-sm text-red-500">
        Failed to load skills.
      </div>

      <template v-else-if="skills?.length">
        <table class="w-full text-sm">
          <thead class="border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th
                class="px-5 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide"
              >
                Name
              </th>
              <th
                class="px-5 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide hidden md:table-cell"
              >
                Description
              </th>
              <th
                class="px-5 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide"
              >
                Status
              </th>
              <th
                class="px-5 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide hidden lg:table-cell"
              >
                Category
              </th>
              <th
                class="px-5 py-3 text-right text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide hidden lg:table-cell"
              >
                Servers
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
            <tr
              v-for="skill in skills"
              :key="skill.id"
              class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <td class="px-5 py-3 font-medium text-slate-900 dark:text-white whitespace-nowrap">
                {{ skill.name }}
              </td>
              <td
                class="px-5 py-3 text-slate-500 dark:text-slate-400 max-w-xs truncate hidden md:table-cell"
              >
                {{ skill.description }}
              </td>
              <td class="px-5 py-3">
                <StatusBadge :status="skill.status" />
              </td>
              <td
                class="px-5 py-3 text-slate-500 dark:text-slate-400 hidden lg:table-cell"
              >
                {{ skill.category }}
              </td>
              <td
                class="px-5 py-3 text-right text-slate-700 dark:text-slate-300 tabular-nums hidden lg:table-cell"
              >
                {{ skill.serverIds.length }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>

      <div v-else class="px-5 py-10 text-center text-sm text-slate-400">
        No skills defined.
      </div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from "#shared/types";

definePageMeta({ layout: "dashboard" });

const { data: skills, pending, error } = await useFetch<Skill[]>("/api/skills");
</script>
