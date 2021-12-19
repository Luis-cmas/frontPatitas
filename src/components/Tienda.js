import React , {useEffect,useState} from 'react'
import { connect } from 'react-redux'
import Producto from './Producto'
import "./styles/Tienda.css"
import Axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/react";
import { setCarrito } from '../actions';

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

function Tienda({productoId,setCarrito}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            Axios.get(`http://localhost:3001/producto`)
                .then((response) => {
                    setData(response.data);
                })
        })()
    }, [])

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
                <div className='productos'>
                {data.map((item) => {
                    return(
                        <Producto key={item.Id_Producto} descripcion={item.Descripcion} imagen={item.Imagen_Produc} nombre={item.Nombre_Producto}/>

                    )
                })}
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = {
    setCarrito,
}
//trae las variables globales
const mapStateToProps = state => {
    return {
        carrito: state.usuario,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tienda)