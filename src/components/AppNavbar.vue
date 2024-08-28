<template>
  <v-container fluid>
    <v-app-bar color="primary" density="compact" dark>
      <v-spacer />
      <v-btn outlined class="ml-3"
        ><router-link style="text-decoration: none; color: inherit" to="/"
          >Главная</router-link
        ></v-btn
      >
      <v-btn outlined class="ml-3"
        ><router-link style="text-decoration: none; color: inherit" to="/dates"
          >Даты</router-link
        ></v-btn
      >
    </v-app-bar>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped></style>
