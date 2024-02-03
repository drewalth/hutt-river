import React from "react"
import { ResponsiveLine } from "@nivo/line"
import { generateDrinkStats } from "@nivo/generators"
import { linearGradientDef } from "@nivo/core"

const data = generateDrinkStats(18)

const commonProperties = {
  width: 900,
  height: 400,
  margin: { top: 20, right: 20, bottom: 60, left: 0 },

  data,
  animate: true,
  enableSlices: "x",
}

export const GraphModule = () => (
  <ResponsiveLine
    {...commonProperties}
    enableArea={true}
    yScale={{
      type: "linear",
      stacked: true,
    }}
    curve={"monotoneX"}
    defs={[
      linearGradientDef("gradientA", [
        { offset: 0, color: "inherit" },
        { offset: 100, color: "inherit", opacity: 0 },
      ]),
    ]}
    fill={[{ match: "*", id: "gradientA" }]}
  />
)

export const dummyData = [
  {
    id: "japan",
    color: "hsl(287, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 129,
      },
      {
        x: "helicopter",
        y: 238,
      },
      {
        x: "boat",
        y: 237,
      },
      {
        x: "train",
        y: 272,
      },
      {
        x: "subway",
        y: 55,
      },
      {
        x: "bus",
        y: 289,
      },
      {
        x: "car",
        y: 267,
      },
      {
        x: "moto",
        y: 72,
      },
      {
        x: "bicycle",
        y: 298,
      },
      {
        x: "horse",
        y: 75,
      },
      {
        x: "skateboard",
        y: 48,
      },
      {
        x: "others",
        y: 180,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(212, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 236,
      },
      {
        x: "helicopter",
        y: 70,
      },
      {
        x: "boat",
        y: 172,
      },
      {
        x: "train",
        y: 100,
      },
      {
        x: "subway",
        y: 25,
      },
      {
        x: "bus",
        y: 176,
      },
      {
        x: "car",
        y: 56,
      },
      {
        x: "moto",
        y: 135,
      },
      {
        x: "bicycle",
        y: 105,
      },
      {
        x: "horse",
        y: 249,
      },
      {
        x: "skateboard",
        y: 224,
      },
      {
        x: "others",
        y: 251,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(312, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 88,
      },
      {
        x: "helicopter",
        y: 38,
      },
      {
        x: "boat",
        y: 237,
      },
      {
        x: "train",
        y: 171,
      },
      {
        x: "subway",
        y: 107,
      },
      {
        x: "bus",
        y: 80,
      },
      {
        x: "car",
        y: 211,
      },
      {
        x: "moto",
        y: 35,
      },
      {
        x: "bicycle",
        y: 252,
      },
      {
        x: "horse",
        y: 140,
      },
      {
        x: "skateboard",
        y: 265,
      },
      {
        x: "others",
        y: 243,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(342, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 80,
      },
      {
        x: "helicopter",
        y: 57,
      },
      {
        x: "boat",
        y: 44,
      },
      {
        x: "train",
        y: 132,
      },
      {
        x: "subway",
        y: 45,
      },
      {
        x: "bus",
        y: 133,
      },
      {
        x: "car",
        y: 99,
      },
      {
        x: "moto",
        y: 167,
      },
      {
        x: "bicycle",
        y: 143,
      },
      {
        x: "horse",
        y: 201,
      },
      {
        x: "skateboard",
        y: 235,
      },
      {
        x: "others",
        y: 239,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(9, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 86,
      },
      {
        x: "helicopter",
        y: 295,
      },
      {
        x: "boat",
        y: 249,
      },
      {
        x: "train",
        y: 296,
      },
      {
        x: "subway",
        y: 154,
      },
      {
        x: "bus",
        y: 248,
      },
      {
        x: "car",
        y: 213,
      },
      {
        x: "moto",
        y: 298,
      },
      {
        x: "bicycle",
        y: 213,
      },
      {
        x: "horse",
        y: 274,
      },
      {
        x: "skateboard",
        y: 196,
      },
      {
        x: "others",
        y: 274,
      },
    ],
  },
]
