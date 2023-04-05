import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
// import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { Accessibility } from "@mui/icons-material";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import "./App.css";
import { blue, green, red } from "@mui/material/colors";

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

      <Button color="secondary">Theme Button</Button>
      <CustomThemeButton>Custom Theme Button</CustomThemeButton>

      <Root>
        <Typography>down(md): red</Typography>
        <Typography>up(md): blue</Typography>
        <Typography>up(lg): green</Typography>
      </Root>
    </div>
  );
}

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
