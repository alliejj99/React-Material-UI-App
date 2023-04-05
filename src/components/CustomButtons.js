import React from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const CustomButtons = () => {
  return (
    <React.Fragment>
      <Button
        sx={{
          margin: "10px",
          color: "white",
          backgroundColor: "gray",
          "&:hover": {
            backgroundColor: "black",
          },
          "&:disabled": {
            color: "black",
            backgroundColor: "white",
          },
        }}
      >
        Custom Style 1
      </Button>
      <CustomButton>Custom Style 2</CustomButton>
    </React.Fragment>
  );
};

const CustomButton = styled(Button)({
  color: "white",
  backgroundColor: "pink",
  "&:hover": {
    backgroundColor: "black",
  },
  "&:disabled": {
    color: "black",
    backgroundColor: "white",
  },
});

export default CustomButtons;
