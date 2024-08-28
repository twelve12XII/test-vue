<template>
  <v-app>
    <AppNavbar />
    <router-view />
  </v-app>
</template>

<script>
import AppNavbar from "@/components/AppNavbar";
export default {
  name: "App",
  components: {
    AppNavbar,
  },
};
</script>
<style></style>
