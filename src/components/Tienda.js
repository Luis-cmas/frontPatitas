import React , {useEffect,useState} from 'react'
import { connect } from 'react-redux'
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

function Tienda(productoId) {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            Axios.get(`http://localhost:3001/producto`)
                .then((response) => {
                    setData(response.data);
                })
        })()
    }, [])
    const agregarCarrito = ()=>{

    }


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
                        <div key={item.Id_Producto} className='producto__card'>
                            <img src={`http://drive.google.com/uc?export=view&id=${item.Imagen_Produc}`} alt="Mascotas" />
                            <h3>{item.Nombre_Producto}</h3>
                            <span>{item.Descripcion}</span>
                            <button onClick={agregarCarrito} ><i class="uil uil-shopping-cart carrito"> </i>Agregar al carrito</button>
                        </div>
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