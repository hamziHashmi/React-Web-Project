import React from 'react'
import { NavLink } from "react-router-dom";
const Profile = () => {
    return (
        <div>
            <div class="heading">
                <h3>my profile</h3>
                <NavLink to='/'>
                <p><a>home </a> <span> / profile</span></p>
                </NavLink>
            </div>

            <section class="user-details">
                <div class="user">
                    <img src="images/user-icon.png" alt="" />
                    <p><i class="fas fa-user"></i> <span>customer name</span></p>
                    <p><i class="fas fa-phone"></i> <span>1234567890</span></p>
                    <p><i class="fas fa-envelope"></i> <span>customer@gmail.com</span></p>
                    <NavLink to='/UpdateProfile'><a class="btn">update profile</a></NavLink>
                    <p class="address"><i class="fas fa-map-marker-alt"></i> <span>customer address</span></p>
                    <NavLink to='/UpdateAddress'><a class="btn">update address</a></NavLink>
                </div>
            </section>

            <section className="about">
                <div className="title-background">
                    <h3>Clubs Details</h3>
                </div>
                <NavLink to='/AddClub'><a className="btn">Add A club</a></NavLink>
                <NavLink to='/JoinClub'> <a className="btn">Join A Club</a></NavLink>

                <div class="row">
                    <br></br>
                    <table class="centre-table custom-table">
                        <tr>
                            <td colspan="4" styles={{textAlign: 'center'}}><h3>Clubs you created</h3></td></tr>
                        <tr>
                            <th>Club Name</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>IMU CLub</td>
                            <td><i class="fa fa-trash"></i>Delete</td>
                        </tr>
                        <tr>
                            <td>Sports Club </td>
                            <td><i class="fa fa-trash"></i>Delete</td>
                        </tr>
                        <tr>
                            <td>Cultural Club</td>
                            <td><i class="fa fa-trash"></i>Delete</td>
                        </tr>
                        <tr>
                            <td>Google Developers Club</td>
                            <td><i class="fa fa-trash"></i>Delete</td>
                        </tr>
                        <tr>
                            <td>Innovation Club</td>
                            <td><i class="fa fa-trash"></i>Delete</td>
                        </tr>
                    </table>
                </div>

                <div class="row">
                    <br></br>
                        <table class="centre-table custom-table">
                            <tr>
                                <td colspan="4" styles={{textAlign: 'center'}}><h3>Clubs you joined</h3></td></tr>
                            <tr>
                                <th>Club Name</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>IMU CLub</td>
                                <td><i class="fa fa-arrow-left"></i>Leave</td>
                            </tr>
                            <tr>
                                <td>Sports Club </td>
                                <td><i class="fa fa-arrow-left"></i>Leave</td>
                            </tr>
                            <tr>
                                <td>Cultural Club</td>
                                <td><i class="fa fa-arrow-left"></i>Leave</td>
                            </tr>
                            <tr>
                                <td>Google Developers Club</td>
                                <td><i class="fa fa-arrow-left"></i>Leave</td>
                            </tr>
                            <tr>
                                <td>Innovation Club</td>
                                <td><i class="fa fa-arrow-left"></i>Leave</td>
                            </tr>
                        </table>
                    </div>
                    </section>

                    <section class="about">
   <div class="title-background">
      <h3>Post & Delete Advertisement</h3>
   </div>
   <NavLink to='/PostAdvertisement'><a  class="btn">Post Advertisement</a></NavLink>

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
  <NavLink to='/BuyProduct'><a class="btn">Buy products</a></NavLink>

   <div class="row">
      <br></br>
      <table class="centre-table custom-table">
         <tr>
            <td colspan="4" styles={{textAlign: 'center'}}><h3>Products you sell</h3></td>
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
   </div>  
</section>

<section class="about">
   <div class="row">
      <br></br>
      <table class="centre-table custom-table">
         <tr>
            <td colspan="4" styles={{textAlign: 'center'}}><h3>Products you bought</h3></td></tr>

      </table>

      <section class="products">
         <div class="box-container">
            <form accept="" method="post" class="box">
               <img src="images/adapter.jpg" alt=""/>
               <a href="#" class="cat">Plugs and Cables</a>
               <div class="name">Universal Adapter</div>
            </form>
            <NavLink to='/ProfilePage'><a class="delete-btn">Return product</a></NavLink>
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

   </section>

</footer>
                </div>
                )
}

                export default Profile
