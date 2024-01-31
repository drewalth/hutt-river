import React, { useContext } from "react"
import MenuContext, { useMenuContext } from "./MenuContext"
import { motion } from "framer-motion"

interface AnimMainProps {
  children: React.ReactNode
}

const AnimMain = ({ children }: AnimMainProps) => {
  const { isOpen } = useMenuContext()

  const siteBody = {
    open: {
      x: "var(--menuWidth)",
    },
    closed: {
      x: 0,
    },
  }

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={siteBody}
      transition={{ type: "ease", stiffness: 50, velocity: 50 }}
      style={{
        transition: "filter 0.3s ease",
        filter: isOpen ? "blur(25px)" : "none",
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimMain
