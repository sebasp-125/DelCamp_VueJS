<template>
  <div>
    <div class="container">
      <i class="fa-solid fa-user"></i>
      <h2>Inicio de Sesión</h2>
      <form class="user-form" @submit.prevent="Acceder">
        <label for="user-type">Tipo de usuario</label>
        <select class="user-type" id="user_type" v-model="userType">
          <option disabled selected value="0">Tipo de usuario</option>
          <option value="buyer">Campesino</option>
          <option value="seller">Comprador</option>
        </select>
        <label for="user-email">Correo electrónico</label>
        <input class="user-email" type="email" id="campoCorreo" placeholder="Ejemplo@gmail.com" v-model="email" required>

        <label for="user-password">Contraseña</label>
        <input class="user-password" type="password" id="campoContraseña" placeholder="********" v-model="password" required>

        <button class="btn-register" type="submit">Iniciar Sesión</button>
        <router-link to="/Register-Farmer">¿No tienes cuenta?</router-link>
        <p>Olvidaste tu contraseña? <a href="#">Recuperar Contraseña</a></p>
        <p id="TrueFormulario"></p>
      </form>
    </div>
  </div>
</template>

<script>
import API from '@/api/index'

export default {
  data() {
    return {
      userType: '0',
      email: '',
      password: ''
    };
  },
  methods: {
    Acceder() {
      if (this.email && this.password) {
        API.ValidationUser('https://render-delcamp.onrender.com/campesinos', { correoExt: this.email, passwordExt: this.password }, this.$router)
          .then((result) => {
            if (result) {
              console.log("Usuario encontrado y redirigido con éxito.");
            } else {
              console.log("Usuario no encontrado o contraseña incorrecta.");
            }
          })
          .catch((error) => {
            console.error("Error durante la validación:", error);
          });
      } else {
        console.log("Por favor, completa todos los campos.");
      }
    }
  }
}
</script>


<style>

.container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
}

.container h2 {
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
}

.container i {
  font-size: 40px;
  color: #007BFF;
  margin-bottom: 10px;
}

.user-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.user-form label {
  text-align: left;
  font-weight: bold;
  color: #333;
}

.user-form input,
.user-form select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.user-form input:focus,
.user-form select:focus {
  border-color: #007BFF;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.btn-register {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-register:hover {
  background-color: #0056b3;
}

.router-link {
  display: block;
  margin-top: 10px;
  color: #007BFF;
  text-decoration: none;
}

.router-link:hover {
  text-decoration: underline;
}

a {
  color: #007BFF;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}


</style>
