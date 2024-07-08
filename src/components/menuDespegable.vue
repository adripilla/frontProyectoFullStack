<template>
    <div class="d-flex justify-space-around">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
          >
            Celulares
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items1"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
  
      <v-btn
        color="primary"
      >
        Pedidos
  
        <v-menu activator="parent">
          <v-list>
            <v-list-item
              v-for="(item, index) in items2"
              :key="index"
              :value="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
  
      <v-btn
        id="menu-activator"
        color="primary"
      >
        Reseñas
      </v-btn>
  
      <v-menu activator="#menu-activator">
        <v-list>
          <v-list-item
            v-for="(item, index) in items3"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </template>
  <script>


    export default {
      data: () => ({
        items1: [
          { title: 'All' },
          { title: 'Apple' },
          { title: 'Samsung' },

        ],
        items2: [
          { title: 'Ver pedidos' },
        ],
        items3: [
          { title: 'Ver Reseñas' },
          { title: 'Comentar' },
        ],
      }),
    }
  </script>