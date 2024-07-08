<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            Lista de Usuarios
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="user in users" :key="user._id">
                <v-list-item-content>
                  <v-list-item-title>{{ user.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'UserList', // Cambia el nombre del componente a "UserList" o "UserManagement"
  data() {
    return {
      users: [],
    };
  },
  async created() {
    try {
      const response = await this.$axios.get('/users');
      this.users = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
