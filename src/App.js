import "./App.css";
import { Typography } from "@mui/material";
import Buttons from "./components/Buttons";
import CustomButtons from "./components/CustomButtons";
import CustomThemeButtons from "./components/CustomThemeButtons";
import Breakpoints from "./components/Breakpoints";

function App() {
  return (
    <div>
      <Buttons />
      <CustomButtons />

      <Typography variant="h1" gutterBottom>
        h1. Text
      </Typography>
      <CustomThemeButtons />

      <Breakpoints />
    </div>
  );
}

export default App;
