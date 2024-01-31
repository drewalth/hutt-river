import * as React from "react"
import { PerkStyles } from "./PerksModuleStyles"

interface PerkProps {
  children?: React.ReactNode
  title: string
  content: string
}

const Perk = ({ children, title, content }: PerkProps) => {
  return (
    <PerkStyles>
      {children}
      {title && <h3>{title}</h3>}
      {content && <p>{content}</p>}
    </PerkStyles>
  )
}

export default Perk
