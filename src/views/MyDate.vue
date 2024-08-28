<template>
  <v-container class="d-flex justify-center">
    <v-date-input
      v-model="model"
      label="Select date"
      max-width="368"
      multiple="range"
    ></v-date-input>
  </v-container>
</template>

<script>
import { VDateInput } from "vuetify/labs/VDateInput";
export default {
  components: { VDateInput },
  data: () => ({ model: null }),
  // Take the input
  watch: {
    model: {
      handler: function () {
        if (this.model !== null) {
          // Format selected dates to YYYY-MM-DD format and send to parent component
          let from_date = this.model[0]
            .toLocaleString("en-GB", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
            .replaceAll("/", "-")
            .split("-")
            .reverse()
            .join("-");

          let to_date = this.model[this.model.length - 1]
            .toLocaleString("en-GB", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
            .replaceAll("/", "-")
            .split("-")
            .reverse()
            .join("-");
          // Emit event with selected dates to parent component
          this.$emit("fetchInfo", [from_date, to_date]);
        } else {
          // Emit error to parent component
          this.model = null;
          console.log("errror");
          this.$emit("setError", "Invalid date format");
        }
      },
      deep: true,
    },
  },
};
</script>

<style scoped></style>
