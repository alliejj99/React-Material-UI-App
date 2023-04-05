import React from "react";
import styled from "@emotion/styled";
import { blue, green, red } from "@mui/material/colors";
import { Typography } from "@mui/material";

const Breakpoints = () => {
  return (
    <Root>
      <Typography>down(md): red</Typography>
      <Typography>up(md): blue</Typography>
      <Typography>up(lg): green</Typography>
    </Root>
  );
};

const Root = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: green[500],
  },
}));

export default Breakpoints;
