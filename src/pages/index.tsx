import React from "react"
import Seo from "../components/SEO"
import Layout from "../components/Layout"
import BannerModule from "../components/BannerModule/BannerModule"
// import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
// import GageModule from "../components/GageModule/GageModule"
import PerksModule from "../components/PerksModule/PerksModule"
import LatestEvents from "../components/Event/LatestEvents"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Welcome to the Hutt River"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
        {/*<GageModule />*/}

        <LatestEvents
          title={"Upcoming Events"}
          introduction={
            "Cras scelerisque, tellus sed gravida tincidunt, velit tellus blandit justo, nec viverra augue erat in erat. Maecenas iaculis sed purus non fringilla."
          }
        />
        <PerksModule />
      </Layout>
    </>
  )
}

export default Index
