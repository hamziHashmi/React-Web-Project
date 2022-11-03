import React from 'react'

const AddClub = () => {
  return (
    <div>
      <section class="about">
            <div class="form-wrapper">
                <h3>Add a club</h3>

                <div>
                    <form class="custom-form">
                        <label for="sname">club name</label>
                        <input type="text" id="sname" name="sname" placeholder="club Name"/>
                        <label for="sname">owner contact number</label>
                        <input type="text" id="sname" name="sname" placeholder="contact number"/>
                        <label for="sname">club email id</label>
                        <input type="text" id="sname" name="sname" placeholder="email"/>
                        <label for="desc">Description</label>
                        <input type="text" id="desc" name="desc" placeholder="Description"/>


                        <input type="submit" value="Save club"/>
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AddClub
