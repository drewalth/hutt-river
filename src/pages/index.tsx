import React from "react"
import Seo from "../components/SEO"
import Layout from "../components/Layout"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Welcome to the Hutt River"
          subTitle="Using a combination of Gatsby and Contentful, Barcadia is ready to deploy and simple to use."
        />
        <BasicTextModule
          title="A super-fast theme that is easy to get started, using the power of
            GatsbyJS"
          content="Using modern CSS properties such as grid, this theme is optmised for
            speed and mobile devices. Giving users an excellent experience on
            any device. Future-proofing your product."
          link="/products"
          linkText="View Products"
        />
        <PerksModule>
          {/* <Perk title="The Title" content="The content" /> */}
        </PerksModule>
      </Layout>
    </>
  )
}

export default Index
