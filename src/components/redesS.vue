<template>
    <div class="redes-sociales">
      <a href="https://www.facebook.com" target="_blank" class="icono">
        <svg class="icono-facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <!-- SVG del ícono de Facebook -->
          <path d="M22.675 0h-21.35C.595 0 0 .6 0 1.3v21.4c0 .7.595 1.3 1.325 1.3h11.495v-9.3h-3.1v-3.6h3.1V8.4c0-3.1 1.894-4.8 4.657-4.8 1.325 0 2.465.1 2.795.1v3.3h-1.935c-1.52 0-1.815.7-1.815 1.755v2.295h3.63l-.475 3.6h-3.155V24h6.205c.73 0 1.325-.6 1.325-1.3V1.3c0-.7-.595-1.3-1.325-1.3z"/>
        </svg>
      </a>
      <a href="https://www.instagram.com" target="_blank" class="icono">
        <svg class="icono-instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <!-- SVG del ícono de Instagram -->
          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.3 1 .6 1.5 1.1.5.5.8 1 1.1 1.5.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.3.6-.6 1-1.1 1.5-.5.5-1 1-1.5 1.1-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.3-1-.6-1.5-1.1-.5-.5-1-1-1.1-1.5-.2-.5-.4-1.3-.5-2.5-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.3-.6.6-1 1.1-1.5.5-.5 1-1 1.5-1.1.5-.2 1.3-.4 2.5-.5 1.3-.1 1.7-.1 4.9-.1M12 0C8.7 0 8.3 0 7 0.1 5.7.2 4.6.4 3.8.7 3 .9 2.4 1.3 1.8 1.8c-.5.5-1 1.1-1.3 1.8C.2 4.6 0 5.7 0 7s0 1.7.1 2.9c.1 1.3.3 2.4.6 3.2.3.8.8 1.4 1.3 1.9.5.5 1.1 1 1.9 1.3.8.3 1.9.5 3.2.6 1.2.1 1.6.1 4.9.1s3.6 0 4.9-.1c1.3-.1 2.4-.3 3.2-.6.8-.3 1.4-.8 1.9-1.3.5-.5 1-1.1 1.3-1.9.3-.8.5-1.9.6-3.2.1-1.2.1-1.6.1-4.9s0-3.6-.1-4.9c-.1-1.3-.3-2.4-.6-3.2-.3-.8-.8-1.4-1.3-1.9-.5-.5-1.1-1-1.9-1.3-.8-.3-1.9-.5-3.2-.6C15.7 0 15.3 0 12 0zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-10.8c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4z"/>
        </svg>
      </a>
      <a href="https://www.twitter.com" target="_blank" class="icono">
        <svg class="icono-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <!-- SVG del ícono de Twitter -->
          <path d="M24 4.6c-.9.4-1.8.6-2.8.8 1-.6 1.8-1.6 2.2-2.8-.9.6-2 .9-3.1 1.2-1.8-1.9-4.9-1.6-6.8.8-1.3 1.7-1.1 4.1.6 5.3-1.7 0-3.3-.5-4.7-1.4v.1c0 2.2 1.6 4.2 3.8 4.7-.8.2-1.6.2-2.5.1.7 2.1 2.7 3.5 5 3.5-2 1.6-4.4 2.2-7 1.8 2.2 1.4 4.8 2.2 7.5 2.2 9 0 14-7.5 14-14V5.9c.9-.6 1.7-1.5 2.4-2.3-.9.4-1.8.6-2.8.8 1-.6 1.8-1.6 2.2-2.8-.9.6-2 .9-3.1 1.2z"/>
        </svg>
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RedesSociales',
  };
  </script>
  
  <style scoped>
  .redes-sociales {
    display: flex;
    justify-content: center; /* Centra los iconos horizontalmente */
    gap: 20px; /* Espacio entre los iconos */
  }
  
  .icono {
    width: 24px;
    height: 24px;
    fill: currentColor; /* Toma el color del texto actual */
    transition: transform 0.3s;
  }
  
  .icono:hover {
    transform: scale(1.1); /* Escala el icono al pasar el ratón */
  }
  </style>
  