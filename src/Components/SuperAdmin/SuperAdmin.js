import React from 'react'
import { NavLink } from 'react-router-dom'

const SuperAdmin = () => {
    return (
        <div>

            <div class="chat-popup" id="myForm">
                <form action="/action_page.php" class="form-container">
                    <h1>Chat</h1>

                    <label for="msg"><b>Message</b></label>
                    <textarea placeholder="Type message.." name="msg" required></textarea>

                    <button type="submit" class="btn">Send</button>
                    <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
                </form>
            </div>

            <div class="heading">
                <h3>Super ADMIN</h3>
                <p><a href="home.html">home </a> <span> / superadmin</span></p>
            </div>

            <section class="user-details">
                <div class="user">
                    <img src="images/user-icon.png" alt="" />
                    <p><i class="fas fa-user"></i> <span>ADMIN</span></p>
                    <p><i class="fas fa-phone"></i> <span>1234567890</span></p>
                    <p><i class="fas fa-envelope"></i> <span>admin@gmail.com</span></p>
                </div>
            </section>

            <section class="about">
                <div class="row">
                    <table class="centre-table custom-table">
                        <td colspan="3" styles={{textAlign: 'center'}}>
                            <h3>Manage School Admin</h3>
                        </td>
                        <tr>
                            <th>School Name</th>
                            <th>Admin Email</th>
                            <th>Manage</th>
                        </tr>
                        <tr>
                            <td>school 1</td>
                            <td>email1</td>
                            <td><img class="table-icon" src="./images/icons/superadmin.svg" alt="delete" /></td>
                        </tr>
                        <tr>
                            <td>school2</td>
                            <td>email2</td>
                            <td><img class="table-icon" src="./images/icons/superadmin.svg" alt="delete" /></td>
                        </tr>
                        <tr>
                            <td>school3</td>
                            <td>email3</td>
                            <td><img class="table-icon" src="./images/icons/superadmin.svg" alt="delete" /></td>
                        </tr>
                    </table>
                </div>
                <div class="row-center">
                    <NavLink to='/AddSchool'><a class="btn">Add a school admin</a></NavLink>
                </div>
                <br></br>
                <div class="row">
                    <table class="centre-table custom-table">
                        <tr>
                            <td colspan="4" styles={{textAlign: 'center'}}>
                                <h3>Students Data</h3>
                            </td>

                        </tr>
                            <tr>
                                <th>Student Name</th>
                                <th>School Name</th>
                                <th>Phone</th>
                                <th>Manage</th>
                            </tr>
                            <tr>
                                <td>Ram</td>
                                <td>School name</td>
                                <td>909-090-8789</td>
                                <td><img class="table-icon" src="./images/icons/superadmin.svg" alt="delete"/>
                                    <a href="update_student.html"><img class="table-icon" src="./images/icons/edit-svgrepo-com.svg"
                                        alt="edit"/>
                                    </a>
                                </td>

                            </tr>
                            <tr>
                                <td>Shyam</td>
                                <td>School name</td>
                                <td>123-345-4567</td>
                                <td><img class="table-icon" src="./images/icons/superadmin.svg" alt="delete"/><a
                                    href="update_student.html"><img class="table-icon" src="./images/icons/edit-svgrepo-com.svg"
                                        alt="edit"/></a></td>
                            </tr>
                            <tr>
                                <td>Sunder</td>
                                <td>School name</td>
                                <td>090-989-9876</td>
                                <td><img class="table-icon" src="./images/icons/superadmin.svg" alt="delete"/>
                                    <a href="update_student.html"><img class="table-icon" src="./images/icons/edit-svgrepo-com.svg"
                                        alt="edit"/>
                                    </a></td>


                                </tr>
                                    <tr>
                                        <td>Preeti</td>
                                        <td>School name</td>
                                        <td>090-989-9878</td>
                                        <td><img class="table-icon" src="./images/icons/superadmin.svg" alt="delete"/><a
                                            href="update_student.html"><img class="table-icon" src="./images/icons/edit-svgrepo-com.svg"
                                                alt="edit"/></a></td>

                                    </tr>
                                </table>
                            </div>
                            <div class="row-center">
                                <NavLink to='/AddStudent'><a class="btn">Add a Student</a></NavLink>
                            </div>
                            <br></br>
                                <div class="row">
                                    <table class="centre-table custom-table">
                                        <tr>

                                            <td colspan="4" styles={{textAlign: 'center'}}>
                                                <h3>Manage Business Owners</h3>
                                            </td>

                                        </tr>
                                            <tr>
                                                <th>Business Name</th>
                                                <th>Business Owner</th>
                                                <th>Phone</th>
                                                <th>Manage</th>
                                            </tr>
                                            <tr>
                                                <td>Business Name</td>
                                                <td>name</td>
                                                <td>909-090-8789</td>
                                                <td><img class="table-icon" src="./images/icons/superadmin.svg" alt="delete"/></td>
                                            </tr>
                                            <tr>
                                                <td>Business Name</td>
                                                <td>name</td>
                                                <td>123-345-4567</td>
                                                <td><img class="table-icon" src="./images/icons/superadmin.svg" alt="delete"/></td>
                                            </tr>
                                            <tr>
                                                <td>Business Name</td>
                                                <td>name</td>
                                                <td>090-989-9876</td>
                                                <td><img class="table-icon" src="./images/icons/superadmin.svg" alt="delete"/></td>
                                            </tr>
                                            <tr>
                                                <td>Business Name</td>
                                                <td>name</td>
                                                <td>090-989-9878</td>
                                                <td><img class="table-icon" src="./images/icons/superadmin.svg" alt="delete"/></td>
                                            </tr>
                                    </table>
                                </div>
                                <div class="row-center">
                                    <NavLink to='/AddBusiness'><a class="btn">Add a business</a></NavLink>
                                </div>
                            </section>
                            </div>
                            )
}

                            export default SuperAdmin
