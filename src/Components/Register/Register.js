import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <section class="form-container">

<form action="" method="post">
   <h3>register now</h3>
   <input type="text" required maxlength="20" name="name" placeholder="enter your name" class="box" oninput="this.value = this.value.replace(/\s/g, '')"/>
   <input type="email" required maxlength="50" name="email" placeholder="enter your email" class="box" oninput="this.value = this.value.replace(/\s/g, '')"/>
   <input type="numner" min="0" max="9999999999" onkeypress="if(this.value.length == 10) return false;" placeholder="enter your number" required class="box" name="number"/>
   <input type="password" required maxlength="20" name="pass" placeholder="enter your password" class="box" oninput="this.value = this.value.replace(/\s/g, '')"/>
   <input type="password" required maxlength="20" name="cpass" placeholder="confirm your password" class="box" oninput="this.value = this.value.replace(/\s/g, '')"/>
   <input type="submit" value="register now" class="btn" name="submit"/>
   <p>already have an account? <NavLink to='/Login'><a>login</a></NavLink></p>
</form>

</section>
    </div>
  )
}

export default Register
