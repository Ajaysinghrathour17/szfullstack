import React from 'react'
import { Link } from 'react-router-dom'
// import LoginPage from './LoginPage'
import Login from '../components/login/Login.jsx'

const Home = () => {
  return (
    <>
    <div>Home</div>

<Link to= "/admin/dashboard">
  Go to dashboard
</Link>

<section  style={{backgroundColor:"black"}}>
  <div>
    <Login />
  </div>
</section>
</>
  )
}

export default Home