import React from 'react'
import useAllEvents from "../../hooks/use-all-events"

const Index = () => {
  const events = useAllEvents()

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.title}>
            <a href={event.gatsbyPath}>{event.title}</a> - {event.createdAt}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Index
