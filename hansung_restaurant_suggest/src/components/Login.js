import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate, Link, Route, Routes} from "react-router-dom";
import userList from "../dummy/user.json"
import "./Login.css";

const Login = () => {
  // 로그인 
  const [loginId, setLoginId] = useState(""); 
  const [loginPassword, setLoginPassword] = useState("");
  
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
    <div class="loginPage">
      <h2 class="title" style={{textAlign:"center"}}>Sign In</h2>
      <form class="loginFrom">
        <div class="loginDiv"> 
          <h4>아 이 디 
          <input class="idpwField" type="text" name="loginEmail" value={loginId} placeholder="ID"
            onChange={(e)=>{ setLoginId(e.target.value); }}/>
          </h4>
          <h4>비밀번호 
          <input class="idpwField" type="password" name="loginPassword" value={loginPassword} placeholder="Password"
            onChange={(e)=>{ setLoginPassword(e.target.value); }} />
          </h4>
          </div>
          
          <br></br>
        <div class="loginDiv"> 
          <Link to={"/mypage/"+loginId+"/"+loginPassword}>
            <button id="loginBtn" onClick={login}>Login</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;