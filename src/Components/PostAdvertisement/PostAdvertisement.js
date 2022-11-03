import React from 'react'

const PostAdvertisement = () => {
  return (
    <div>
      <section class="about">
            <div class="form-wrapper">
                <h3>Add Advertisement</h3>

                <div>
                    <form class="custom-form">
                        <label for="sname">Advertisement Name</label>
                        <input type="text" id="sname" name="sname" placeholder="Advertisement Name"/>

                        <label for="desc">Description</label>
                        <input type="text" id="desc" name="desc" placeholder="Description"/>

                        <label for="phone">Uploaded File</label>
                        <input type="file" id="phone" name="phone" placeholder="Phone Number"/>

                        <input type="submit" value="Save Advertisement"/>
                    </form>
                </div>
                <div class="p-3 py-5" styles={{border: 'solid 1px black', padding: '10px', marginTop: '20px'}}>
                    <h4 styles={{fontSize: '20px' , marginBottom: '20px'}}>Advertisement banner</h4>
                    <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Ficcuta%2F&psig=AOvVaw1w4fOpy7-KYkalH5-q6Z8d&ust=1664728452529000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCODc8PG6v_oCFQAAAAAdAAAAABAD"/>     
                    <img src="images/backtoschool.jpg" width="300" height="500" />
                     
                </div>
            </div>
        </section>
    </div>
  )
}

export default PostAdvertisement
