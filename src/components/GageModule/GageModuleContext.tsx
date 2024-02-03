import React, {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
  useEffect,
} from "react"
import { HutRiverCurrentFlow, FlowRateApi } from "../../api/flowrate"
import { RequestStatus } from "../../types"

interface GageModuleContextData {
  current: HutRiverCurrentFlow | null
  currentRequestStatus: RequestStatus
}

const GageModuleContext = createContext({} as GageModuleContextData)

export const useGageModuleContext = () => useContext(GageModuleContext)

interface GageModuleProviderProps {
  children: React.ReactNode
}

export const GageModuleProvider = ({ children }: GageModuleProviderProps) => {
  const [current, setCurrent] = useState<HutRiverCurrentFlow | null>(null)
  const [currentRequestStatus, setCurrentRequestStatus] =
    useState<RequestStatus>("idle")

  useEffect(() => {
    ;(async () => {
      try {
        setCurrentRequestStatus("loading")
        // const currentFlow = await FlowRateApi.getHutRiverCurrentFlow()
        // setCurrent(currentFlow)

        new Promise((resolve) => setTimeout(resolve, 1000))

        setCurrent({
          id: "5524842",
          river_id: "6",
          station_id: "10",
          timestamp: "2024-02-04 08:05:00",
          value: 8.3,
          timestamp_readable: "8:05am 4 Feb",
          age_hours: 1,
        })

        setCurrentRequestStatus("success")
      } catch (error) {
        debugger
        setCurrentRequestStatus("error")
        console.error("Error fetching current flow", error)
      }
    })()
  }, [])

  return (
    <GageModuleContext.Provider
      value={{
        current,
        currentRequestStatus,
      }}
    >
      {children}
    </GageModuleContext.Provider>
  )
}
