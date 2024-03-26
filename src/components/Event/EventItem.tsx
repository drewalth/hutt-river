import * as React from "react"
import Button from "../Button/Button"
import { EventItemStyles } from "./EventStyles"

const BlogItem = ({ node }, key) => {
  const { title, gatsbyPath, shortDescription, createdAt } = node
  return (
    <EventItemStyles key={key} to={gatsbyPath}>
      <h4>{title}</h4>
      {shortDescription && <p>{shortDescription}</p>}
      <div className="blogitem__meta">
        <Button as="span" text="Read More" arrow={true} />
        <p>{createdAt}</p>
      </div>
    </EventItemStyles>
  )
}

export default BlogItem
