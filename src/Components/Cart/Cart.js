import React from 'react'
import { NavLink } from 'react-router-dom'

const Cart = () => {
    return (
        <div>
            <div class="heading">
                <h3>shopping cart</h3>
                <p><a href="home.html">home </a> <span> / cart</span></p>
            </div>

            <section class="products">

<h1 class="title">your cart</h1>

<div class="cart-total">
   <p>grand total : <span>$9/-</span></p>
   <NavLink to='/CheckOutOrder'><a class="btn">checkout orders</a></NavLink>
   </div>

<div class="box-container">

   <div class="box">
      <a href="#" class="fas fa-eye"></a>
      <button class="fas fa-times" type="submit" name="delete" onclick="return confirm('delete this item?')"></button>
      <img src="images/battery.png" alt=""/>
      <div class="name">9 W battery</div>
      <div class="flex">
         <div class="price"><span>$</span>3</div>
         <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;"/>
         <button type="submit" class="fas fa-edit"></button>
      </div>
      <div class="sub-total">sub total : <span>$3</span></div>
   </div>

   <div class="box">
      <a href="#" class="fas fa-eye"></a>
      <button class="fas fa-times" type="submit" name="delete" onclick="return confirm('delete this item?')"></button>
      <img src="images/charger.jpg" alt=""/>
      <div class="name">multi-pin charger</div>
      <div class="flex">
         <div class="price"><span>$</span>3</div>
         <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;"/>
         <button type="submit" class="fas fa-edit"></button>
      </div>
      <div class="sub-total">sub total : <span>$3</span></div>
   </div>

   <div class="box">
      <a href="#" class="fas fa-eye"></a>
      <button class="fas fa-times" type="submit" name="delete" onclick="return confirm('delete this item?')"></button>
      <img src="images/pens.jpeg" alt=""/>
      <div class="name">classic pack of pens</div>
      <div class="flex">
         <div class="price"><span>$</span>3</div>
         <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;"/>
         <button type="submit" class="fas fa-edit"></button>
      </div>
      <div class="sub-total">sub total : <span>$3</span></div>
   </div>

</div>

<div class="more-btn">
   <a href="#" class="delete-btn" onclick="return confirm('delete all from cart?');">delete all</a>
</div>

</section>


























<footer class="footer">

<section class="box-container">

   <div class="box">
      <img src="images/email-icon.png" alt=""/>
      <h3>email</h3>
      <a href="mailto:sx999@gmail.com">abc@gmail.com</a>
      <a href="mailto:mxk77@gmail.com">xyz@gmail.com</a>
   </div>

   <div class="box">
      <img src="images/clock-icon.png" alt=""/>
      <h3>opening hours</h3>
      <p>00:07am to 00:10pm </p>
   </div>

   <div class="box">
      <img src="images/map-icon.png" alt=""/>
      <h3>our address</h3>
      <a href="https://www.google.com/maps">S.Nedderman Hall-UTA-Arlington-76010</a>
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

export default Cart
