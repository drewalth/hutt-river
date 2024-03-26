import { graphql, useStaticQuery } from "gatsby"

const useAllEvents = () => {
  const {
    allContentfulEvent: { nodes },
  } = useStaticQuery(graphql`
    query allEventsQuery {
      allContentfulEvent(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          gatsbyPath(filePath: "/events/{contentfulEvent.slug}")
          createdAt(formatString: "DD MMMM, YYYY")
          shortDescription
        }
      }
    }
  `)

  return nodes
}

export default useAllEvents
