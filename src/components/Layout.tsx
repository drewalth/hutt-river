import React from "react"
import { GlobalStyle } from "../styles/GlobalStyles"
import { motion } from "framer-motion"
import AnimMain from "./AnimMain"
import NavModule from "./NavModule/NavModule"
import Footer from "./Footer/Footer"
import { deflate } from "zlib"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        <NavModule />
        <AnimMain>
          {children}
          <Footer />
        </AnimMain>
      </motion.div>
    </>
  )
}

export default Layout
