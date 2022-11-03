import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <section class="form-container">

<form action="" method="post">
   <h3>login now</h3>
   <input type="email" required maxlength="50" name="email" placeholder="enter your email" class="box" oninput="this.value = this.value.replace(/\s/g, '')"/>
   <input type="password" required maxlength="20" name="pass" placeholder="enter your password" class="box" oninput="this.value = this.value.replace(/\s/g, '')"/>
   <input type="submit" value="login now" class="btn" name="submit"/>
   <p>don't have an account? <NavLink to='/Register'><a>register now</a></NavLink></p>
   <p>forget your password? <NavLink to='/'><a>Click Here</a></NavLink></p>
</form>

</section>
    </div>
  )
}

export default Login
