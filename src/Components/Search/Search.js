import React from 'react'

const Search = () => {
  return (
    <div>
     <section class="search-form">
   <form action="" method="post">
      <input type="text" class="box" name="search_box" placeholder="search here..." maxlength="100"/>
      <button type="submit" class="fas fa-search" name="search_btn"></button>
   </form>
</section>

<section class="products" style={{paddingTop: '0', minHeight: '20vh'}}></section>

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

export default Search
