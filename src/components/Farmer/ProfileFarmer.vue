<template>
  <div>
    <button @click.prevent="toggleNodal">¿Agregar Productos?</button>
    <p>Profile User</p>
    <p>Nombre de la finca: {{ farmName }}</p>
    <p>Ubicacion de la finca: {{ ubication }}</p>
    <p>Correo de la finca o Campesino: {{ correo }}</p>
    <p>Numero Finca: {{ phone_number }}</p>

    <hr>

    <div v-for="(producto, index) in all" :key="index">
      <img :src="producto.foto" class="imagenProduct" alt="Image Product Farmer">
      <h6>{{ producto.description }}</h6>
      <h6><strong>{{ producto.precio }}</strong></h6>
    </div>

    <div :class="{'nodal-pop': isNodalVisible, 'nodal-invisible': !isNodalVisible}" class="pop-nodal">
      <div class="nodal">
        <label for="">Imagen del producto</label>
        <input type="file" >
        <label for="">Nombre de Productos</label>
        <input type="text" placeholder="Nombre del Producto">
        <label for="">Descripcion del Producto</label>
        <textarea id="descripcion" rows="3" required></textarea>
        <label for="">Precio estandar del producto</label>
        <input type="number" placeholder="4.500">
      </div>
    </div>
  </div>
</template>


<script>
import API from '@/api/index'

export default {
  name: "ProfileFarmer",
  data() {
    return {
      farmName: null,
      ubication: null,
      correo: null,
      phone_number: null,
      all: [],
      isNodalVisible: false
    }
  },
  methods: {
    showProfile() {
      let id = new URLSearchParams(window.location.search).get('IdActually');

      if (id) {
        API.peticion(`https://render-delcamp.onrender.com/campesinos/${id}`)
          .then((response) => {
            console.log(response);
            this.farmName = response.NameFarmer;
            this.ubication = response.nameHause;
            this.correo = response.correo;
            this.phone_number = response.phone_number;

            // Productos Vendidos
            if (response.productos_disponibles) {
              response.productos_disponibles.forEach(producto => {
                this.all.push({
                  foto: producto.foto,
                  description: producto.descripcion,
                  precio: producto.precio
                });
              });
            } else {
              console.log('Products Null');
            }
          })
          .catch((error) => {
            console.error("Error al cargar el perfil:", error);
          });
      } else {
        console.error("No se encontró el parámetro 'IdActually' en la URL.");
      }
    },
    toggleNodal() {
      this.isNodalVisible = !this.isNodalVisible;
    }
  },
  mounted() {
    this.showProfile();
  }
}
</script>

<style>
.imagenProduct {
  width: 200px;
  border-radius: 5px;
  margin: 10px;
}

.nodal {
  display: flex;
  flex-direction: column;
}

/* Iteraccion Nodal */   
.nodal-invisible {
  display: none;
}

.nodal-pop {
  display: block;
}
</style>
