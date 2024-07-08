<template>
  <div>
    <v-btn @click="toggleForm" color="primary">Reseña</v-btn>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>Agregar Reseña para {{ modelo }}</v-card-title>
        <v-card-text>
          <v-text-field v-model="modeloInput" label="" disabled>{{ modelo }}</v-text-field>
          <v-text-field v-model="descripcion" label="Descripción"></v-text-field>
          <div class="text-center">
            <v-rating v-model="valoracion" :clearable="false" :dense="true" color="orange"></v-rating>
            <svg v-for="i in 5" :key="'empty'+i" class="star-outline" :style="{ left: `${15 + (i * 10)}%`, opacity: i <= valoracion ? 0 : 1 }" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1.34995L14.378 9.72695L23.976 10.062L16.832 15.374L18.216 23.651L12 19.976L5.784 23.651L7.16799 15.374L0.0240005 10.062L9.62199 9.72695L12 1.34995Z" stroke="#FFD700" stroke-width="2"/>
            </svg>
            <svg v-for="i in 5" :key="'filled'+i" class="star-filled" :style="{ left: `${15 + (i * 10)}%`, opacity: i <= valoracion ? 1 : 0 }" width="24" height="24" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1.34995L14.378 9.72695L23.976 10.062L16.832 15.374L18.216 23.651L12 19.976L5.784 23.651L7.16799 15.374L0.0240005 10.062L9.62199 9.72695L12 1.34995Z" stroke="#FFD700" stroke-width="2"/>
            </svg>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="confirmar">Confirmar</v-btn>
          <v-btn color="error" @click="descartar">Descartar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'; // Importa axios

import Swal from 'sweetalert2';

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
      descripcion: '',
      valoracion: 2, // Valoración inicial
      modeloInput: ''
    };
  },
  methods: {
    toggleForm() {
      this.dialog = !this.dialog;
    },
    async confirmar() {
      console.log('Modelo:', this.modelo);
      console.log('Descripción:', this.descripcion);
      console.log('Valoración:', this.valoracion);
      
      try {
        // Realiza la petición para crear la reseña
        const response = await axios.post('http://localhost:3000/api/review', {
          descripcion: this.descripcion,
          valoracion: this.valoracion,
          marca: this.modelo
        });

        console.log('Reseña creada:', response.data);

        Swal.fire({
            title: '¡Éxito!',
            text: 'review guardado exitosamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
        // Reinicia los campos
        this.descripcion = '';
        this.valoracion = 3;
        this.dialog = false;
      } catch (error) {
        console.error('Error al crear la reseña:', error);
        // Aquí puedes manejar el error de acuerdo a tus necesidades
      }
    },
    descartar() {
      this.descripcion = '';
      this.valoracion = 3;
      this.dialog = false;
    }
  }
};
</script>


<style scoped>
.star-outline, .star-filled {
  position: absolute;
  top: 100;
  pointer-events: none;
}
</style>
