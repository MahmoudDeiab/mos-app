export type ApiEndpoints = {
  getIncidents: () => string;
  putIncident: (incidentId: string) => string;
};

export const baseURL = "http://localhost:3002";

export const apiEndpoints: ApiEndpoints = {
  getIncidents: () => `${baseURL}/incidents`,
  putIncident: (incidentId: string) => `${baseURL}/incidents/${incidentId}`,
};
