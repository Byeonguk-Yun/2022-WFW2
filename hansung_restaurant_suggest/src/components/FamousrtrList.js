import React, {useState} from "react";
  import data from '../dummy/restaurant.json';
  import Famous from "./Famous";

const FamousrtrList = () => {
    const [dataList,setData] = useState([]);

    //const randomList = [];
    var i = 0;
    for(; i<3; i++) {
        const randomNum = Math.floor(Math.random()*3)+1;
        //randomList[i] = randomNum;
        setData([data.list[randomNum], ...dataList]);
    }
    console.log(dataList);


    return (

        <>
            {dataList.map( item => (
                <Famous props={item}/>
            ))}
        </>
    );
}

export default FamousrtrList;