import React from "react"
import { Link } from "gatsby"
import PostItems from "./EventItems"
import PostItem from "./EventItem"
import useAllEvents from "../../hooks/use-all-events"
import Button from "../Button/Button"

const LatestEvents = ({ title, introduction }) => {
  const latestBlogPost = useAllEvents()
  return (
    <div className="section">
      <div className="container container__tight">
        {title || introduction ? (
          <div className="intro__area">
            {title && (
              <h2>
                {title}
                <span>.</span>
              </h2>
            )}
            {introduction && <p>{introduction}</p>}
          </div>
        ) : null}

        <PostItems>
          {latestBlogPost.map((node, index) => {
            return <PostItem key={index} node={node} />
          })}
        </PostItems>
        <div className="learn__more">
          <Button text="All Events" as={Link} to="/events" />
        </div>
      </div>
    </div>
  )
}

export default LatestEvents
