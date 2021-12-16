import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import './styles/Somos.css'


// import Swiper core and required modules
import SwiperCore, {
    Pagination, Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);
export default function Somos() {
    return (
        <div>
            <div className="somos">
                <div className=" anuncios d-flex flex-column justify-content-center">
                    <div className="row d-flex  justify-content-around con">

                        <div className=" d-flex flex-column justify-content-center ">
                            
                            <h2>Quienes somos:</h2>
                            <p>somos una empresa que ama a todo tipo de mascotas, comprometidos a darles el mejor trato
                                posible
                                junto con los mejores cuidados para tu compañero de aventuras,ven con nosotros y dales el
                                trato
                                que se merecen,puedes acudir a cualquiera de nuestras sucursales.
                            </p>

                        </div>
                        
                    </div>
                </div>
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
    )
}
