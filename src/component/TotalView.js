import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
import { Card, CardContent, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { PostConstant } from "../redux/constants";
import { getTotat } from "../redux/actions/index";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/CalendarViewDay";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles({
  root: {
    background: "blue",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  card: {
    background: "#574f6b",
    height: "200px",
    borderRadius: "10px",
  },
  subCard: {
    background: "#574f6b",
    height: "95px",
    borderRadius: "10px",
    margin: "5px",
  },
  heading: {
    color: "white",
    fontSize: "25px",
    fontWeight: 800,
  },
  heading1: {
    color: "white",
    fontSize: "25px",
    fontWeight: 800,
    textAlign: "left",
    margin: "10px",
  },
  button:{
    color:"red"
  }
});

export default function TotalView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  const [total, setTotal] = useState();
  const [allTime, setAllTime] = useState();
  const [active, setActive] = useState();
  const [deaths, setDeaths] = useState();
  const [recoverd, setRecoverd] = useState();

  useEffect(() => {
    dispatch(getTotat());
  }, []);

  useEffect(() => {
    const { type, payload, error } = post;
    if (type === PostConstant.GETTOTALSUCCESS) {
      setTotal(payload.cases);
      setActive(payload.active);
      setAllTime(payload.updated);
      setDeaths(payload.deaths);
      setRecoverd(payload.recovered);
    }
  }, [post]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography className={classes.heading1}>
        Global Covid-19 Update
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Card className={classes.card}>
            <Grid container>
              <Grid item xs={6} md={6}>
                <CardContent className={classes.heading}>{total}</CardContent>
                <CardContent className={"formCard__body"}>
                  Total Coronavirus Cases
                </CardContent>
              </Grid>
              <Grid item xs={6} md={6}>
                <CardContent className={"formCard__body"}>
                    <Button className={classes.button} variant="outlined" endIcon={<SendIcon />}>
                    <span style={{color:"white"}}>All Time</span>
                    </Button>
                </CardContent>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6} md={6}>
                <CardContent className={classes.heading}>{active}</CardContent>
                <CardContent className={"formCard__body"}>
                  Active Cases
                </CardContent>
              </Grid>
              <Grid item xs={6} md={6}>
                <CardContent className={classes.heading}>
                  {allTime}{" "}
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={6} md={6}>
          <Card className={classes.subCard}>
            <Grid container>
              <Grid item xs={6} md={6}>
                <CardContent className={classes.heading}>{deaths}</CardContent>
                <CardContent className={"formCard__body"}>Deaths</CardContent>
              </Grid>
              <Grid item xs={6} md={6}>
                <CardContent className={classes.heading}> <Button className={classes.button} variant="outlined" endIcon={<SendIcon />}>
                      <span style={{color:"white"}}>All Time</span>
                    </Button> </CardContent>
              </Grid>
            </Grid>
          </Card>
          <Card className={classes.subCard}>
            <Grid container>
              <Grid item xs={6} md={6}>
                <CardContent className={classes.heading}>
                  {recoverd}
                </CardContent>
                <CardContent className={"formCard__body"}>
                  Recovered
                </CardContent>
              </Grid>
              <Grid item xs={6} md={6}>
                <CardContent className={classes.heading}> <Button className={classes.button} variant="outlined" endIcon={<SendIcon />}>
                <span style={{color:"white"}}>All Time</span>

                    </Button> </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
