<template>
  <MiHeader/>
  <v-container>
    <v-form @submit.prevent="submitForm" class="px-4 py-6">
      <v-text-field
        v-model="form.nombre"
        label="Nombre del Platillo"
        required
        outlined
      ></v-text-field>

      <v-text-field
        v-model="form.precio"
        label="Precio"
        type="number"
        required
        outlined
      ></v-text-field>

      <v-textarea
        v-model="form.descripcion"
        label="Descripción"
        rows="3"
        required
        outlined
      ></v-textarea>

      <v-file-input
        v-model="form.imagen"
        label="Imagen"
        accept="image/*"
        required
        outlined
      ></v-file-input>

      <v-text-field
        v-model="form.stock"
        label="Stock"
        type="number"
        required
        outlined
      ></v-text-field>

      <v-switch
        v-model="form.disponibilidad"
        label="Disponibilidad"
        class="mt-4"
      ></v-switch>

      <v-btn type="submit" color="primary" class="mt-6">Enviar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import MiHeader from '../../components/MiHeader.vue';

export default {
  data() {
    return {
      form: {
        nombre: '',
        precio: '',
        descripcion: '',
        imagen: null,
        stock: '',
        disponibilidad: false,
      },
    };
  },
  components: {
      MiHeader,
    },
  methods: {
    async submitForm() {
      try {
        const formData = new FormData();
        formData.append('nombre', this.form.nombre);
        formData.append('precio', this.form.precio);
        formData.append('descripcion', this.form.descripcion);
        formData.append('imagen', this.form.imagen);
        formData.append('stock', this.form.stock);
        formData.append('disponibilidad', this.form.disponibilidad);

        const response = await axios.post('http://localhost:3000/api/producto', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });


        Swal.fire({
          title: '¡Éxito!',
          text: 'Producto guardado exitosamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });

        this.$router.push("/admin/ver");


        console.log('Producto guardado:', response.data);
        // Restablecer el formulario después de guardar
        this.form = {
          nombre: '',
          precio: '',
          descripcion: '',
          imagen: null,
          stock: '',
          disponibilidad: false
        };
      } catch (error) {
        console.error('Error al guardar el producto:', error);
        Swal.fire({
          title: '¡Error!',
          text: 'Producto guardado fallidamente',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    },
  },
};
</script>

<style scoped>
.v-text-field, .v-textarea, .v-file-input, .v-switch {
  width: 100%;
}
</style>
