import React from "react";
import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
// import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { Accessibility } from "@mui/icons-material";

const Buttons = () => {
  return (
    <React.Fragment>
      <Button size="large" variant="text">
        Hello
      </Button>
      <Button fullWidth variant="contained" startIcon={<AcUnitIcon />}>
        Hello
      </Button>
      <Button variant="outlined" endIcon={<Accessibility />}>
        Hello
      </Button>
    </React.Fragment>
  );
};

export default Buttons;
