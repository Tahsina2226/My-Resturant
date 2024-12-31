import React from 'react'
import Slider from '../Routes/Slider'
import Category from '../Routes/Category'
import PopularMenu from '../Routes/PopularMenu'
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    )
}

export default Home