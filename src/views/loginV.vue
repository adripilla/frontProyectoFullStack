<template>
  <v-container>
    <v-card max-width="500" class="mx-auto mt-5">
      <v-tabs v-model="tab" background-color="primary" dark>
        <v-tab @click="tab = 0">Login</v-tab>
        <v-tab @click="tab = 1">Register</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <!-- Login Tab -->
        <v-tab-item>
          <v-card v-show="tab === 0">
            <v-card-title class="headline">Iniciar Sesión</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field
                  v-model="loginData.email"
                  label="Email"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="loginData.password"
                  label="Contraseña"
                  type="password"
                  required
                ></v-text-field>
                <v-btn type="submit" color="primary">Iniciar Sesión</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <!-- Register Tab -->
        <v-tab-item>
          <v-card v-show="tab === 1">
            <v-card-title class="headline">Registrarse</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="register">
                <v-text-field
                  v-model="registerData.nombre"
                  label="Nombre"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="registerData.email"
                  label="Email"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="registerData.edad"
                  label="Edad"
                  type="number"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="registerData.direccion"
                  label="Dirección"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="registerData.telefono"
                  label="Teléfono"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="registerData.password"
                  label="Contraseña"
                  type="password"
                  required
                ></v-text-field>
                <v-btn type="submit" color="primary">Registrarse</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    
    <v-alert
      v-if="showPasswordAlert"
      dense
      text="La contraseña ingresada es incorrecta. Por favor, inténtalo de nuevo."
      title="Contraseña incorrecta"
      type="error"
      closable
      @input="showPasswordAlert = false"
    ></v-alert>

    <v-alert
      v-if="showPasswordAlert2"
      dense
      text="El email ingresado no existe"
      title="Email incorrecto"
      type="warning"
      closable
      @input="showPasswordAlert2 = false"
    ></v-alert>

    <v-alert
      v-if="showPasswordAlert3"
      dense
      text="Registro completado exitosamente"
      title="Usuario registrado"
      type="success"
      closable
      @input="showPasswordAlert3 = false"
    ></v-alert>

    <v-alert
      v-if="showPasswordAlert4"
      dense
      text="El registro del usuario ha sido fallido."
      title="Registro fallido"
      type="error"
      closable
      @input="showPasswordAlert4 = false"
    ></v-alert>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      showPasswordAlert: false,
      showPasswordAlert2: false,
      showPasswordAlert3: false,
      showPasswordAlert4: false,
      tab: 0, // Inicializa la primera tab
      loginData: {
        email: "",
        password: ""
      },
      registerData: {
        nombre: "",
        email: "",
        edad: 0,
        direccion: "",
        telefono: "",
        password: ""
      }
    };
  },
  methods: {
    setCookie(name, value, days) {
      let expires = "";
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    async login() {
      try {
        if (this.loginData.email === "admin" && this.loginData.password === "mapilla103") {
          // Redirigir a otra URL si las credenciales son correctas
          this.setCookie('session', 'active', 1);
          this.$router.push("/admin/verCelular");
          return;
        }

        const response = await axios.post("http://localhost:3000/api/usuarios/login", this.loginData);
        if (response.data.success === 1) {
          console.log("Login successful");
          this.setCookie('session', 'active', 1);
          this.$router.push("/prueba");
        } else if (response.data.success === 2) {
          console.log("Password incorrect");
          this.showPasswordAlert = true; 
          setTimeout(() => {
            this.showPasswordAlert = false;
          }, 3000);
        } else {
          console.log("User does not exist");
          this.showPasswordAlert2 = true; 
          setTimeout(() => {
            this.showPasswordAlert2 = false;
          }, 3000);
        }
      } catch (error) {
        console.error("Error logging in:", error);
      }
    },
    async register() {
      try {
        const response = await axios.post("http://localhost:3000/api/usuarios", this.registerData);
        console.log("Registration successful:", response.data);
        this.showPasswordAlert3 = true; 
        setTimeout(() => {
          this.showPasswordAlert3 = false;
        }, 3000);
      } catch (error) {
        console.error("Error registering:", error);
        this.showPasswordAlert4 = true; 
        setTimeout(() => {
          this.showPasswordAlert4 = false;
        }, 3000);
      }
    }
  }
};
</script>

<style scoped>
.mx-auto {
  margin: auto;
}
.mt-5 {
  margin-top: 5rem;
}
</style>
