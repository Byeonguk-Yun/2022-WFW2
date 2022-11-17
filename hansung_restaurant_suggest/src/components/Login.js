import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate, Link, Route, Routes} from "react-router-dom";
import userList from "../dummy/user.json"
import MyPage from "./MyPage"

//import {createUserWithEmailAndPassword} from 'firebase/auth';
//import {onAuthStateChanged} from 'firebase/auth';
//import {signInWithEmailAndPassword} from 'firebase/auth';
//import {signOut} from 'firebase/auth';
//import { getAuth } from "firebase/auth";

const Login = () => {
  
  // 회원가입 
  //const [registerEmail, setRegisterEmail] = useState("");
  //const [registerPassword, setRegisterPassword] = useState("");
  
  // 로그인 
  const [loginId, setLoginId] = useState(); 
  const [loginPassword, setLoginPassword] = useState();
  const [check, setCheck] = useState(0); 
  
  /*
  useEffect(() => {
    if (loginId || loginPassword) return;
    setLoginId(loginId);
    setLoginPassword(loginPassword);
  }, [loginId, loginPassword]);
  
  const onChange = (event) => {
    const {target: {name, value}} = event;
    if (name==="loginEmail") {
      setLoginId(value)
    } else if (name=== "loginPassword") {
      setLoginPassword(value);
    }
  }
  */

  /*  
  //회원가입
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        getAuth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  */
  //로그인
  const login = () => {
    var idCheck = 0;
    var pwCheck = 0;
    try {
      //userList.user.some(id => (id === loginId) ? idCheck=1 : idCheck =0 );
      if(userList.user.some((u) => (u.id === loginId))){
        idCheck=1;
      }
      //console.log("id : " + userList.user.id);
      //console.log("LoginId : " + loginId);
      //console.log("idCheck : "+idCheck);

      if(userList.user.some((u) => (u.pw === loginPassword))){
        pwCheck=1;
      }
      
      //console.log("pw : " + userList.user.pw);
      //console.log("LoginPW : " + loginPassword);
      //console.log("pwCheck : "+pwCheck);
      if(idCheck == 1 && pwCheck ==1){
        console.log("로그인");
        //<MyPage id = {loginId} />
        ///console.log("check : "+check);
        //<Route path="/mypage/:id" element={<MyPage id={loginId}/>} />
      }
    } catch (error) {
        console.log("Error" + error.message);
    }
    
  };

  //로그아웃
  const logout = () => {
    //signOut(getAuth);
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
          type="text"
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
//<Link to={"/mypage/:"+loginId}>
export default Login;