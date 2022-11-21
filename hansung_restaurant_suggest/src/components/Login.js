import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate, Link, Route, Routes} from "react-router-dom";
import userList from "../dummy/user.json"

const Login = () => {
  // 로그인 
  const [loginId, setLoginId] = useState(); 
  const [loginPassword, setLoginPassword] = useState();
  const [check, setCheck] = useState(0); 
  
  //로그인
  const login = () => {
    var idCheck = 0;
    var pwCheck = 0;
    try {
      if(userList.user.some((u) => (u.id === loginId))){
        idCheck=1;
      }

      if(userList.user.some((u) => (u.pw === loginPassword))){
        pwCheck=1;
      }
      
      if(idCheck == 1 && pwCheck ==1){
        userList.user.find((u) => {
          if(u.recent.find(r => r!= "마녀식당"))
            u.recent = ([...u.recent, "마녀식당"]);
        })
      }
      console.log("로그인");
      
    } catch (error) {
        console.log("Error" + error.message);
    }
    
  };

  return (
    <div style={{ textAlign: "center", margin: 10 }}>
      
      <div>
        <h3>Login</h3>
        <form>
        <input
          type="text"
          name="loginEmail"
          value={loginId}
          placeholder="Email"
          onChange={(e)=>{
            setLoginId(e.target.value);
          }}
        />
        <input
          type="password"
          name="loginPassword"
          value={loginPassword}
          placeholder="Password"
          onChange={(e)=>{
            setLoginPassword(e.target.value);
          }}
        />
        <Link to={"/mypage/"+loginId+"/"+loginPassword}>
          <button onClick={login}>Login</button>
        </Link>
        
        </form>
      </div>
    </div>
  );
}

export default Login;