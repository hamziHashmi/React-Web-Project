import React from 'react'

const UpdateAddress = () => {
  return (
    <div>
      <section class="form-container">

<form action="" method="post">
   <h3>your address</h3>
   <input type="text" maxlength="50" placeholder="flat no. and building name" required class="box" name="flat"/>
   <input type="text" maxlength="50" placeholder="area name" required class="box" name="street"/>
   <input type="text" maxlength="50" placeholder="city name" required class="box" name="city"/>
   <input type="text" maxlength="50" placeholder="state name" required class="box" name="state"/>
   <input type="text" maxlength="50" placeholder="country name" required class="box" name="country"/>
   <input type="number" min="0" max="999999" placeholder="pin code" required class="box" name="pin_code" onkeypress="if(this.value.length == 6) return false;"/>
   <input type="submit" value="save address" name="submit" class="btn"/>
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

export default UpdateAddress
