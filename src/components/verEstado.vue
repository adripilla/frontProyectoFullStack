<template>
    <div>
      <span :class="iconoClase">{{ icono }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      estado: {
        type: [Boolean, String],
      }
    },
    computed: {
      iconoClase() {
        return this.estado === 'true' || this.estado === true ? 'icono-verde' : 'icono-rojo';
      },
      icono() {
        return this.estado === 'true' || this.estado === true ? '✓' : '✗';
      }
    }
  };
  </script>
  
  <style scoped>
  .icono-verde {
    color: green; /* Color para el icono de paloma */
  }
  
  .icono-rojo {
    color: red; /* Color para el icono de equis */
  }
  </style>
  