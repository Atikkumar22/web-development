import React from 'react'
import "../styles/form.scss"
import { Link } from "react-router-dom";
import axios from "axios"

const Register = () => {

  const [username, setUsername] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    axios.post("http://localhost:3000/api/auth/register", {
      username,
      email,
      password
    }, { withCredentials: true }) //credentials ka jarurat is liye taki hum hamra BE, FE pe cookies ko setup kr sake

      .then(res => {
        console.log(res.data)
      })
  }

  return (
    <main>
      <div className='form-container'>
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <input
            onInput={(e) => { setUsername(e.target.value) }}
            type="text"
            name='username'
            placeholder='Enter username' />
          <input
            onInput={(e) => { setEmail(e.target.value) }}
            type="text"
            name='email'
            placeholder='Enter email' />
          <input
            onInput={(e) => { setPassword(e.target.value) }}
            type="password"
            name='password'
            placeholder='Enter password' />
          <button>Register</button>
        </form>

        <p>Already have an account? <Link className='authFormSwitch' to="/login">Login</Link></p>
      </div>
    </main>
  )
}

export default Register
