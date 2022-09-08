import { useState } from "react";
import LineChart from "./Graph";
import { UserData } from "./Data";
import { Typography } from "@mui/material";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    heading1: {
      color: "white",
      fontSize:"25px",
      fontWeight:1800,
      textAlign:"left",
      margin:"10px"
     
  
    },
  });
  
function GraphMain() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        // backgroundColor: [
        //   "white",
        //   "#ecf0f1",
        //   "white",
        //   "white",
        //   "white",
        // ],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  });

  const classes = useStyles();

  return (
    <div>  
        <Typography className={classes.heading1}>Total No.of Cases</Typography>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div> 
    </div>
  );
}

export default GraphMain;