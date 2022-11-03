import React from 'react'

const UpdateProfile = () => {
  return (
    <div>
      
      <section class="form-container">

<form action="" method="POST">
   <h3>update customer profile</h3>
   <input type="text" required maxlength="20" name="name" placeholder="enter your name" class="box" oninput="this.value = this.value.replace(/\s/g, '')" value="customer name"/>
   <input type="email" required maxlength="50" name="email" placeholder="enter your email" class="box" oninput="this.value = this.value.replace(/\s/g, '')" value="customer@gmail.com"/>
   <input type="numner" min="0" max="9999999999" onkeypress="if(this.value.length == 10) return false;" placeholder="enter your number" required class="box" name="number" value="1234567890"/>
   <input type="password" maxlength="20" name="old_pass" placeholder="enter your old password" class="box" oninput="this.value = this.value.replace(/\s/g, '')"/>
   <input type="password" maxlength="20" name="new_pass" placeholder="enter your new password" class="box" oninput="this.value = this.value.replace(/\s/g, '')"/>
   <input type="password" maxlength="20" name="confirm_pass" placeholder="confirm your new password" class="box" oninput="this.value = this.value.replace(/\s/g, '')"/>
   <input type="submit" value="update now" class="btn" name="submit"/>
</form>

</section>

<footer class="footer">

   <section class="box-container">

      <div class="box">
         <img src="images/email-icon.png" alt=""/>
         <h3>email</h3>
         <a href="mailto:abc@gmail.com">abc@gmail.com</a>
         <a href="mailto:xyz@gmail.com">xyz@gmail.com</a>
      </div>

      <div class="box">
         <img src="images/clock-icon.png" alt=""/>
         <h3>opening hours</h3>
         <p>00:07am to 00:10pm </p>
      </div>

      <div class="box">
         <img src="images/map-icon.png" alt=""/>
         <h3>our address</h3>
         <a href="https://www.google.com/maps">mumbai, india - 400104</a>
      </div>

      <div class="box">
         <img src="images/phone-icon.png" alt=""/>
         <h3>our number</h3>
         <a href="tel:1234567890">+123-456-7890</a>
         <a href="tel:1112223333">+111-222-3333</a>
      </div>

   </section>

</footer>

    </div>
  )
}

export default UpdateProfile
