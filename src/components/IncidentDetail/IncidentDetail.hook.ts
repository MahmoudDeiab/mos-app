import { useState, useCallback } from "react";
import { Incident } from "../../reducers/incidents/incidentsReducer.types";
import { useSelector } from "react-redux";
import { getIsUpdating } from "../../reducers/incidents/incidentsSelector";

export const useIncidentDetail = (initialIncidentState: Incident) => {
  const isUpdating = useSelector(getIsUpdating);

  const [incidentState, setIncidentState] = useState<Incident>(
    initialIncidentState
  );

  const onAddressChange = useCallback(
    (address: string) => {
      setIncidentState({
        ...incidentState,
        address,
      });
    },
    [incidentState]
  );

  const onCriticalityChange = useCallback(
    (criticality) => {
      setIncidentState({
        ...incidentState,
        status: {
          ...incidentState.status,
          criticality,
        },
      });
    },
    [incidentState]
  );

  const onVerifiedChange = useCallback(
    (verified) => {
      setIncidentState({
        ...incidentState,
        status: {
          ...incidentState.status,
          verified,
        },
      });
    },
    [incidentState]
  );

  const onPositionChange = useCallback(
    (
      positionType: "from" | "to",
      coordinate: "longitude" | "latitude",
      value: string
    ) => {
      const updatedCoordinate = {
        [positionType]: {
          ...incidentState.position[positionType],
          [coordinate]: value,
        },
      };
      setIncidentState({
        ...incidentState,
        position: {
          ...incidentState.position,
          ...updatedCoordinate,
        },
      });
    },
    [incidentState]
  );

  return {
    incidentState,
    onAddressChange,
    onCriticalityChange,
    onVerifiedChange,
    onPositionChange,
    isUpdating,
  };
};
