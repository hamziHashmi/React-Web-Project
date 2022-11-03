import React from 'react'

const AddStudent = () => {
  return (
    <div>
      <div class="heading">
            <h3>Super ADMIN</h3>
        </div>

        <section class="about">
            <div class="form-wrapper">
                <h3>Add Student</h3>

                <div>
                    <form class="custom-form">
                        <label for="sname">Student name</label>
                        <input type="text" id="sname" name="sname" placeholder="Student name.."/>

                        <label for="school">School Name</label>
                        <input type="text" id="school" name="school" placeholder="Admin email.."/>

                        <label for="phone">Phone</label>
                        <input type="text" id="phone" name="phone" placeholder="Phone Number"/>

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

export default AddStudent
