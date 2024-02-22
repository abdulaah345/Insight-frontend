import AppHeader from "./components/AppHeader";
import "./App.css";
import { Grid } from "@mui/material";
import { Sidebar } from "./components/Sidebar/Sidebar";
import Signup from "./components/register";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <AppHeader />
      <Grid container spacing={2}>
        <Grid item xs={2}>          
        </Grid>
      </Grid>
      <Signup/>
      <Login/>
    </div>
  );
};

export default App;
