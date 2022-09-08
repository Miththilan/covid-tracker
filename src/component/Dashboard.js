import React from "react";
import TotalView from "./TotalView";
import DetailsTable from "./DetailsTable";
import GraphMain from "./GraphMain";
import {
  Card,makeStyles
 
} from "@material-ui/core";


const useStyles = makeStyles({
 
  card: {
    background: "#574f6b",
    height: "400px",
    borderRadius:"10px"
  },
});
export default function Dashboard() {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "black" }}>
      <div style={{ margin: "20px" }}>
        <TotalView />
       
          <Card className={classes.card}>
          <div style={{marginLeft:"23%"}}>
            <GraphMain />
        </div>

          </Card>
        <div style={{ marginTop: "30px" }}>
          <Card>
            <DetailsTable />
          </Card>
        </div>
      </div>
    </div>
  );
}
