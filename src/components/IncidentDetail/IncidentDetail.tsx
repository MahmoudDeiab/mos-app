import React, { FC } from "react";
import {
  TextField,
  Switch,
  MenuItem,
  FormControlLabel,
} from "@material-ui/core";

import { Incident } from "../../reducers/incidents/incidentsReducer.types";
import { Root, Row } from "./IncidentDetail.styled";
import { useIncidentDetail } from "./IncidentDetail.hook";
import { Button } from "../Button/Button";
import { criticalityOptions } from "../CriticalityIndicator/CriticalityIndicator.consts";

type IncidentDetailProps = {
  incident: Incident;
  onUpdateIcident: (incident: Incident) => void;
};

export const IncidentDetail: FC<IncidentDetailProps> = ({
  incident,
  onUpdateIcident,
}) => {
  const {
    incidentState,
    onAddressChange,
    onCriticalityChange,
    onVerifiedChange,
    onPositionChange,
    isUpdating,
  } = useIncidentDetail(incident);
  const {
    address,
    status: { verified, criticality },
    position: { from, to },
  } = incidentState;
  return (
    <Root>
      <Row>
        <TextField
          id="address"
          label="Address"
          variant="outlined"
          value={address}
          fullWidth
          onChange={(event) => onAddressChange(event.target.value)}
        />
      </Row>
      <Row>
        <TextField
          id="criticality"
          select
          label="Criticality"
          value={criticality}
          onChange={(event) => onCriticalityChange(event.target.value)}
          variant="outlined"
        >
          {criticalityOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <FormControlLabel
          control={
            <Switch
              id="verified"
              checked={verified}
              onChange={(_, checked) => onVerifiedChange(checked)}
            />
          }
          label={verified ? "Verified" : "Not Verified"}
        />
      </Row>
      <Row>
        <TextField
          type="number"
          inputProps={{
            step: "0.1",
          }}
          id="from-latitude"
          label="Position from (Latitude)"
          variant="outlined"
          value={from.latitude}
          onChange={(event) =>
            onPositionChange("from", "latitude", event.target.value)
          }
        />
        <TextField
          type="number"
          inputProps={{
            step: "0.1",
          }}
          id="from-longitude"
          label="Position from (Longitude)"
          variant="outlined"
          value={from.longitude}
          onChange={(event) =>
            onPositionChange("from", "longitude", event.target.value)
          }
        />
      </Row>
      <Row>
        <TextField
          type="number"
          inputProps={{
            step: "0.1",
          }}
          id="to-latitude"
          label="Position to (Latitude)"
          variant="outlined"
          value={to.latitude}
          onChange={(event) =>
            onPositionChange("to", "latitude", event.target.value)
          }
        />
        <TextField
          type="number"
          inputProps={{
            step: "0.1",
          }}
          id="to-longitude"
          label="Position to (Longitude)"
          variant="outlined"
          value={to.longitude}
          onChange={(event) =>
            onPositionChange("to", "longitude", event.target.value)
          }
        />
      </Row>
      <Button
        onClick={() => onUpdateIcident(incidentState)}
        label="Save"
        isLoading={isUpdating}
      />
    </Root>
  );
};
