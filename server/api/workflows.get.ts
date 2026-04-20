import type { Workflow } from "#shared/types";

export default defineEventHandler((): Workflow[] => {
  return [
    {
      id: "1",
      name: "Daily standup summary",
      trigger: "cron",
      steps: 4,
      lastRunAt: "2026-04-20T09:00:00Z",
      status: "success",
    },
    {
      id: "2",
      name: "PR review on push",
      trigger: "slack",
      steps: 3,
      lastRunAt: "2026-04-20T08:45:00Z",
      status: "success",
    },
    {
      id: "3",
      name: "Weekly changelog",
      trigger: "cron",
      steps: 5,
      lastRunAt: "2026-04-14T18:00:00Z",
      status: "success",
    },
    {
      id: "4",
      name: "Deploy smoke test",
      trigger: "manual",
      steps: 6,
      lastRunAt: "2026-04-20T07:30:00Z",
      status: "failed",
    },
    {
      id: "5",
      name: "Figma → code sync",
      trigger: "manual",
      steps: 8,
      lastRunAt: "2026-04-19T16:22:00Z",
      status: "success",
    },
    {
      id: "6",
      name: "Database backup report",
      trigger: "cron",
      steps: 3,
      lastRunAt: "2026-04-20T03:00:00Z",
      status: "success",
    },
    {
      id: "7",
      name: "Slack incident alert",
      trigger: "slack",
      steps: 2,
      lastRunAt: "2026-04-20T08:50:00Z",
      status: "running",
    },
    {
      id: "8",
      name: "Dependency audit",
      trigger: "cron",
      steps: 4,
      lastRunAt: "2026-04-19T00:00:00Z",
      status: "failed",
    },
  ];
});
