import { createRouter, createWebHistory } from 'vue-router';
import Users from '@/views/Users.vue';
import Home from '@/views/HomeView.vue';
//import Carrusel from '@/views/MiCarrusel.vue';
import pruebaUno from '@/views/prueba.vue';
import insertP from '@/views/admin/InsertP.vue';
import verProd from '@/views/admin/productList.vue';
import updProd from '@/views/admin/UpdateP.vue';
import loginV from '@/views/loginV.vue';

import inserCel from '@/views/admin/InsertarCelular';
import verCel from '@/views/admin/celulraList';
import unCel from '@/views/cliente/verCelular';



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
  },
  {
    path: '/prueba',
    name: 'pruebaUno',
    component: pruebaUno,
  },
  {
    path: '/admin/insert',
    name: 'insertP',
    component: insertP,
  },
  {
    path: '/admin/ver',
    name: 'verProd',
    component: verProd,
  },
  {
    path: '/admin/up/:nombre', // Segmento de ruta dinámica ":nombre"
    name: 'updProd',
    component: updProd,
    props: true // Habilita el paso de parámetros como props al componente
  },
  {
    path: '/login', 
    name: 'loginV',
    component: loginV,
  },
  {
    path: '/admin/insertarC', 
    name: 'insertCel',
    component: inserCel,
  },
  {
    path: '/admin/verCelular', 
    name: 'verCelular',
    component: verCel,
  },
  {
    path: '/verCelular/:name', 
    name: 'unCel',
    component: unCel,
  }


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
