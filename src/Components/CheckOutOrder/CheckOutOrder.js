import React from 'react'
import { NavLink } from 'react-router-dom'

const CheckOutOrder = () => {
  return (
    <div>
      <div class="heading">
   <h3>checkout</h3>
   <p><a href="home.html">home </a> <span> / checkout</span></p>
</div>

<section class="checkout">

   <h1 class="title">order summary</h1>

   <form action="" method="post">
      <div class="cart-items">
         <h3>cart items</h3>
         <p><span class="name">9 W battery</span><span class="price">$3</span></p>
         <p><span class="name">multi-pin charger</span><span class="price">$3</span></p>
         <p><span class="name">classic pack of pens</span><span class="price">$3</span></p>
         <p class="grand-total"><span class="name">grand total :</span> <span class="price">$9</span></p>
         <NavLink to='/CartPage'><a class="btn">view cart</a></NavLink>
      </div>
      <div class="user-info">
         <h3>your info</h3>
         <p><i class="fas fa-user"></i> <span>customer name</span></p>
         <p><i class="fas fa-phone"></i> <span>1234567890</span></p>
         <p><i class="fas fa-envelope"></i> <span>customer@gmail.com</span></p>
         <NavLink to='/UpdateProfile'><a class="btn">update info</a></NavLink>
         <h3>delivery address</h3>
         <p class="address"><i class="fas fa-map-marker-alt"></i> <span>customer address</span></p>
         <NavLink to='/UpdateAddress'><a class="btn">update address</a></NavLink>
         <select name="method" class="box" required>
            <option value="" disabled selected>select payment method</option>
            <option value="cash on delivery">cash on delivery</option>
            <option value="credit card">credit card</option>
            <option value="paytm">paytm</option>
            <option value="paypal">paypal</option>
         </select>
      </div>
      <input type="submit" value="place order" name="order" class="btn order-btn"/>

      <footer class="footer">

   <section class="box-container">

      <div class="box">
         <img src="images/email-icon.png" alt=""/>
         <h3>our email</h3>
         <a href="mailto:sxn5353@gmail.com">sxn5353@gmail.com</a>
         <a href="mailto:mcxj@gmail.com">mxk66@gmail.com</a>
      </div>

      <div class="box">
         <img src="images/clock-icon.png" alt=""/>
         <h3>opening hours</h3>
         <p>00:07am to 00:10pm </p>
      </div>

      <div class="box">
         <img src="images/map-icon.png" alt=""/>
         <h3>our address</h3>
         <a href="https://www.google.com/maps">S.Nederman Hall UTA-Arlington-76010</a>
      </div>

      <div class="box">
         <img src="images/phone-icon.png" alt=""/>
         <h3>our number</h3>
         <a href="tel:1234567890">+123-456-7890</a>
         <a href="tel:1112223333">+111-222-3333</a>
      </div>

   </section>

</footer>

   </form>

</section>

    </div>
  )
}

export default CheckOutOrder
