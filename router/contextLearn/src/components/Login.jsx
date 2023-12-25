import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'


function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return (
        <div>
            <h2>
                Login {"   "}
                <input type="text" value={username} name="username" onChange={(e) => setUsername(e.target.value)} placeholder='username' /> 
                {"    "}
                <input type="text" name="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleSubmit}>Submit</button>

            </h2> 
        </div>
    )
}

export default Login