import * as React from "react"
import { EventItemsStyles } from "./EventStyles"

const EventItems = ({ children }) => {
  return <EventItemsStyles>{children}</EventItemsStyles>
}

export default EventItems
