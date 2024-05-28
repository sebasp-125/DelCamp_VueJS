<template>
  <div>
    <DelcampHeader :ProductosComprados="carrito" />
    <div id="Reload_Noult_Api"></div>

    <section class="contenedor_ofertas">
      <h1>Productos Disponibles</h1>
      <hr class="lineaPRODUC" />
      <div class="ofertas">
        <div class="father" :style="mover">
          <div class="producto" v-for="(item, index) in productos" :key="index">
            <div class="descuento">
              <p>45% DTO.</p>
            </div>

            <div class="foto_producto">
              <img :src="item.foto" alt="fd" />
            </div>
            <div class="informacion_producto">
              <div class="valores">
                <h4 class="PrecioProducto"> 
                  <b>${{ item.precio }} COL</b>
                </h4>
                <br />
                <p class="nombre_producto"><b>{{ item.nombre_producto }}</b></p>
                <p class="descriptionElement">
                  <strong>{{ item.descripcion }}</strong>
                </p>
              </div>
              <button class="btnProductoAndres" @click="Icon(item.id)">
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="traslacion">
        <i @click="trasladar_izquierda" class="fa-solid fa-chevron-left"></i>
        <i @click="trasladar_derecha" class="fa-solid fa-chevron-right"></i>
      </div>
    </section>
    <section class="lista_productos">
      <img src="../assets/image/lista_productos.png" alt="" />
      <a :href="pdf" target="_blank"><button>Ver listado de productos</button></a>
    </section>
    <section class="InfoDelcamp">
      <div class="mision">
        <aside>
          <h2 class="titulo"><b>Misión de DelCamp</b></h2>
          <p>
            Facilitar la conexión directa entre <b>agricultores</b> y
            <b>consumidores</b>, eliminando intermediarios y promoviendo
            <b>equidad</b>, <b>eficiencia</b> e <b>innovación</b> en el sector
            agrícola colombiano para un beneficio mutuo y sostenible.
          </p>
        </aside>
        <img src="../assets/image/misionDelCamp.png" alt="" />
      </div>

      <div class="vision">
        <aside>
          <h2 class="titulo"><b>Visión de DelCamp</b></h2>
          <p>
            Convertirnos en la principal <b>fuente</b> de cambio, transformando
            el mercado agrícola colombiano hacia la <b>transparencia</b>,<b>eficiencia</b>
            y <b>equidad</b> para todos los participantes, cultivando un
            <b>futuro</b> próspero y sostenible.
          </p>
        </aside>
        <img src="../assets/image/visionDelCamp.png" alt="" />
      </div>

      <div class="history">
        <aside>
          <h2 class="titulo"><b>Historia de DelCamp</b></h2>
          <p>
            Nació de la visión de emprendedores comprometidos con el desarrollo
            agrícola, ofreciendo una solución <b>innovadora</b> para conectar
            directamente a <b>productores</b> y consumidores, fortaleciendo la
            <b>cadena</b> de suministro y promoviendo la <b>equidad</b>.
          </p>
        </aside>
        <img src="../assets/image/historiaDelCamp.png" alt="" />
      </div>
    </section>
    <section class="atencion">
      <img src="../assets/image/atencion.jpg" alt="" />
    </section>
    <DelcampFooter />
  </div>
</template>

<script>
import DelcampHeader from "./DelcampHeader.vue";
import DelcampFooter from "./DelcampFooter.vue";
import API from "@/api";
export default {
  components: {
    DelcampHeader,
    DelcampFooter
  },
  data() {
    return {
      pdf: "/productos/Producto_Delcamp.pdf",
      productos: null,
      cantidadProductos: 0,
      contador_traslacion: 0,
      total_productos: 0,
      carrito: [],
    };
  },

  computed: {
    mover() {
      return {
        transform: `translate(${this.contador_traslacion}px)`,
      };
    },
  },

  methods: {
    async infodelcamp() {
      try {
        const res = await API.peticion("https://render-delcamp.onrender.com/productos");
        this.productos = res;
        this.cantidadProductos = this.productos.length;
        this.total_productos = 305 * this.cantidadProductos;
        console.log(this.productos);
        console.log(this.cantidadProductos);
        console.log(this.total_productos);
      } catch (error) {
        console.error(error);
      }
    },

    trasladar_derecha() {
      console.log("derecha");
      this.contador_traslacion -= 1220;
      if (this.contador_traslacion <= -this.total_productos + 1220) {
        this.contador_traslacion = -this.total_productos + 1220;
      }
      console.log(this.contador_traslacion);
    },

    trasladar_izquierda() {
      console.log("izquierda");
      this.contador_traslacion += 1220;
      if (this.contador_traslacion >= 0) {
        this.contador_traslacion = 0;
      }
      console.log(this.contador_traslacion);
    },

    Icon(id) {
      console.log("Id de esa verdura..", id);
      if (id) {
        this.carrito.push(id);
        console.log(this.carrito);
      }
    }
  },

  mounted() {
    this.infodelcamp();
  },
};
</script>

<style scoped>
.father {
  display: flex;
}

.contenedor_ofertas {
  width: auto;
  height: 55%;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
}

.contenedor_ofertas>h1 {
  font-size: 45px;
}

.traslacion {
  display: flex;
  justify-content: center;
  gap: 100px;
  font-size: 30px;
  color: green;
}

.traslacion i {
  cursor: pointer;
}

.ofertas {
  width: 100%;
  height: 500px;
  padding: 20px;
  background: rgb(249, 249, 249);
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  align-items: center;
  position: relative;
  overflow: hidden;
  white-space: normal;
}

.ofertas h1 {
  position: absolute;
  top: 30px;
}

.producto {
  width: 250px;
  height: 450px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: 0.4s ease;
  margin: 10px;
}

.foto_producto {
  width: 100%;
  height: 55%;
}

.foto_producto img {
  width: 70%;
  height: 80%;
  margin: 20% 10% 10% 10%;
}

.informacion_producto {
  width: 90%;
  height: 40%;
  font-size: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.valores {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.informacion_producto button {
  width: 70%;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  border: none;
  color: white;
  border-radius: 5px;
  background-color: rgb(19, 174, 19);
  cursor: pointer;
}

.descuento {
  width: 30%;
  height: 5%;
  background-color: rgba(214, 175, 249, 0.854);
  color: rgb(148, 49, 240);
  position: absolute;
  margin: 15px 15px;
  border-radius: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.descuento p {
  font-size: 10px;
}

.lista_productos {
  width: 100%;
  position: relative;
}

.lista_productos button:active {
  background: rgba(146, 45, 8, 0.669);
}

.lista_productos button:hover {
  width: 250px;
  height: 50px;
  background: rgba(206, 60, 7, 0.669);
  font-size: 15px;
}

.lista_productos img {
  width: 100%;
}

.lista_productos button {
  width: 200px;
  height: 40px;
  font-size: 10px;
  position: absolute;
  top: 75%;
  left: 12%;
  padding: 10px;
  border: none;
  border-radius: 30px;
  background: rgba(255, 68, 0, 0.669);
  color: white;
  transition: 0.3s ease;
}

/*INFORMACION DE DELCAMP HISTORIA, MISION, VISON*/

.InfoDelcamp {
  display: flex;
  flex-direction: row;
  gap: 10px;
  text-align: center;
  font-size: large;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  height: 60vh;
  margin: 20px;
}

.InfoDelcamp b {
  color: #0ac763;
}

.InfoDelcamp img {
  width: 30%;
}

.history img {
  width: 20%;
}

.mision,
.vision,
.history {
  padding: 10px;
}

.mision img {
  border: 3px solid #000;
  border-radius: 100%;
}

.titulo {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 30px;
}

.InfoDelcamp div:hover {
  background-color: #8a8a8a3e;
  transform: scale(1.1);
}
</style>
