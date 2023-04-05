import React from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const CustomThemeButtons = () => {
  return (
    <div>
      <Button color="secondary">Theme Button</Button>
      <CustomThemeButton>Custom Theme Button</CustomThemeButton>
    </div>
  );
};

const CustomThemeButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: "black",
  },
  "&:disabled": {
    color: "black",
    backgroundColor: "white",
  },
}));

export default CustomThemeButtons;
