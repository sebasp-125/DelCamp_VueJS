<template>
  <div>
    <footer>
        <div>
            <h3>Mayoristas Agrícolas S.A.</h3>
            <p>En delcamp Transformamos la distribución agrícola con soluciones sostenibles para un futuro más verde y rentable.</p>
            <h2>Delcamp</h2>
        </div>
        <div>
            <h2>Site map</h2>
            <ul>
                <li>Sobre nosotros</li>
                <li>Productos</li>
                <li>Servicios</li>
                <li>Contáctenos</li>
                <li>Blog</li>
                <li>Talento Delcamp</li>
            </ul>
        </div>
        <div>
            <h2>Legal</h2>
            <ul>
                <li>Politica de protección de datos</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div>
            <h2>contáctanos</h2>
            <ul>
                <p>Autopista Medellín Km 3.4 Centro <br><br> bodega 36</p>
                <p>TEL: <b>+57 3026020183</b></p>
            </ul>

            <div class="redes">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-whatsapp"></i>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  footer{
    width: 100%;
    height: 400px;
    background-image: url('../assets/image/imagen\ futer.png');
    display: flex;
    justify-content: space-evenly;
    color: white;
    
}

footer div{
    width: 400px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    text-align: start;
}

footer img {
  width: 100px;
  height: 100px;
}

footer h2 h3{
  margin: 30px 0px;
}

footer div ul{
  list-style: none;
  padding: 0%;
}
footer div ul>li{
  margin: 10px 0px;
}

footer ul > li:hover{
    list-style:circle;
}

.redes{
    width: 100%;
    padding: 0%;
    display: flex;
    flex-direction:row ;
    gap: 50px;
    font-size: 30px;
    margin: 30px 0px;
}

@keyframes vibracion {
    0%{transform: translateX(0px);}
    25%{transform: translateX(-10px);}
    50%{transform: translateX(10px);}
    75%{transform: translateX(-10px);}
    100%{transform: translateX(0px);}
}

.redes i:hover{
    animation:vibracion 0.5s infinite;
}
</style>