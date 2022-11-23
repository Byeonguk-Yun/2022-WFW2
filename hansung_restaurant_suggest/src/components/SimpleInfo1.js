import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Typography,
} from "@material-ui/core";
import restaurant from "../dummy/restaurant.json";
import userList from "../dummy/user.json";
import { useLocation, Link } from 'react-router-dom';

const SimpleInfo1 = ( props ) => {
    console.log("가게 전달 " + props.restaurant);
    const name = props.restaurant;
    console.log("name " + name);
    
    
    var about = null;
    const addr = restaurant.list.map((r) => {
        if((r.rastaurant) === name)
            return about = r;
    })
    console.log(about.rastaurant);
    

    return(
    <div style={{width:"250px", height:"200px", textAlign:"center"}}>
    <Card elevation={5}>
        <CardHeader title={name} />
        <CardContent>
            <Typography variant="body1" component="p">
                <img src={process.env.PUBLIC_URL+about.rImg} style={{width:"200px", height:"150px", marginLeft:"5px"}}/> <br />
            </Typography>
        </CardContent>
        <CardActions>
            <Link to = {"/introduction/"+name}>
            <button style={{backgroundColor:"pink",borderRadius:"20px", padding:"10px", marginLeft:"70px", display:"block"}}>
                가게 상세보기
            </button>
            </Link>
        </CardActions>
    </Card>
    </div>
    );
}

export default SimpleInfo1;