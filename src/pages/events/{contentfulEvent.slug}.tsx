import React from "react"
import { graphql } from "gatsby"

const Event = ({ data: { contentfulEvent }}) => {
  return (
    <div>
      <h1>{contentfulEvent.title}</h1>
      <p>{contentfulEvent.date}</p>
    </div>
  )
}

export const data = graphql`
  query pageQuery($id: String) {
  contentfulEvent(id: { eq: $id}) {
    title
    startDate(formatString: "DD MMMM, YYYY")
  }
}
`

export default Event
