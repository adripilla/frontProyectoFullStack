<template>
    <div>
      <MiHeader />
      <v-container>
        <v-data-table
          :headers="headers"
          :items="celulares"
          class="elevation-1"
          :items-per-page="5"
        >
          <!-- eslint-disable-next-line vue/valid-v-slot -->
          <template v-slot:item.imagen="{ item }">
            <!-- Aplica estilos CSS a las imágenes -->
            <div class="image-container">
              <ImgEsp :name="item.modelo" />
            </div>
          </template>
  
          <!-- eslint-disable-next-line vue/valid-v-slot -->
          <template v-slot:item.disponibilidad="{ item }">
            <!-- Aplica estilos CSS a las imágenes -->
            <div class="image-container">
              <EstadoC :estado="item.disponibilidad" />
            </div>
          </template>
  
          <!-- eslint-disable-next-line vue/valid-v-slot -->
          <template v-slot:item.eliminar="{ item }">
            <!-- Aplica estilos CSS a las imágenes -->
            <div class="image-container">
              <v-btn color="red" @click="eliminarCelular(item)">Eliminar</v-btn>
            </div>
          </template>
          <!-- eslint-disable-next-line vue/valid-v-slot -->
          <template v-slot:item.update="{ item }">
            <!-- Aplica estilos CSS a las imágenes -->
            <div class="image-container">
              <btnP :celularId="item.modelo" />
            </div>
          </template>
  
          <template v-slot:thead>
            <thead>
              <tr>
                <th v-for="header in headers" :key="header.value">
                  {{ header.text }}
                </th>
              </tr>
            </thead>
          </template>
        </v-data-table>
      </v-container>

      <v-btn color="green" @click="irAInsertarCelular" class="mb-4">Insertar Celular</v-btn>
      
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import MiHeader from "../../components/MiHeader.vue";
  import ImgEsp from "../../components/imgCel.vue";
  import EstadoC from "../../components/verEstado.vue";
  import btnP from "../../components/botonUpdate.vue";
  
  export default {
    data() {
      return {
        headers: [
          { text: "Modelo", value: "modelo" },
          { text: "Marca", value: "marca" },
          { text: "Precio", value: "precio" },
          { text: "Descripción", value: "descripcion" },
          { text: "Stock", value: "stock" },
          { text: "Año", value: "ano" },
          { text: "Imagen", value: "imagen" },
          { text: "Disponibilidad", value: "disponibilidad" },
          { text: "Eliminar", value: "eliminar" },
          { text: "Update", value: "update" },
        ],
        celulares: [],
      };
    },
    created() {
      this.fetchCelulares();
    },
    components: {
      MiHeader,
      ImgEsp,
      EstadoC,
      btnP,
    },
    methods: {
      async fetchCelulares() {
        try {
          const response = await axios.get("http://localhost:3000/api/celular");
          this.celulares = response.data;
        } catch (error) {
          console.error("Error al obtener los celulares:", error);
        }
      },
      async eliminarCelular(item) {
        try {
          // Realizar la solicitud de eliminación al backend
          await axios.delete(`http://localhost:3000/api/celular/${item._id}`);
  
          // Eliminar el celular de la lista localmente
          const index = this.celulares.findIndex(
            (celular) => celular._id === item._id
          );
          if (index !== -1) {
            this.celulares.splice(index, 1);
          }
        } catch (error) {
          console.error("Error al eliminar el celular:", error);
        }
      },
      irAInsertarCelular() {
      window.location.href = "http://localhost:8080/admin/insertarC";
    },
    },
  };
  </script>
  
  <style scoped>
  /* Aplica estilos para las imágenes */
  .image-container {
    width: 100px; /* Ancho deseado para las imágenes */
    height: 100px; /* Altura deseada para las imágenes */
    overflow: hidden; /* Oculta el exceso de contenido */
  }
  
  .image-container img {
    width: 100%; /* Ajusta la imagen al ancho del contenedor */
    height: 100%; /* Mantiene la proporción de aspecto */
  }
  </style>
  