export type ServerStatus = "online" | "offline" | "degraded";
export type WorkflowStatus = "success" | "failed" | "running";
export type SkillStatus = "active" | "draft" | "disabled";

export interface MCPServer {
  id: string;
  name: string;
  status: ServerStatus;
  transport: "stdio" | "http";
  endpoint: string;
  toolsCount: number;
  resourcesCount: number;
  promptsCount: number;
  lastSyncAt: string;
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  status: SkillStatus;
  category: string;
  serverIds: string[];
}

export interface Workflow {
  id: string;
  name: string;
  trigger: "manual" | "slack" | "cron";
  steps: number;
  lastRunAt: string;
  status: WorkflowStatus;
}

export interface LogEntry {
  id: string;
  workflowName: string;
  status: WorkflowStatus;
  durationMs: number;
  createdAt: string;
}
