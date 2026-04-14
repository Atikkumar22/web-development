import React from 'react'
import "../styles/form.scss"
import { Link } from "react-router-dom";
import axios from "axios"

const Login = () => {

  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  async function handleSubmit(e){
    e.preventDefault()

    axios.post("http://localhost:3000/api/auth/login",{
      username,
      password
    },{withCredentials: true})

    .then(res => {
      console.log(res.data)
    })
  }

  return (
    <div>
      <main>
        <div className='form-container'>
          <h1>Login</h1>

          <form onSubmit={handleSubmit}>
            <input
              onInput={(e) => { setUsername(e.target.value) }}
              type="text"
              name='username'
              placeholder='Enter username' />
            <input
              onInput={(e) => { setPassword(e.target.value) }}
              type="password"
              name='password'
              placeholder='Enter password' />
            <button>Login</button>
          </form>

          <p>Don't have an account? <Link className='authFormSwitch' to="/register" >Register</Link></p>

        </div>
      </main>
    </div>
  )
}

export default Login
