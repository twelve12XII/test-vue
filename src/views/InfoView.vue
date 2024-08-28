<template>
  <tr>
    <td>
      {{ survey.order_id }}
    </td>
    <td>
      {{ survey.source }}
    </td>
    <td>
      {{ survey.reclamation }}
    </td>
    <td>
      {{ survey.product_rating }}
    </td>
    <td>
      {{ survey.consultant_rating }}
    </td>
    <td>
      {{ survey.dispatcher_rating }}
    </td>
    <td>
      {{ survey.assemblers_rating }}
    </td>
    <td>
      {{ survey.recommend_rating }}
    </td>
    <td>
      {{ survey.comment }}
    </td>
    <td>
      {{
        survey.dateTime.toLocaleString("en-GB", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
      }}
    </td>
  </tr>
</template>

<script>
/*todo: не нашла возможности сделать строку таблицы с помощью цикла, хотя предполагаю, что это возможно через 
<td v-for="(item, index) in headlines_table"   :key="index"
          >
            {{ survey.!!!item!!! }} - тут не знаю что с item'ом делать
          </td>
          */
export default {
  props: {
    survey: { type: Object, required: false },
  },
};
</script>

<style scoped></style>
