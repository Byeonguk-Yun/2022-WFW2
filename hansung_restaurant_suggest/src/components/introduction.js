import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import userList from "../dummy/user.json"
import restaurant from "../dummy/restaurant.json"

const Introduction = () => {

    return (
        <div style={{ textAlign: "center", margin: 10 }}>

            <p>소개</p>
            
            <h3>스타동 한성대점</h3>

        </div>
    );
}

export default Introduction;