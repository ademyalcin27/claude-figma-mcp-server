<template>
  <UBadge :color="config.color" variant="subtle" size="sm">
    {{ config.label }}
  </UBadge>
</template>

<script setup lang="ts">
import type { ServerStatus, WorkflowStatus, SkillStatus } from "#shared/types";

type AnyStatus = ServerStatus | WorkflowStatus | SkillStatus;
type BadgeColor =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "error"
  | "neutral";

const props = defineProps<{
  status: AnyStatus;
}>();

const statusMap: Record<AnyStatus, { color: BadgeColor; label: string }> = {
  online: { color: "primary", label: "Online" },
  offline: { color: "error", label: "Offline" },
  degraded: { color: "warning", label: "Degraded" },
  success: { color: "primary", label: "Success" },
  failed: { color: "error", label: "Failed" },
  running: { color: "warning", label: "Running" },
  active: { color: "primary", label: "Active" },
  draft: { color: "neutral", label: "Draft" },
  disabled: { color: "neutral", label: "Disabled" },
};

const config = computed(
  () =>
    statusMap[props.status] ?? ({ color: "neutral", label: props.status } as const)
);
</script>
