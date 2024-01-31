import * as React from "react"
import { MdArrowForward as Arrow } from "react-icons/md"
import { ButtonStyles } from "./ButtonStyles"

interface ButtonProps {
  text: string
  to: string
  as: any // fix
  arrow?: string
  className?: string
  onClick?: any // fix
}

const Button = ({ text, to, as, arrow, className, onClick }: ButtonProps) => {
  return (
    <ButtonStyles
      className={className ?? "btn"}
      as={as}
      to={to}
      onClick={onClick}
    >
      {text}
      {arrow || to ? <Arrow style={{ marginLeft: "10px" }} /> : null}
    </ButtonStyles>
  )
}

export default Button
