import { NavLink } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      <div class="heading">
        <h3>Blog</h3>
        <p>
          <NavLink to="/">
          <a >home </a> <span> / Blog</span>
          </NavLink>
        </p>
      </div>

      <section class="about">
        <div class="row">
          <div class="image">
            <img src="images/topimage2.jpg" alt="" />
          </div>

          <div class="content">
            <h3>Welcome to Mercado Escolar Blog</h3>
            <p>
              At Mercado Escolar, we offer the best marketing platform in the
              world making sure that your products reach ou to large number of
              your customers .
            </p>
            <NavLink to="/services">
            <a class="btn">
              our Services
            </a>
            </NavLink>
          </div>
        </div>
      </section>

      <section class="about">
        <div class="row">
          <div class="image">
            <img src="images/topimage1.jpg" alt="" />
          </div>

          <div class="content">
            <h3>Advantages</h3>
            <p>
              At Mercado Escolar it’s easy and fast to buy goods. You can also
              get those products delivered right at your doorstep. If there is a
              problem with your purchase, you can immediately contact customer
              service and they will help you out. The most amazing thing about
              an online store is that it will not matter where in the world you
              are living or what time of day it is — everything that’s for sale
              on the site will be available for purchase on any platform,
              regardless of which country or region the user resides in
            </p>
          </div>
        </div>
      </section>

      <section class="steps">
        <h1 class="title">More Advantages</h1>

        <div class="box-container">
          <div class="box">
            <img src="images/topimage2.jpg" alt="" />
            <h3>Easy To use</h3>
            <p>
              our product is all good with good user expirience that enables the
              customers to view all the goods and services they are looking for.
              This application readily presents all products of different
              category to different customers.
            </p>
            <p>SEPT 10, 2022</p>
          </div>

          <div class="box">
            <img
              src="https://static.pexels.com/photos/265087/pexels-photo-265087.jpeg"
              alt=""
            />
            <h3>Tech Marketing</h3>
            <p>
              hrough this, marketing become easier and it has helped us to reach
              to a large number of customers in a short time. This has also
              helped us increase uor supply thus through this application our
              income has realy increased
            </p>
          </div>

          <div class="box">
            <img
              src="https://static.pexels.com/photos/261628/pexels-photo-261628.jpeg"
              alt=""
            />
            <h3>Good Customer relationship</h3>
            <p>
              Through this application, we are able to have a good communication
              with our customers. It has enabled the customers to express thier
              requirements well thus makin us to respond to their need on time.
              This have in general improved our relationship with the customer
              and its evidence through the feed back we have been recieving
            </p>
          </div>
        </div>
      </section>

      <section class="reviews">
        <h1 class="title">Disadvantages</h1>

        <div class="swiper reviews-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide slide">
              {/* <img src="images/pic-4.png" alt="" /> */}
              <p>
                The new application eliminates the face to face customer time.
                This is a challange we feel that some customers may have
                difficulties in expressing themselves. Also some customers may
                fail to understand how the apllication works. More so, the
                apllication has led to a decrease in customers trusts since some
                customer may not trust any goods bought online thus it has
                created doubts in some customers towards us
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="about">
        <div class="row">
          <div class="image">
            <img src="images/marketus.jpg" alt="" />
          </div>

          <div class="content">
            <h3>Advertise with Us</h3>
            <p>Market with and become better.....</p>
          </div>
        </div>
      </section>
      <section class="about">
        <div class="row">
          <div class="image">
            <img src="images/increse.jpg" alt="" />
          </div>

          <div class="content">
            <h3>increase Sales</h3>
            <p>
              At Mercado Escolar it’s easy and fast to buy goods. You can also
              get those products delivered right at your doorstep. .......
            </p>
          </div>
        </div>
      </section>
      <section class="about">
        <div class="row">
          <div class="image">
            <img src="images/together.jpg" alt="" />
          </div>

          <div class="content">
            <h3>organizational Workforse</h3>
            <p>
              At Mercado Escolar it’s easy and fast to buy goods. You can also
              get those products delivered right at your doorstep. If there is a
              problem with your purchase, you can immediately contact customer
              service and they will help you out. The most amazing thing about
              an online store is that it will not matter where in the world you
              are living or what time of day it is — everything that’s for sale
              on the site will be available for purchase on any platform,
              regardless of which country or region the user resides in
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
