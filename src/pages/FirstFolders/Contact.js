import { NavLink } from "react-router-dom";
import "./App.css";
// import "./main.js";
// import { Outlet, Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <div class="heading">
        <h3>contact us</h3>
        <p>
        <NavLink to="/">
          <a>home </a> <span> / contact</span>
          </NavLink>
        </p>
      </div>

      <section class="contact">
        <div class="row">
          <div class="image">
            <img src="images/contact-img.svg" alt="" />
          </div>

          <form action="" method="post">
            <h3>contact admin</h3>
            <input
              type="text"
              name="name"
              required
              placeholder="enter your name"
              maxlength="50"
              class="box"
            />
            <input
              type="number"
              name="number"
              required
              placeholder="enter your number"
              max="9999999999"
              min="0"
              class="box"
              onkeypress="if(this.value.length == 10) return false;"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="enter your email"
              maxlength="50"
              class="box"
            />
            <textarea
              name="msg"
              placeholder="enter your message"
              required
              class="box"
              cols="30"
              rows="10"
              maxlength="500"
            ></textarea>
            <input type="submit" value="send message" class="btn" name="send" />
          </form>
        </div>
      </section>

      <footer class="footer">
        <section class="box-container">
          <div class="box">
            <img src="images/email-icon.png" alt="" />
            <h3>email</h3>
            <a href="mailto:abc@gmail.com">abc@gmail.com</a>
            <a href="mailto:xyz@gmail.com">xyz@gmail.com</a>
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
              S.Nedderman Hall-UTA-Arlington-76010
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
export default Contact;
