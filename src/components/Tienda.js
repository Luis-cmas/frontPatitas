import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
export default function Tienda() {
    return (
        <div>
            <div>
                
                <div>
                    <p><h1>Ofertas</h1></p>    
                    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }} pagination={{
                        "clickable": true
                    }} navigation={false} className="mySwiper col-7 ">
                        <SwiperSlide><img src='./img/collagehome3.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome4.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome8.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome9.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome10.png' alt='imagenes collage'></img></SwiperSlide>

                    </Swiper>

                </div>
            </div>
            <div>
            <div>
                    <p><h1>¡Lo mas vendido!</h1></p>    
                    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }} pagination={{
                        "clickable": true
                    }} navigation={false} className="mySwiper col-7 ">
                        <SwiperSlide><img src='./img/collagehome3.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome4.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome8.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome9.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome10.png' alt='imagenes collage'></img></SwiperSlide>

                    </Swiper>

                </div>
            </div>
            <div>
            <div>
                    <p><h1>juguetes</h1></p>    
                    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }} pagination={{
                        "clickable": true
                    }} navigation={false} className="mySwiper col-7 ">
                        <SwiperSlide><img src='./img/collagehome3.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome4.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome8.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome9.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome10.png' alt='imagenes collage'></img></SwiperSlide>

                    </Swiper>

                </div>
            </div>
            <div>
            <div>
                    <p><h1>Alimentos</h1></p>    
                    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }} pagination={{
                        "clickable": true
                    }} navigation={false} className="mySwiper col-7 ">
                        <SwiperSlide><img src='./img/collagehome3.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome4.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome8.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome9.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome10.png' alt='imagenes collage'></img></SwiperSlide>

                    </Swiper>

                </div>
            </div>
            <div>
            <div>
                    <p><h1>Cuidados e higiene</h1></p>    
                    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }} pagination={{
                        "clickable": true
                    }} navigation={false} className="mySwiper col-7 ">
                        <SwiperSlide><img src='./img/collagehome3.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome4.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome8.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome9.png' alt='imagenes collage'></img></SwiperSlide>
                        <SwiperSlide><img src='./img/collagehome10.png' alt='imagenes collage'></img></SwiperSlide>

                    </Swiper>

                </div>
            </div>
        </div>
    )
}
