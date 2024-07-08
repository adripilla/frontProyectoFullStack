<template>
    <div>
      <v-btn @click="toggleReviews" color="primary">Ver Reseñas</v-btn>
      <v-dialog v-model="dialog" max-width="800px">
        <v-card>
          <v-card-title>Reseñas para {{ modelo }}</v-card-title>
          <v-card-text>
            <!-- Aquí mostrarás todas las reseñas filtradas por el modelo -->
            <div v-if="filteredReviews.length > 0">
              <div v-for="review in filteredReviews" :key="review._id">
                <div>{{ review.descripcion }}</div>
                <div>
                  <!-- Dibuja las estrellas según la valoración -->
                  <svg v-for="i in 5" :key="i" class="star" :style="{ fill: i <= review.valoracion ? 'orange' : 'gray' }" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1.34995L14.378 9.72695L23.976 10.062L16.832 15.374L18.216 23.651L12 19.976L5.784 23.651L7.16799 15.374L0.0240005 10.062L9.62199 9.72695L12 1.34995Z" stroke="#FFD700" stroke-width="2"/>
                  </svg>
                </div>
                <!-- Puedes mostrar más detalles de la reseña según tus necesidades -->
              </div>
            </div>
            <div v-else>
              <p>No hay reseñas para este modelo.</p>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="closeDialog">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: {
      modelo: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        dialog: false,
        reviews: []
      };
    },
    computed: {
      filteredReviews() {
        return this.reviews.filter(review => review.marca === this.modelo);
      }
    },
    methods: {
      async toggleReviews() {
        await this.loadReviews();
        this.dialog = !this.dialog;
      },
      async loadReviews() {
        try {
          const response = await axios.get('http://localhost:3000/api/review');
          this.reviews = response.data;
        } catch (error) {
          console.error('Error al cargar las reseñas:', error);
        }
      },
      closeDialog() {
        this.dialog = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .star {
    margin-right: 3px;
  }
  </style>
  