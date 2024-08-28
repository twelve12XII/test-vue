<template>
  <v-container>
    <MyDate @fetchInfo="fetchInfo" @setError="setError" />
    <v-table>
      <thead>
        <tr>
          <th
            class="text-left"
            v-for="(item, index) in headlines_table"
            :key="index"
          >
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
        <InfoView v-for="survey in surveys" :key="survey.id" :survey="survey" />
      </tbody>
    </v-table>
    <!-- <v-pagination :length="`${infoCount % 10}`"></v-pagination> -->
    <v-snackbar v-model="errorVisibile" :timeout="2500" color="error">
      {{ errorMsg }}
    </v-snackbar>
  </v-container>
</template>

<script>
import InfoView from "./InfoView";
import MyDate from "./MyDate";
const headlines_table = [
  "order_id",
  "source",
  "reclamation",
  "product_rating",
  "consultant_rating",
  "dispatcher_rating",
  "assemblers_rating",
  "recommend_rating",
  "comment",
  "dateTime",
];
export default {
  components: {
    InfoView,
    MyDate,
  },

  data: () => ({
    surveys: [],
    headlines_table,
    errorVisibile: false,
    errorMsg: "error",
    // infoCount: 0,
  }),
  mounted() {},
  methods: {
    setError(errorMsg) {
      this.errorVisibile = true;
      this.errorMsg = errorMsg;
    },
    // Fetch data from API and update surveys array
    fetchInfo(val) {
      let axiosStr = `https://bot.artis21.ru/api/get_surveys.php?from_date=${val[0]}&to_date=${val[1]}`;
      console.log(axiosStr);
      this.$axios.get(axiosStr).then((response) => {
        if (response.data.length > 0) {
          // this.infoCount = response.data.length;
          this.surveys = response.data;
        } else {
          this.surveys = [];
          this.errorVisibile = true;
          this.errorMsg = "No data found for the specified date range.";
          console.log("exception " + response.status);
        }
      });
    },
  },
};
</script>

<style scoped></style>
