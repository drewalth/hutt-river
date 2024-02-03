import React from "react"
import { useGageModuleContext } from "./GageModuleContext"

export const GageSummary = () => {
  const { current, currentRequestStatus } = useGageModuleContext()

  if (currentRequestStatus === "loading") {
    return <div>Loading...</div>
  }

  if (currentRequestStatus === "error") {
    return <div>Error fetching current flow</div>
  }

  if (current !== null) {
    return (
      <div>
        <h4>{`${current.value} cu`}</h4>
        <p>{`Last updated: ${current.timestamp_readable}`}</p>
      </div>
    )
  }

  return null
}
