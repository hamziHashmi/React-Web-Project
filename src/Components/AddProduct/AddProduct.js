import React from 'react'

const AddProduct = () => {
  return (
    <div>
      <section class="about">
            <div class="form-wrapper">
                <h3>Add a products</h3>

                <div>
                    <form class="custom-form">
                        <label for="sname">Product Name</label>
                        <input type="text" id="sname" name="sname" placeholder="product Name"/>
                        <label for="sname">Description</label>
                        <input type="text" id="sname" name="sname" placeholder="Description"/>
                        <label for="desc">Uploaded File</label>
                        <input type="file" id="desc" name="desc" placeholder="image"/>


                        <input type="submit" value="Save"/>
                    </form>
                </div>

                <div class="p-3 py-5">
                    <h4>Product banner</h4>
                    <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Ficcuta%2F&psig=AOvVaw1w4fOpy7-KYkalH5-q6Z8d&ust=1664728452529000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCODc8PG6v_oCFQAAAAAdAAAAABAD"/>     
                    <img src="images/adapter.jpg" width="300" height="300"/>
                     
                </div>
            </div>
        </section>
    </div>
  )
}

export default AddProduct
