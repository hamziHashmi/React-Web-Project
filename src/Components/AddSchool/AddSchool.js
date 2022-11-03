import React from 'react'

const AddSchool = () => {
  return (
    <div>
      <div class="heading">
            <h3>Super ADMIN</h3>
        </div>
        <section class="about">
            <div class="form-wrapper">
                <h3>Add School</h3>

                <div>
                    <form class="custom-form">
                        <label for="sname">Scool name</label>
                        <input type="text" id="sname" name="sname" placeholder="School name.."/>

                        <label for="email">Admin email</label>
                        <input type="text" id="email" name="email" placeholder="Admin email.."/>

                        <label for="pass">Password</label>
                        <input type="password" id="pass" name="password" placeholder="Admin password"/>

                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </section>

        <footer class="footer">

            <section class="box-container">
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

            </section>

        </footer>
    </div>
  )
}

export default AddSchool
