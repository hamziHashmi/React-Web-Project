import React from 'react'
import { NavLink } from 'react-router-dom'

const BusinessProfile = () => {
  return (
    <div>
      <div class="heading">
   <h3>my profile</h3>
   <p><a href="home.html">home </a> <span> / profile</span></p>
</div>

<section class="user-details">
   <div class="user">
      <img src="images/user-icon.png" alt=""/>
      <p><i class="fas fa-user"></i> <span>ADMIN</span></p>
      <p><i class="fas fa-phone"></i> <span>1234567890</span></p>
      <p><i class="fas fa-envelope"></i> <span>admin@gmail.com</span></p>
   </div>
</section>

<section class="products">

    <h1 class="title">Your Products</h1>
 
    <div class="box-container">
 
       <form accept="" method="post" class="box">
          <a href="#" class="fas fa-eye"></a>
          <button class="fas fa-shopping-cart" type="submit" name="add_to_cart"></button>
          <img src="images/battery.png" alt=""/>
          <a href="#" class="cat">chargers & batteries</a>
          <div class="name">9 W battery</div>
          <div class="flex">
             <div class="price"><span>$</span>3<span>/-</span></div>
             <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;"/>
          </div>
       </form>
 
       <form accept="" method="post" class="box">
          <a href="#" class="fas fa-eye"></a>
          <button class="fas fa-shopping-cart" type="submit" name="add_to_cart"></button>
          <img src="images/charger.jpg" alt=""/>
          <a href="#" class="cat">chargers & batteries</a>
          <div class="name">multi-pin charger</div>
          <div class="flex">
             <div class="price"><span>$</span>3<span>/-</span></div>
             <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;"/>
          </div>
       </form>
 
       <form accept="" method="post" class="box">
          <a href="#" class="fas fa-eye"></a>
          <button class="fas fa-shopping-cart" type="submit" name="add_to_cart"></button>
          <img src="images/adapter.jpg" alt=""/>
          <a href="#" class="cat">chargers & batteries</a>
          <div class="name">universal adapter</div>
          <div class="flex">
             <div class="price"><span>$</span>3<span>/-</span></div>
             <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;"/>
          </div>
       </form>
 
       <form accept="" method="post" class="box">
          <a href="#" class="fas fa-eye"></a>
          <button class="fas fa-shopping-cart" type="submit" name="add_to_cart"></button>
          <img src="images/bundle.png" alt=""/>
          <a href="#" class="cat">stationary</a>
          <div class="name">a4 sheets bundle</div>
          <div class="flex">
             <div class="price"><span>$</span>3<span>/-</span></div>
             <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;"/>
          </div>
       </form>
 
       <form accept="" method="post" class="box">
          <a href="#" class="fas fa-eye"></a>
          <button class="fas fa-shopping-cart" type="submit" name="add_to_cart"></button>
          <img src="images/biscuits.jpeg" alt=""/>
          <a href="#" class="cat">snacks</a>
          <div class="name">pack of biscuits</div>
          <div class="flex">
             <div class="price"><span>$</span>3<span>/-</span></div>
             <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;"/>
          </div>
       </form>
 
    </div>
 </section>

 <br></br><br></br>
 <section class="about">
   <div class="title-background">
      <h3>Post & Delete Advertisement</h3>
   </div>
   <NavLink to='/PostAdvertisement'><a class="btn">Post Advertisement</a></NavLink>

   <div class="row">
      <br></br>
      <table class="centre-table custom-table">
         <tr>
            <td colspan="4" styles={{textAlign: 'center'}}><h3>Advertisement you created</h3></td></tr>
            <tr>
            <th>Name</th>
            <th>Action</th>
         </tr>
         <tr>
            <td>Advertisement 1</td>
            <td><i class="fa fa-trash"></i>Delete</td>
         </tr>
         <tr>
            <td>Advertisement 2 </td>
            <td><i class="fa fa-trash"></i>Delete</td>
         </tr>
         <tr>
            <td>Advertisement 3</td>
            <td><i class="fa fa-trash"></i>Delete</td>
         </tr>
         <tr>
            <td>Advertisement 4</td>
            <td><i class="fa fa-trash"></i>Delete</td>
         </tr>
         <tr>
            <td>Advertisement 5</td>
            <td><i class="fa fa-trash"></i>Delete</td>
         </tr>
      </table>
   </div>
</section>

<section class="about">
   <div class="title-background">
      <h3>Your Products</h3>
   </div>
   <NavLink to='/AddProduct'><a class="btn">Add product</a></NavLink>

   <div class="row">
      <br></br>
      <table class="centre-table custom-table">
         <tr>
            <td colspan="4" style={{textAlign: 'center'}}><h3>Products you sell</h3></td>
         </tr>
      </table>
      
      <section class="products">
         <div class="box-container">
            <form accept="" method="post" class="box">
               <img src="images/battery.png" alt=""/>
               <a href="#" class="cat">chargers & batteries</a>
               <div class="name">9 W battery</div>
               <div class="flex">
                  <div class="price"><span>$</span>3<span>/-</span></div>
                  <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;"/>
               </div>
            </form>
            <NavLink to='/ProfilePage'><a class="delete-btn">Delete product</a></NavLink>
         </div>
      </section>
      <section class="products">
         <div class="box-container">
            <form accept="" method="post" class="box">
               <img src="images/battery.png" alt=""/>
               <a href="#" class="cat">chargers & batteries</a>
               <div class="name">9 W battery</div>
               <div class="flex">
                  <div class="price"><span>$</span>3<span>/-</span></div>
                  <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;"/>
               </div>
            </form>
            <NavLink to='/ProfilePage'><a class="delete-btn">Delete product</a></NavLink>
         </div>
      </section>
   </div>  
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
         <div>


            <button class="open-button" onclick="openForm()">Chat</button>

            <div class="chat-popup" id="myForm">
               <form action="/action_page.php" class="form-container">
                  <h1>Chat</h1>

                  <label for="msg"><b>Message</b></label>
                  <textarea placeholder="Type message.." name="msg" required></textarea>

                  <button type="submit" class="btn">Send</button>
                  <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
               </form>
            </div>

         </div>
      </section>



   </footer>

    </div>
  )
}

export default BusinessProfile
