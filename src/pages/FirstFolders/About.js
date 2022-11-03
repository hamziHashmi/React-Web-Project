import { NavLink } from "react-router-dom";
function AboutPage() {
  return (
    <div>
      <div class="heading">
        <h3>about us</h3>
        <p>
          <a href="home.html">home </a> <span> / about</span>
        </p>
      </div>

      <section class="about">
        <div class="row">
          <div class="image">
            <img src="images/img2.png" alt="" />
          </div>

          <div class="content">
            <h3>why choose us?</h3>
            <p>
              Market Place is designed for students,where they can buy products
              and join in clubs .It is simple and three step process where items
              can be delivered free at any location in Arlington..
            </p>
            <NavLink to="/services">
            <a class="btn">
              our Services
            </a>
            </NavLink>
          </div>
        </div>
      </section>

      <section class="steps">
        <h1 class="title">3 simple steps</h1>

        <div class="box-container">
          <div class="box">
            <img src="images/step-1.png" alt="" />
            <h3>select product</h3>
            <p>Select product from the menu section</p>
          </div>

          <div class="box">
            <img src="images/step-1.png" alt="" />
            <h3>order online</h3>
            <p>
              Add to cart and order it anwhere in the online can be paid in cash
              or card
            </p>
          </div>

          <div class="box">
            <img src="images/step-2.png" alt="" />
            <h3>get it delivered at your doorstep</h3>
            <p>
              The product can be delivered free from next 3 business days
              anwhere in the Arlington.
            </p>
          </div>
        </div>
      </section>

      <section class="reviews">
        <h1 class="title">customer's reviews</h1>

        <div class="swiper reviews-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide slide">
              <img src="images/pic-4.png" alt="" />
              <p>
                Lasttime I purchased Web data Management book.The book delivered
                freely in 1 day .I love shooping in Market Place.
              </p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <h3>Sheela.M</h3>
            </div>

            <div class="swiper-slide slide">
              <img src="images/pic-5.png" alt="" />
              <p>Fantastic Services Offered by them.I really liked it</p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <h3>Deok Gun park</h3>
            </div>

            <div class="swiper-slide slide">
              <img src="images/pic-6.png" alt="" />
              <p>I love shopping with them!!!!</p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <h3>john deo</h3>
            </div>
          </div>
        </div>
      </section>
      <footer class="footer">
        <section class="box-container">
          <div class="box">
            <img src="images/email-icon.png" alt="" />
            <h3>email</h3>
            <a href="mailto:mxk66@gmail.com">abc@gmail.com</a>
            <a href="mailto:sxn645@gmail.com">xyz@gmail.com</a>
          </div>

          <div class="box">
            <img src="images/clock-icon.png" alt="" />
            <h3>opening hours</h3>
            <p>00:07am to 00:10pm</p>
          </div>

          <div class="box">
            <img src="images/map-icon.png" alt="" />
            <h3>our address</h3>
            <a href="https://www.google.com/maps">
              S.Nedderman Hall UTA Arlington-76010
            </a>
          </div>

          <div class="box">
            <img src="images/phone-icon.png" alt="" />
            <h3>our number</h3>
            <a href="tel:1234567890">+123-456-7890</a>
            <a href="tel:1112223333">+111-222-3333</a>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default AboutPage;
