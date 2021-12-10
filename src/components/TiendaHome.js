import React from 'react'
import './styles/TiendaHome.css'
export default function TiendaHome() {
    return (
        <div>
            <section class="tiendita">
                <div class="tienda">
                    <p>¡Visita nuestra tienda!</p>
                    <div class="tienda-categoria">
                        <ul class=" tienda-categoria-item">
                            <item><img src="./img/alimento.png" alt="alimento"/></item>
                            <item>Alimentos</item>
                        </ul>
                    </div>
                    <div class="tienda-categoria">
                        <ul class=" tienda-categoria-item">
                            <item><img src="/img/juguetes.jpg" alt="juguetes"/></item>
                            <item>Juguetes</item>
                        </ul>
                    </div>
                    <div class="tienda-categoria">
                        <ul class=" tienda-categoria-item">
                            <item><img src="/img/cuidados.png" alt="cuidados"/></item>
                            <item>Cuidados</item>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
