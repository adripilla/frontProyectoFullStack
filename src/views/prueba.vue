<template>
  <MiHeader/>
  <div class="carrusel">
    <MiCarrusel />

    <h2>productos:</h2>
  </div>
  

  <tablaI></tablaI>

  
  
  <redesS></redesS>
  

  
</template>
  
<script>
import { defineComponent } from 'vue';

// Components
import MiCarrusel from '../components/MiCarrusel.vue';
import MiHeader from '../components/MiHeader.vue';
import redesS from '../components/footerC.vue';
import tablaI from '../components/tablaCelulares.vue';




export default defineComponent({
  name: 'pruebaUno',

  components: {
    MiCarrusel,
    MiHeader,
    redesS,
    tablaI,
  },

  
});
</script>

<style scoped>
  .carrusel {
  width: 80%;
  margin-left: 10%;
  margin-top: 2%;
}

.celularesMuestra {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Espacio entre los elementos */
  justify-content: center; /* Centra los elementos horizontalmente */
  width: 90%;
  margin-left: 5%;
  background-color: rgb(208, 208, 208);
  margin-top: 2%;
}

.celularesMuestra > * {
  flex: 1 1 150px; /* Ajusta la base mínima del tamaño del componente */
  max-width: 200px; /* Ajusta el ancho máximo del componente */
  box-sizing: border-box; /* Para incluir padding y border en el ancho y alto */
}



h2{
  margin-top: 2%;
}
</style>