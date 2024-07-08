<template>
  <div>
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
  data() {
    return {
      dialogVisible: true,
      celular: {
        modelo: "",
        marca: "",
        _id: "",
        precio: 0,
        descripcion: "",
        stock: 0,
        ano: 0,
        disponibilidad: false,
      },
      valid: true,
    };
  },
  mounted() {
    this.obtenerCelular();
  },
  methods: {
    async obtenerCelular() {
      try {
        const modeloCelular = this.$route.params.modelo;
        const response = await axios.get(`http://localhost:3000/api/celular/modelo/${modeloCelular}`);
        
        if (response.data) {
          this.celular = response.data;
        } else {
          console.error("Celular no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener los datos del celular:", error);
      }
    },
    async guardarCambios() {
      if (this.$refs.form.validate()) {
        try {
          const headers = {
            'Content-Type': 'application/json'
          };
          await axios.put(
            `http://localhost:3000/api/celular/${this.celular._id}`,
            this.celular,
            { headers }
          );
          this.cerrarFormulario();
        } catch (error) {
          console.error("Error al guardar los cambios:", error);
        }
      }
    },
    cerrarFormulario() {
      this.dialogVisible = false;
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
/* Estilos específicos del componente aquí */
</style>
