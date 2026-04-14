import React from 'react'
import "../styles/form.scss"
import { Link } from "react-router-dom";

const Login = () => {

  const [username, setUsername] = useState{ ""}
  const [password, setPassword] = useState{ ""}

  return (
    <div>
      <main>
        <div className='form-container'>
          <h1>Login</h1>

          <form>
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
