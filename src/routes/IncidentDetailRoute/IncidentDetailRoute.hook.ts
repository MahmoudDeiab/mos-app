/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIncidentById } from "../../reducers/incidents/incidentsSelector";
import { useParams } from "react-router-dom";
import { Incident } from "../../reducers/incidents/incidentsReducer.types";
import { updateIncident } from "../../actions/incidents/incidentsActions";

export const useIncidentDetailRoute = () => {
  const { incidentId } = useParams();
  const dispatch = useDispatch();
  const selectedIncident = useSelector(getIncidentById(incidentId));
  const onUpdateIcident = useCallback(
    (updatedIncident: Incident) => dispatch(updateIncident(updatedIncident)),
    []
  );
  return {
    selectedIncident,
    onUpdateIcident,
  };
};
