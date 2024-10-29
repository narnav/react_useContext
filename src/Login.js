import React, { useState, useContext  } from 'react'
import axios from 'axios'
import MyContext from './MyContext';
const Login = () => {
    const [username, setuserName] = useState("")
    const [password, setpassword] = useState("")
    const SERVER = "http://127.0.0.1:8000/login"
    const [token, settoken] = useState("")
    const { sharedValue, setsharedValue} = useContext(MyContext)
    const login =  () => {
         axios.post(SERVER, { username, password }).then(res => settoken( res.data.access ))
    }

    return (

        <div>Login
            <button onClick={() => setsharedValue('red')}>red  </button>
            <button onClick={() => setsharedValue('blue')}>blue  </button>
            User name<input onChange={(e) => setuserName(e.target.value)} />
            pwd <input onChange={(e) => setpassword(e.target.value)} />
            <button onClick={() => login()}>Login</button>
            {token && "welcome...."}
        </div>
    )
}

export default Login