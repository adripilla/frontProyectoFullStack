<template>
    <v-app-bar scroll-behavior="hide">
      <v-toolbar title="">

        <a href="http://localhost:8080/prueba" style="width: 90%;text-decoration-line: none;">
          <h1 style="width: 90%;">CellShop</h1>
        </a>
      <!--  <menuD></menuD> -->
        <v-btn @click="handleAuthAction">
          {{ isSessionActive ? 'Logout' : 'Login' }}
        </v-btn>
      </v-toolbar>
    </v-app-bar>
  </template>
  
  <script>
 // import menuD from '../components/menuDespegable.vue';
  
  export default {
    name: 'miHeader',
    components: {
   //   menuD,
    },
    data() {
      return {
        isSessionActive: false,
      };
    },
    methods: {
      getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
      },
      setCookie(name, value, days) {
        let expires = "";
        if (days) {
          const date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
      },
      checkSession() {
        const sessionCookie = this.getCookie('session');
        this.isSessionActive = !!sessionCookie;
      },
      handleAuthAction() {
        if (this.isSessionActive) {
          // Lógica para cerrar sesión
          this.setCookie('session', '', -1); // Borra la cookie
          this.isSessionActive = false;
          this.$router.push("/prueba");
        } else {
          // Lógica para crear sesión
          this.$router.push('/login');
        }
      },
    },
    mounted() {
      this.checkSession();
    },
  };
  </script>
  
  <style scoped>
  </style>
  