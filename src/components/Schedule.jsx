import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

export const Schedule = () => {
  return FeaturesOne();
};

function FeaturesOne() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <MKTypography variant="h3" my={1}>
              Main Events
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              Pain is what we go through as we become older. We get insulted by others, lose trust
              for those others. We get back stabbed by friends. It becomes harder for us to give
              others a hand.
            </MKTypography>
            <MKTypography
              component={Link}
              to="/schedule"
              variant="body2"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translateX(6px)",
                },
              }}
            >
              Full Schedule
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">kayaking</Icon>
                </MKBox>
                <MKTypography variant="body2" fontWeight={"bold"} color="text" pl={2}>
                  3:00 Kaitoke Gorge Paddle
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">outdoor_grill</Icon>
                </MKBox>
                <MKTypography variant="body2" fontWeight={"bold"} color="text" pl={2}>
                 Food
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">token</Icon>
                </MKBox>
                <MKTypography variant="body2" fontWeight={"bold"} color="text" pl={2}>
                  Something
                </MKTypography>
              </MKBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
