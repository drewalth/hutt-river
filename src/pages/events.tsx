import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Calendar from "react-calendar"

const Events = () => {
  return (
    <>
      <Seo title="Events" />
      <Layout>
        <div>
          <Calendar
            onChange={(val) => {
              console.log(val)
            }}
          />
        </div>
      </Layout>
    </>
  )
}

export default Events
