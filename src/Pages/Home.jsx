import React from 'react'
import Slider from '../Routes/Slider'
import Category from '../Routes/Category'
import PopularMenu from '../Routes/PopularMenu'
import FeaturedItem from '../Routes/FeaturedItems'
import Testimoinals from '../Routes/Testimonials'
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <FeaturedItem></FeaturedItem>
            <Testimoinals></Testimoinals>
        </div>
    )
}

export default Home