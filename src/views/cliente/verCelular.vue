<template>
    <div>
      <MiHeader/>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-card>
              <v-img :src="imagenUrl" max-height="400"></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card>
              <v-card-title>{{ celular.nombre }}</v-card-title>
              <v-card-subtitle>{{ celular.marca }}</v-card-subtitle>
              <v-card-text>
                <div><strong>Modelo:</strong> {{ celular.modelo }}</div>
                <div><strong>Precio:</strong> ${{ celular.precio }}</div>
                <div><strong>Stock:</strong> {{ celular.stock }}</div>
                <div><strong>Año:</strong> {{ celular.ano }}</div>
              </v-card-text>
              <v-card-actions>
                <btnReseña :modelo="celular.modelo"/>
                <btnReseña2 :modelo="celular.modelo"/>

                
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <v-card>
            <p>descripcion</p>
              <v-card-text>{{ celular.descripcion }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <redesS></redesS>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import MiHeader from '../../components/MiHeader.vue';
  import redesS from '../../components/footerC.vue';
  import btnReseña from '../../components/botonCrearReseña.vue';
  import btnReseña2 from '../../components/botonVerReseñas.vue';


  
  export default {
    components: {
      MiHeader,
      redesS,
      btnReseña,
      btnReseña2,

    },
    data() {
      return {
        celular: {}, // Aquí se almacenarán los datos del celular
        imagenUrl: '', // Aquí se almacenará la URL de la imagen en formato base64
      };
    },
    created() {
      this.fetchCelularInfo();
    },
    methods: {
      async fetchCelularInfo() {
        try {
          // Utilizamos this.$route.params.name para obtener el parámetro de la URL
          const response = await axios.get(`http://localhost:3000/api/celular/modelo/${this.$route.params.name}`);
          this.celular = response.data;
  
          const imageData = response.data.imagen.data;
  
          // Convertir el array de bytes en una cadena base64
          let binary = '';
          for (let i = 0; i < imageData.length; i++) {
            binary += String.fromCharCode(imageData[i]);
          }
          const base64String = btoa(binary);
  
          // Construir la URL base64 para mostrar la imagen
          this.imagenUrl = `data:image/jpeg;base64,${base64String}`;
        } catch (error) {
          console.error('Error al obtener la información del celular:', error);
        }
      },
      redirectToReviews() {
        // Redireccionar a la página de reseñas
        // Reemplaza 'URL_RESENAS' con la URL correcta
        window.location.href = 'URL_RESENAS';
      }
    },
  };
  </script>
  
  <style scoped>
  .v-card {
    margin: 20px;
  }
  </style>
  