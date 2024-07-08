<template>
    <v-container>
      
      <v-img :src="imagenUrl" max-height="400" @click="redirectToUrl"></v-img>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        imagenUrl: '', // Aquí se almacenará la URL de la imagen en formato base64
      };
    },
    created() {
      this.fetchProductoImagen();
    },
    methods: {
        async fetchProductoImagen() {
  try {
    const response = await axios.get(`http://localhost:3000/api/celular/modelo/${this.name}`);
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
    console.error('Error al obtener la imagen del producto:', error);
  }
},
redirectToUrl() {
      const url = `http://localhost:8080/verCelular/${this.name}`;
      window.location.href = url;
    },
    },
    props: {
      name: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  