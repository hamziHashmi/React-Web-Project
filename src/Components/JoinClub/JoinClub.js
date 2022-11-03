import React from 'react'

const JoinClub = () => {
    return (
        <div>
            <section class="search-form col-md-6">
                <form action="" method="post">
                    <input type="text" class="box" name="search_box" placeholder="search clubs..." maxlength="100" />
                    <button type="submit" class="fas fa-search" name="search_btn"></button>
                </form>
            </section>


            <br></br><br></br><br></br>
            <div class="container">
                <section class="club-list">

                    <div styles={{display: 'flex', border: 'solid 1px black'}}>
                        <div class="img-wrap">
                            <a
                                href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Ficcuta%2F&psig=AOvVaw1w4fOpy7-KYkalH5-q6Z8d&ust=1664728452529000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCODc8PG6v_oCFQAAAAAdAAAAABAD" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt9hdgZTX3a_J5raGZGt28MQMl17jXPBKuw8Sf0dGoMyTUsbrmSHyxZaUHCGQPGahc7XY&usqp=CAU" style={{width:'100' ,height:'100'}}  />
                        </div>
                        <div styles={{padding: '10px'}}>
                            <p styles={{fontSize: '20px', color: 'black'}}>Club name</p>
                            <p styles={{fontSize: '16px', color: 'black'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae assumenda hic voluptates, aperiam officiis, voluptatum atque est fugit quod debitis explicabo minima veniam amet provident eius modi sunt ut temporibus?</p>
                            <a href="#" class="btn">join Club</a>
                        </div>
                    </div>
                </section>
                </div>
            </div>
            )
}

            export default JoinClub
