import http, { checkResponse } from "../common/http"

// {"id":"5524842","river_id":"6","station_id":"10","timestamp":"2024-02-04 08:05:00","value":8.3,"timestamp_readable":"8:05am 4 Feb","age_hours":1}

export type HutRiverCurrentFlow = {
  id: string
  river_id: string
  station_id: string
  timestamp: string
  value: number
  timestamp_readable: string
  age_hours: number
}

export const FlowRateApi = {
  getHutRiverCurrentFlow: (): Promise<HutRiverCurrentFlow> =>
    http
      .get("/station/10/json/flow/current?_=1706987513720")
      .then(checkResponse),
}
