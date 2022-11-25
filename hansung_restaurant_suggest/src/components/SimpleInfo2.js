import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const SimpleInfo2 = (props) => {
    const classes = makeStyles(theme => ({
        paper: {
          padding: theme.spacing(2)
        }
      }));

    return (
        <>
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" color="primary" gutterBottom>
            {props.name}
            </Typography>
            <Typography variant="body1">{props.price}</Typography>
        </Paper>
        </>
    );
};

export default SimpleInfo2;