import * as React from "react"
import Button from "../Button/Button"
import { GageModuleStyles } from "./GageModuleStyles"
import { Link } from "gatsby"
import { GageModuleProvider } from "./GageModuleContext"
import { GraphModule } from "./GraphModule"
import { GageSummary } from "./GageSummary"

const GageModule = () => {
  return (
    <GageModuleStyles className="section">
      <GageModuleProvider>
        <div className="container container__tight">
          <div>
            <h2>Gage @ Taita Gorge</h2>
            <GageSummary />
            <div
              style={{
                height: "400px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <GraphModule />
            </div>

            <Button
              text={"View source"}
              as={Link}
              to={"https://flowrate.co.nz/river/hutt-river/taita-gorge"}
            />
          </div>
        </div>
      </GageModuleProvider>
    </GageModuleStyles>
  )
}

export default GageModule
