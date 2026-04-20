import type { LogEntry } from "#shared/types";

export default defineEventHandler((): LogEntry[] => {
  return [
    {
      id: "1",
      workflowName: "Daily standup summary",
      status: "success",
      durationMs: 4_210,
      createdAt: "2026-04-20T09:00:04Z",
    },
    {
      id: "2",
      workflowName: "PR review on push",
      status: "success",
      durationMs: 8_820,
      createdAt: "2026-04-20T08:45:09Z",
    },
    {
      id: "3",
      workflowName: "Deploy smoke test",
      status: "failed",
      durationMs: 2_340,
      createdAt: "2026-04-20T07:30:02Z",
    },
    {
      id: "4",
      workflowName: "Database backup report",
      status: "success",
      durationMs: 1_890,
      createdAt: "2026-04-20T03:00:02Z",
    },
    {
      id: "5",
      workflowName: "Figma → code sync",
      status: "success",
      durationMs: 21_500,
      createdAt: "2026-04-19T16:22:21Z",
    },
    {
      id: "6",
      workflowName: "Dependency audit",
      status: "failed",
      durationMs: 3_100,
      createdAt: "2026-04-19T00:00:03Z",
    },
    {
      id: "7",
      workflowName: "Weekly changelog",
      status: "success",
      durationMs: 12_700,
      createdAt: "2026-04-14T18:00:13Z",
    },
    {
      id: "8",
      workflowName: "PR review on push",
      status: "success",
      durationMs: 9_100,
      createdAt: "2026-04-14T11:15:09Z",
    },
    {
      id: "9",
      workflowName: "Daily standup summary",
      status: "failed",
      durationMs: 1_200,
      createdAt: "2026-04-14T09:00:01Z",
    },
    {
      id: "10",
      workflowName: "Deploy smoke test",
      status: "success",
      durationMs: 5_600,
      createdAt: "2026-04-13T14:22:06Z",
    },
  ];
});
