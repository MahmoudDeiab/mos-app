/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getIncidents,
  getIsLoading,
} from "../../reducers/incidents/incidentsSelector";
import { fetchIncidents } from "../../actions/incidents/incidentsActions";

export const useAppState = () => {
  const dispatch = useDispatch();
  const incidents = useSelector(getIncidents);
  const isLoading = useSelector(getIsLoading);
  useEffect(() => {
    dispatch(fetchIncidents());
  }, []);
  return {
    isLoading,
    incidents,
  };
};
