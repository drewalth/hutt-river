import BaseLayout from "../layouts/sections/components/BaseLayout"
import View from "../layouts/sections/components/View"
import featuresOneCode from "../layouts/sections/page-sections/featuers/components/FeaturesOne/code"
import FeaturesOne from "../layouts/sections/page-sections/featuers/components/FeaturesOne"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import MKTypography from "./MKTypography"
import Icon from "@mui/material/Icon"
import Stack from "@mui/material/Stack"
import MKBox from "./MKBox"


const items = [
  {
    name: "KAITOKE GORGE PADDLE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    day: "Day 1",
    time: "3:00"
  },
  {
    name: "KAITOKE GORGE PADDLE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    day: "Day 1",
    time: "3:00"
  },
  {
    name: "KAITOKE GORGE PADDLE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    day: "Day 1",
    time: "3:00"
  }
]


export const ScheduleFull = () => {
  return (
    <BaseLayout
      title="Schedule"

    >
      <MKBox component="section" py={{ xs: 3, md: 12 }}>
        <Container>
          <Grid container alignItems="center">
            <Grid item xs={12} lg={6} >
              <Stack>
                {items.map((item, index) => (
                  <MKBox display="flex" alignItems="flex-start" p={2}>
                    <MKBox
                      width="5rem"
                      height="2.5rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      {index + 1}
                    </MKBox>
                   <div style={{
                     display: "flex",
                     flexDirection: "column",
                     marginTop: "-0.25rem"
                   }}>
                     <MKTypography variant="h4" color="text" pl={2}>
                       {item.name}
                     </MKTypography>
                     <MKTypography variant="body2" fontWeight={"medium"} color="text" pl={2}>
                       {`${item.day} at ${item.time}`}
                     </MKTypography>
                     <MKTypography variant="body2" color="text" pl={2}>
                       {item.description}
                     </MKTypography>
                   </div>
                  </MKBox>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </BaseLayout>
  )
}
