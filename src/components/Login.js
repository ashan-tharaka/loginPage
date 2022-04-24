import React,{useState} from 'react';
import './Login.css';
import {useNavigate} from "react-router";
import axios from "axios";

const Login =()=>{
    const[state,setState]=useState({

        username:"",
        password:"",
        usersName:[],
        usersPass:[]
    });


    const handleUsername=(event)=>{
        setState({
            ...state,
            username:event.target.value

        })


    }
    const handlePassword=(event)=>{

        setState({
            ...state,
            password:event.target.value


        })
    }
    const submitFunc=async (event) => {

        if (state.username !== "" && state.password !== "") {
            alert("data corrected");

            event.preventDefault();

            try{
                let count=0;
                const url='http://localhost:5000/users';
                axios.get(url)
                    .then((Response)=>{
                        this.setState({
                            usersName:Response.data.username,
                            usersPass:Response.data.password



                        })
                    })
                    .catch((error)=>{
                        console.log(error);

                    })

                for (let i=0;i<state.usersPass.length;i++){
                    if(state.username===state.usersName[i]&&state.password===state.usersPass[i]){
                        count+=1;
                        alert(state.username);
                        alert(state.usersName[i]);



                    }
                }
                if(count>0){
                    alert("Login Successfully");
                }
                else{
                    alert("Your email or password is incorrect");
                    alert(count);


                }


            }
            catch(error){
                console.log(error);
                alert(error);


            }

        } else if (state.username === "" ||state.password === "") {
            event.preventDefault();
            alert("Please fill empty fields");

        }

    }


    return(
           <form onSubmit={submitFunc.bind(this)}>
               <h1>Login</h1>
               <label>
                   UserName
                   <input
                       name="username"
                       type="text"
                       value={state.username}
                       onChange={handleUsername}
                   />
               </label>
               <br />
               <br/>
               <br/>
               <label>
                   Password
                   <input
                       name="password"
                       type="password"
                       value={state.password}
                       onChange={handlePassword}
                   />
               </label>
               <br/>

               <button >
                   Submit
               </button>
           </form>


       )



}
export default Login;
