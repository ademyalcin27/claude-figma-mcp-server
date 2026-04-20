import type { OverviewStats } from "#shared/types";

export default defineEventHandler((): OverviewStats => {
  return {
    totalServers: 8,
    onlineServers: 6,
    activeSkills: 24,
    workflowsRun: 1_340,
    failedRuns: 47,
    successRate: 96.5,
  };
});
