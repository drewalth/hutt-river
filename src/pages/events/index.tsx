import React from "react"
import useAllEvents from "../../hooks/use-all-events"
import Layout from "../../components/Layout"

const Index = () => {
  const events = useAllEvents()

  return (
    <>
      <Layout>
        <ul>
          {events.map((event) => (
            <li key={event.title}>
              <a href={event.gatsbyPath}>{event.title}</a> - {event.createdAt}
            </li>
          ))}
        </ul>
      </Layout>
    </>
  )
}

export default Index
