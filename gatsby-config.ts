import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Hutt River`,
    siteUrl: `https://huttriver.co.nz`,
    author: "Drew Althage",
    twitterUsername: "huttrivernz",
    facebookUsername: "huttrivernz",
    instagramUsername: "huttrivernz",
    image: "/macbook-color.jpg",
    developerName: "Drew Althage",
    developerUrl: "https://github.com/drewalth/hutt-river",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: false,
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    `gatsby-plugin-styled-components`,
  ],
}

export default config
