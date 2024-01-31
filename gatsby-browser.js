import React from "react"
import { MenuProvider } from "./src/components/MenuContext"
import { AnimatePresence } from "framer-motion"
import "@fontsource/heebo/400.css"
import "@fontsource/heebo/700.css"

export function wrapPageElement({ element }) {
  return <AnimatePresence wait>{element}</AnimatePresence>
}

export function wrapRootElement({ element }) {
  return <MenuProvider>{element}</MenuProvider>
}
