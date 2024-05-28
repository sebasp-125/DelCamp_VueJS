<template lang="html">
  <div class="registro-campesino">
    <h2>Registro de Campesino</h2>
    <form @submit.prevent="registrarCampesino" class="form-grid">
      <div class="campo">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" required>
      </div>
      <div class="campo">
        <label for="correo">Correo electrónico:</label>
        <input type="email" id="correo" v-model="correo" required>
      </div>
      <div class="campo">
        <label for="nombreFinca">Nombre de la Finca:</label>
        <input type="text" id="nombreFinca" v-model="nombreFinca" required>
      </div>
      <div class="campo">
        <label for="telefono">Teléfono:</label>
        <input type="tel" id="telefono" v-model="telefono" required>
      </div>
      <div class="campo">
        <label for="direccionFinca">Dirección de la Finca:</label>
        <textarea id="direccionFinca" v-model="direccionFinca" rows="3" required></textarea>
      </div>
      <div class="campo">
        <label for="descripcion">Descripción:</label>
        <textarea id="descripcion" v-model="descripcion" rows="3" required></textarea>
      </div>
      <div class="campo">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="campo">
        <label for="imagenPerfil">Imagen de Perfil:</label>
        <input type="file" id="imagenPerfil" @change="onFileChange" required>
      </div>
      <div class="content-button">
        <button type="submit">Registrar</button>
      </div>
      <div class="message-validation" v-if="MSGvalidation">
        <p>{{ MSGvalidation }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import API from '@/api/index';

export default {
  data() {
    return {
      nombre: '',
      correo: '',
      nombreFinca: '',
      telefono: '',
      direccionFinca: '',
      descripcion: '',
      password: '',
      imagenPerfil: null,
      MSGvalidation: '',
    };
  },
  methods: {
    onFileChange(e) {
      this.imagenPerfil = e.target.files[0];
    },
    registrarCampesino() {
      let ObjectData = {
        id: Math.random() * 100,
        NameFarmer: this.nombre,
        nameHause: this.nombreFinca,
        phone_number: this.telefono,
        anddress: this.direccionFinca,
        description: this.descripcion,
        password: this.password,
        correo: this.correo,
        image_profile: this.imagenPerfil,
      };

      API.enviar('https://render-delcamp.onrender.com/campesinos', ObjectData)
        .then((response) => {
          console.log('Campesino registrado:', response);
          this.MSGvalidation = `Hola ${response.nombre}, tu registro fue exitoso!!`;
          // Resetear el formulario
          this.nombre = '';
          this.correo = '';
          this.nombreFinca = '';
          this.telefono = '';
          this.direccionFinca = '';
          this.descripcion = '';
          this.password = '';
          this.imagenPerfil = null;
        })
        .catch((error) => {
          console.error('Error al registrar campesino:', error);
        });
    },
  },
};
</script>


<style scoped>
.registro-campesino {
  max-width: 800px;
  margin: 50px auto;
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.content-button {
  justify-content: center;
}

.registro-campesino h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.campo {
  display: flex;
  flex-direction: column;
}

.campo label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.campo input,
.campo textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.campo input:focus,
.campo textarea:focus {
  border-color: #007BFF;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

button[type="submit"] {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 15px;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>
