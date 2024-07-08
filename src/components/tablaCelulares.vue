<template>
    <div>
      <v-container>
        <v-row>
          <v-col v-for="(celular, index) in celulares" :key="index" cols="4">
            <div class="image-container">
              <ImgEsp :name="celular.modelo" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import ImgEsp from "../components/imgCel.vue";
  
  export default {
    data() {
      return {
        celulares: []
      };
    },
    created() {
      this.fetchCelulares();
    },
    components: {
      ImgEsp
    },
    methods: {
      async fetchCelulares() {
        try {
          const response = await axios.get("http://localhost:3000/api/celular");
          this.celulares = response.data;
        } catch (error) {
          console.error("Error al obtener los celulares:", error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .image-container {
    width: 100px; /* Ancho deseado para cada imagen */
    height: 200px; /* Altura deseada para cada imagen */
    overflow: hidden; /* Oculta el exceso de contenido */
    margin-right: 20px; /* Espacio entre cada imagen */
  }
  
  .image-container img {
    width: 100%; /* Ajusta la imagen al ancho del contenedor */
    height: 100%; /* Mantiene la proporción de aspecto */
  }
  </style>
  