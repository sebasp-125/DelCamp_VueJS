<template>
    <div>
        <header>
            <div class="narvar">
                <ul id="app">
                    <router-link to="/">Home</router-link>
                    <router-link to="/login">Acceder - Registrar</router-link>
                    <router-link to="/loginFarmer">Campesino</router-link>
                    <i class="fa-solid fa-bars"></i>
                    <i class="fa-solid fa-cart-shopping fa-beat" style="color: #22511f;" v-if="ProductosComprados != 0"
                        id="carrito">
                        <p>{{ ProductosComprados.length }}</p>
                    </i>
                    <img id="IMAGENPROFILE" src="../assets/image/logo.png" class="img-thumbnail" alt="..." width="40px">
                </ul>
                <router-view />

            </div>
            <div class="container_carrusel_leading_page">
                <div class="carrusel_leanding_page">
                    <div><img src="../assets/image/Banner.png" alt=""></div>
                </div>
                <div class="logo"><img src="../assets/image/logo.png" alt=""></div>
            </div>
            <div id="AdverCompra">

            </div>
        </header>
    </div>
</template>

<script>
export default {
    props: ['ProductosComprados'],
    data() {
        return {
            CantidadProductos: null
        }
    },

    mounted() {
        this.TotalProductos()
        console.log('feo', this.ProductosComprados.length);
    },
}
</script>
<style scoped>
nav a.router-link-exact-active {
    color: #42b983;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    overflow-x: hidden;
    font-family: Arial, Helvetica, sans-serif;
}

.btnProductoAndres {
    text-align: center;
    padding: 10px;
}

.lineaPRODUC {
    border: none;
    border-radius: 5px;
    background-color: rgb(19, 174, 19);
    padding: 2px;
}

.nombre_producto {
    font-size: 20px;
    text-align: center;
    font-weight: bold;
}

.PrecioProducto {
    color: red;
    font-size: 20px;
}

.descriptionElement {
    font-size: 12px;
    font-weight: 500;
}

#carrito {
    position: relative;
    font-size: 25px;
}

#carrito p {
    position: absolute;
    top: 4px;
    font-size: 10px;
    left: 12px;
    color: white;
}

.narvar {
    width: 100%;
    height: 50px;
    color: black !important;
    display: flex;
    justify-content: end;
}

.narvar ul {
    width: 60%;
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    font-size: 17px;
}

.narvar li i a {
    cursor: pointer;
    text-decoration: none;
}

.narvar a {
    text-decoration: none;
}


.narvar a:visited {
    color: black;
}

.container_carrusel_leading_page {
    position: relative;
}

.carrusel_leanding_page {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

}

.carrusel_leanding_page div {
    width: 100%;
    height: 300px;
}

.carrusel_leanding_page img {
    width: 100%;
    height: 300px;
}

.logo {
    width: 150px;
    height: 150px;
    position: absolute;
    background-color: yellow;
    top: 0;
    margin: 70px 80px;
    border-radius: 50%;
}

.logo img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
</style>