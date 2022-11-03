import "./App.css";
// import "./main.js";
import { Outlet, Link, NavLink } from "react-router-dom";
// import Header from "./header";

function Home() {
  return (
    <div>
      {/* <Header /> */}
      <section class="home">
        <div class="swiper home-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide slide">
              <div class="content">
                <span>this is your college marketplace</span>
                <h3>Welcome to a new shopping experience!</h3>
                <NavLink to="/services">
                <a class="btn">
                  see our Service
                </a>
                </NavLink>
              </div>
              <div class="image">
                <img src="images/img1.png" alt="" />
              </div>
            </div>

            <div class="swiper-slide slide">
              <div class="content">
                <span>easy connect</span>
                <h3>Connect with business owners to find and buy products</h3>
                <a href="menu.html" class="btn">
                  see our services
                </a>
              </div>
              <div class="image">
                <img src="images/college.png" alt="" />
              </div>
            </div>

            <div class="swiper-slide slide">
              <div class="content">
                <span>quick delivery</span>
                <h3>Get Your Order via Free Delivery</h3>
                <a href="menu.html" class="btn">
                  see our services
                </a>
              </div>
              <div class="image">
                <img src="images/delivery.jpg" alt="" />
              </div>
            </div>
          </div>

          <div class="swiper-pagination"></div>
        </div>
      </section>

      <section class="category">
        <h1 class="title">Product Categories</h1>

        <div class="box-container">
          <a href="." class="box">
            <img src="images/cat1.jpg" alt="" />
            <h3>Stationary</h3>
          </a>

          <a href="." class="box">
            <img src="images/cat2.png" alt="" />
            <h3>Quick Snacks</h3>
          </a>

          <a href="." class="box">
            <img src="images/cat-3.png" alt="" />
            <h3>Chargers & Batteries</h3>
          </a>

          <a href="." class="box">
            <img src="images/cat-4.png" alt="" />
            <h3>Sports Accessories</h3>
          </a>
        </div>
      </section>

      <section class="products">
        <h1 class="title">latest Services/Products</h1>

        <div class="box-container">
          <form accept="" method="post" class="box">
            <a href="." class="fas fa-eye"></a>
            <button
              class="fas fa-shopping-cart"
              type="submit"
              name="add_to_cart"
            ></button>
            <img src="images/battery.png" alt="" />
            <a href="." class="cat">
              chargers & batteries
            </a>
            <div class="name">9 W battery</div>
            <div class="flex">
              <div class="price">
                <span>$</span>3<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                class="qty"
                min="1"
                max="99"
                value="1"
                onkeypress="if(this.value.length == 2) return false;"
              />
            </div>
          </form>

          <form accept="" method="post" class="box">
            <a href="." class="fas fa-eye"></a>
            <button
              class="fas fa-shopping-cart"
              type="submit"
              name="add_to_cart"
            ></button>
            <img src="images/charger.jpg" alt="" />
            <a href="." class="cat">
              chargers & batteries
            </a>
            <div class="name">multi-pin charger</div>
            <div class="flex">
              <div class="price">
                <span>$</span>3<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                class="qty"
                min="1"
                max="99"
                value="1"
                onkeypress="if(this.value.length == 2) return false;"
              />
            </div>
          </form>

          <form accept="" method="post" class="box">
            <a href="." class="fas fa-eye"></a>
            <button
              class="fas fa-shopping-cart"
              type="submit"
              name="add_to_cart"
            ></button>
            <img src="images/adapter.jpg" alt="" />
            <a href="." class="cat">
              chargers & batteries
            </a>
            <div class="name">universal adapter</div>
            <div class="flex">
              <div class="price">
                <span>$</span>3<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                class="qty"
                min="1"
                max="99"
                value="1"
                onkeypress="if(this.value.length == 2) return false;"
              />
            </div>
          </form>

          <form accept="" method="post" class="box">
            <a href="." class="fas fa-eye"></a>
            <button
              class="fas fa-shopping-cart"
              type="submit"
              name="add_to_cart"
            ></button>
            <img src="images/pens.jpeg" alt="" />
            <a href="." class="cat">
              stationary
            </a>
            <div class="name">classic pack of pens</div>
            <div class="flex">
              <div class="price">
                <span>$</span>3<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                class="qty"
                min="1"
                max="99"
                value="1"
                onkeypress="if(this.value.length == 2) return false;"
              />
            </div>
          </form>

          <form accept="" method="post" class="box">
            <a href="." class="fas fa-eye"></a>
            <button
              class="fas fa-shopping-cart"
              type="submit"
              name="add_to_cart"
            ></button>
            <img src="images/nb.jpeg" alt="" />
            <a href="." class="cat">
              stationary
            </a>
            <div class="name">a set of notebooks</div>
            <div class="flex">
              <div class="price">
                <span>$</span>3<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                class="qty"
                min="1"
                max="99"
                value="1"
                onkeypress="if(this.value.length == 2) return false;"
              />
            </div>
          </form>

          <form accept="" method="post" class="box">
            <a href="." class="fas fa-eye"></a>
            <button
              class="fas fa-shopping-cart"
              type="submit"
              name="add_to_cart"
            ></button>
            <img src="images/bundle.png" alt="" />
            <a href="." class="cat">
              stationary
            </a>
            <div class="name">a4 sheets bundle</div>
            <div class="flex">
              <div class="price">
                <span>$</span>3<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                class="qty"
                min="1"
                max="99"
                value="1"
                onkeypress="if(this.value.length == 2) return false;"
              />
            </div>
          </form>
        </div>

        <div class="more-btn">
          <a href="menu.html" class="btn">
            view all
          </a>
        </div>
      </section>

      <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>

      <script src="js/script.js"></script>
    </div>
  );
}

export default Home;
