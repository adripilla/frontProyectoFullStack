<template>
  <div>
    <v-btn color="primary" @click="abrirFormulario">Actualizar</v-btn>
    <v-dialog v-model="dialogVisible" max-width="500">
      <v-card>
        <v-card-title>Actualizar Celular</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="celular.modelo"
              label="Modelo"
              required
            ></v-text-field>

            <v-text-field
              v-model="celular.marca"
              label="Marca"
              required
            ></v-text-field>

            <v-text-field
              v-model="celular.precio"
              label="Precio"
              type="number"
              required
            ></v-text-field>

            <v-text-field
              v-model="celular.descripcion"
              label="Descripción"
              required
            ></v-text-field>

            <v-text-field
              v-model="celular.stock"
              label="Stock"
              type="number"
              required
            ></v-text-field>

            <v-text-field
              v-model="celular.ano"
              label="Año"
              type="number"
              required
            ></v-text-field>

            <v-switch
              v-model="celular.disponibilidad"
              label="Disponible"
              class="custom-switch"
            ></v-switch>

          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue" @click="guardarCambios">Guardar</v-btn>
          <v-btn @click="cerrarFormulario">Descartar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    celularId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dialogVisible: false,
      celular: {
        modelo: "",
        marca: "",
        precio: 0,
        descripcion: "",
        stock: 0,
        ano: "",
        disponibilidad: false,
        imagen: null,
      },
      valid: true, // Se utiliza para la validación del formulario
    };
  },
  methods: {
    async abrirFormulario() {
      try {
        // Obtener el celular por su ID
        const response = await axios.get(
          `http://localhost:3000/api/celular/modelo/${this.celularId}`
        );
        if (response.data) {
          this.celular = response.data;
          // Asegúrate de que disponibilidad tenga un valor booleano
          if (typeof this.celular.disponibilidad === 'undefined') {
            this.celular.disponibilidad = false;
          }
          this.dialogVisible = true;
        } else {
          console.error("Celular no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener los datos del celular:", error);
      }
    },

    async guardarCambios() {
      // Validar el formulario antes de enviar la solicitud
      if (this.$refs.form.validate()) {
        try {
          // Configura los encabezados de la solicitud
          const headers = {
            'Content-Type': 'multipart/form-data' // Especifica el tipo de contenido para enviar archivos
          };

          const formData = new FormData();
          formData.append('modelo', this.celular.modelo);
          formData.append('marca', this.celular.marca);
          formData.append('precio', this.celular.precio);
          formData.append('descripcion', this.celular.descripcion);
          formData.append('stock', this.celular.stock);
          formData.append('ano', this.celular.ano);
          formData.append('disponibilidad', this.celular.disponibilidad);
          if (this.celular.imagen) {
            formData.append('imagen', this.celular.imagen);
          }

          // Realiza la solicitud PATCH utilizando Axios y pasa los encabezados
          await axios.patch(
            `http://localhost:3000/api/celular/${this.celular._id}`,
            formData,
            { headers } // Pasa los encabezados en la opción 'headers'
          );
          
          this.cerrarFormulario();
          // Recargar página
          location.reload();
        } catch (error) {
          console.error("Error al guardar los cambios:", error);
        }
      }
    },

    cerrarFormulario() {
      // Restablecer el estado del formulario y cerrar el diálogo
      this.dialogVisible = false;
      this.$refs.form.reset(); // Restablecer el formulario
    },

    onFileChange(event) {
      const file = event.target.files[0];
      this.celular.imagen = file;
    },
  },
};
</script>

<style scoped>
/* Estilos específicos del componente aquí */
</style>
