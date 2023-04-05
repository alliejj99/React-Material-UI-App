import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
// import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { Accessibility } from "@mui/icons-material";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import "./App.css";

function App() {
  return (
    <div>
      <Button size="large" variant="text">
        Hello
      </Button>
      <Button fullWidth variant="contained" startIcon={<AcUnitIcon />}>
        Hello
      </Button>
      <Button variant="outlined" endIcon={<Accessibility />}>
        Hello
      </Button>
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

      <Typography variant="h1" gutterBottom>
        h1. Text
      </Typography>
    </div>
  );
}

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

export default App;
