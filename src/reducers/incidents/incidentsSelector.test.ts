import { getIncidents, getIncidentById } from "./incidentsSelector";

const mockState: any = {
  incidents: {
    isLoading: false,
    data: [
      {
        id: "5ed60f01f82566b3a5363c4f",
        status: {
          criticality: "critical",
          verified: false,
        },
        address: "554 Kensington Street, Weedville, Idaho, 8448",
        position: {
          from: {
            latitude: 24.416233,
            longitude: -116.950522,
          },
          to: {
            latitude: 53.557797,
            longitude: 168.480582,
          },
        },
        interval: {
          startTime: "2014-11-06T03:10:20 -01:00",
          endTime: "2015-10-20T07:31:00 -02:00",
          entryTime: "2015-09-11T05:54:12 -02:00",
        },
      },
      {
        id: "5ed60f01d1c183b898c84a03",
        status: {
          criticality: "warning",
          verified: true,
        },
        address: "699 Jewel Street, Whitehaven, Iowa, 6558",
        position: {
          from: {
            latitude: 88.258495,
            longitude: 47.787136,
          },
          to: {
            latitude: -89.426602,
            longitude: -157.049446,
          },
        },
        interval: {
          startTime: "2016-02-01T09:27:23 -01:00",
          endTime: "2016-01-05T09:57:52 -01:00",
          entryTime: "2016-05-05T12:55:57 -02:00",
        },
      },
    ],
  },
};

describe("getIncidents", () => {
  it("Returns array of incidents", () => {
    expect(getIncidents(mockState)).toStrictEqual(mockState.incidents.data);
  });
});

describe("getIncidentById", () => {
  it("Returns incident by ID ", () => {
    expect(
      getIncidentById("5ed60f01f82566b3a5363c4f")(mockState)
    ).toStrictEqual(mockState.incidents.data[0]);
  });
});
