import React, {useState} from "react";
import { useLocation, Link } from "react-router-dom";
import {
    Button,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    TextField,
    Typography,
  } from "@material-ui/core";


const Famous = ({props}) => {
    return (
        <div style={{width:"250px", height:"200px", textAlign:"center"}}>
        <Card elevation={3}>
            <CardHeader title={props.rastaurant} />
            <CardContent>
                <Typography variant="body1" component="p">
                    <img src={process.env.PUBLIC_URL + `${props.rImg}`} style={{width:"200px", height:"150px", marginLeft:"5px"}}/> <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Link to = {"/introduction/"+`${props.rastaurant}`}>
                <button style={{backgroundColor:"pink",borderRadius:"20px", padding:"10px", marginLeft:"70px", display:"block"}}>
                    가게 상세보기
                </button>
                </Link>
            </CardActions>
        </Card>
        </div>    

    );
}

export default Famous;