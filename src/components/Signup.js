import React, {useRef, useState} from 'react';
import './Signup.css';
import axios from "axios";
import {useNavigate} from "react-router";
const Signup=()=>{
    const[state,setState]=useState({

        username:"",
        email:"",
        password:"",
    });
  const navigate=useNavigate();

    const handleUsername=(event)=>{
        setState({
            ...state,
            username:event.target.value

        })


    }

    const handleEmail=(event)=>{
        setState({
            ...state,
            email:event.target.value

        })


    }
    const handlePassword=(event)=>{

        setState({
            ...state,
            password:event.target.value


        })
    }
    const submitFunc=async (event) => {

        if (state.username !== "" && state.password !== "" && state.email !== "") {
            alert("data corrected");

            event.preventDefault();

            try{

                const url = "http://localhost:5000/users";
                const {state: res} = await axios.post(url, state);
                alert("Registration Successfully");
                console.log(res.message);
                navigate("/login");

            }
            catch(error){
                console.log(error);

            }

        } else if (state.username === "" || state.email === "" || state.password === "") {
            event.preventDefault();
            alert("Please fill empty fields");

        }

    }


    return(
            <form onSubmit={submitFunc.bind(this)}>

                <h1>SignUp</h1>
                <label>
                    UserName
                    <input
                        name="username"
                        type="text"
                        value={state.username}

                        onChange={handleUsername}
                    />
                </label>
                <label>
                    Email
                    <input
                        name="email"
                        type="email"
                       value={state.email}
                        onChange={handleEmail}
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
export default Signup;

