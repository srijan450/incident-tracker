export type Severity = "SEV1" | "SEV2" | "SEV3" | "SEV4";
export type Status = "OPEN" | "MITIGATED" | "RESOLVED";

export interface Incident {
  _id: string;
  title: string;
  service: string;
  severity: Severity;
  status: Status;
  owner?: string;
  summary?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Pagination {
  totalPages: number;
  page: number;
  pages: number;
  limit: number;
}

export interface IncidentResponse {
  success: boolean;
  data: Incident[];
  meta: Pagination;
}
