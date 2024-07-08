<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Sobre nosotros</h3>
          <p>Somos una tienda dedicada a ofrecer los mejores celulares del mercado.</p>
        </div>
        <div class="footer-section">
          <h3>Contacto</h3>
          <p>Email: contacto@tienda.com</p>
          <p>Teléfono: +123 456 7890</p>
        </div>
        <div class="footer-section">
          <h3>Síguenos</h3>
          <RedesSociales />
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Tienda de Celulares. Todos los derechos reservados.</p>
      </div>
    </footer>
  </template>
  
  <script>
    import RedesSociales from '../components/redesS.vue';

  
  export default {
    name: 'FooterC',
    components: {
      RedesSociales,
    },
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px;
  }
  
  .footer-section {
    flex: 1;
    min-width: 200px;
    margin: 10px;
  }
  
  .footer-section h3 {
    border-bottom: 2px solid #fff;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  
  .footer-section p {
    margin: 5px 0;
  }
  
  .footer-bottom {
    background-color: #222;
    padding: 10px;
    margin-top: 20px;
  }
  
  .footer-bottom p {
    margin: 0;
  }
  </style>
  