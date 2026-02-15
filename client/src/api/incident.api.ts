import axios from "axios";
import type { Incident, IncidentResponse } from "../types/incident.types";

const API = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

export const fetchIncidents = async (params: any) => {
  const { data } = await API.get<IncidentResponse>("/incidents", {
    params,
  });
  return data;
};

export const fetchIncidentById = async (id: string) => {
  const { data } = await API.get<{ success: boolean; data: Incident }>(
    `/incidents/${id}`,
  );
  return data;
};

export const createIncident = async (payload: Partial<Incident>) => {
  const { data } = await API.post("/incidents", payload);
  return data;
};

export const updateIncident = async (
  id: string,
  payload: Partial<Incident>,
) => {
  const { data } = await API.patch(`/incidents/${id}`, payload);
  return data;
};

export const deleteIncident = async (id: string) => {
  const { data } = await API.delete(`/incidents/${id}`);
  return data;
};
