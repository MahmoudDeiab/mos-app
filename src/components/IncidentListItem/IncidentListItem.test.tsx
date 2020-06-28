import React from "react";
import { renderWithProviders } from "../../util/test/renderWithProviders";
import { IncidentListItem } from "./IncidentListItem";

const mockIncident: any = {
  id: "5ed60f01dac2bdb26a1bb747",
  status: {
    criticality: "warning",
    verified: false,
  },
  address: "876 Seabring Street, Baker, Louisiana, 4442",
  position: {
    from: {
      latitude: 75.509597,
      longitude: -97.203744,
    },
    to: {
      latitude: -22.743405,
      longitude: 10.017638,
    },
  },
  interval: {
    startTime: "2018-11-24T09:51:02 -01:00",
    endTime: "2017-12-19T07:57:41 -01:00",
    entryTime: "2016-09-04T10:22:01 -02:00",
  },
};

describe("<IncidentListItem />", () => {
  it("Renders incident address", () => {
    const { getByText } = renderWithProviders(
      <IncidentListItem incidnet={mockIncident} />
    );
    expect(
      getByText("876 Seabring Street, Baker, Louisiana, 4442")
    ).toBeVisible();
  });

  it("Renders incident criticality", () => {
    const { getByText } = renderWithProviders(
      <IncidentListItem incidnet={mockIncident} />
    );
    expect(getByText("Warning")).toBeVisible();
  });

  it("Renders incident verification status", () => {
    const { getByText } = renderWithProviders(
      <IncidentListItem incidnet={mockIncident} />
    );
    expect(getByText("Not Verified")).toBeVisible();
  });
});
