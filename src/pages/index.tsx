import React from "react"
import Seo from "../components/SEO"
import Layout from "../components/Layout"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import GageModule from "../components/GageModule/GageModule"
import PerksModule from "../components/PerksModule/PerksModule"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Welcome to the Hutt River"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
        <GageModule />
        <PerksModule />
        <BasicTextModule
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="/events"
          linkText="View Events"
        />
      </Layout>
    </>
  )
}

export default Index
