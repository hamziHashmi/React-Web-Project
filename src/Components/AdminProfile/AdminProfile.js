import React from 'react'
import { NavLink } from 'react-router-dom'
import Chart from 'react-apexcharts';
const AdminProfile = () => {

    const options = {
        series: [4, 6, 1, 3, 8],
        labels: ['a', 'b', 'c', 'd', 'e']
      };
    
      const series = [5, 5, 5, 5, 5];

    return (
        <div>
            <div class="heading">
                <h3>Admin profile</h3>
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
                   {/* First Pie chart Start */}
                   <div className="donut">
    <Chart options={options} series={series} type="pie" width="400" />
  </div>
                   {/* First Pie chart End */}
                   <div className="donut">
    <Chart options={options} series={series} type="pie" width="400" />
  </div>
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
                            <td><img class="table-icon" src="./images/icons/superadmin.svg" alt="delete" /></td>
                        </tr>
                        <tr>
                            <td>Business Name</td>
                            <td>name</td>
                            <td>123-345-4567</td>
                            <td><img class="table-icon" src="./images/icons/superadmin.svg" alt="delete" /></td>
                        </tr>
                        <tr>
                            <td>Business Name</td>
                            <td>name</td>
                            <td>090-989-9876</td>
                            <td><img class="table-icon" src="./images/icons/superadmin.svg" alt="delete" /></td>
                        </tr>
                        <tr>
                            <td>Business Name</td>
                            <td>name</td>
                            <td>090-989-9878</td>
                            <td><img class="table-icon" src="./images/icons/superadmin.svg" alt="delete" /></td>
                        </tr>
                    </table>
                </div>
                <NavLink to='/AddBusiness'><a class="btn">Add a business</a></NavLink>
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
                                <td><img class="table-icon" src="./images/icons/superadmin.svg" alt="delete" />
                                    <a href="update_student.html"><img class="table-icon" src="./images/icons/edit-svgrepo-com.svg"
                                        alt="edit" />
                                    </a>
                                </td>

                            </tr>
                            <tr>
                                <td>Shyam</td>
                                <td>School name</td>
                                <td>123-345-4567</td>
                                <td><img class="table-icon" src="./images/icons/superadmin.svg" alt="delete" /><a
                                    href="update_student.html"><img class="table-icon" src="./images/icons/edit-svgrepo-com.svg"
                                        alt="edit" /></a></td>

                            </tr>
                            <tr>
                                <td>Sunder</td>
                                <td>School name</td>
                                <td>090-989-9876</td>
                                <td><img class="table-icon" src="./images/icons/superadmin.svg" alt="delete" />
                                    <a href="update_student.html"><img class="table-icon" src="./images/icons/edit-svgrepo-com.svg"
                                        alt="edit" />
                                    </a></td>
                            </tr>
                            <tr>
                                <td>Preeti</td>
                                <td>School name</td>
                                <td>090-989-9878</td>
                                <td><img class="table-icon" src="./images/icons/superadmin.svg" alt="delete" /><a
                                    href="update_student.html"><img class="table-icon" src="./images/icons/edit-svgrepo-com.svg"
                                        alt="edit" /></a></td>

                            </tr>
                    </table>
                </div>
                <NavLink to='/AddStudent'><a class="btn">Add a Student</a></NavLink>
            </section>
        </div>
    )
}

export default AdminProfile
