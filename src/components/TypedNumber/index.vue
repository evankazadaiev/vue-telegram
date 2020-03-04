<template>
  <div class="wrapper">
    <Row class="centered no-margin">
      <strong class="number">{{ number }}</strong>
    </Row>
    <Row class="no-margin centered">
      <router-link class="number_link" to="/login">Edit Number</router-link>
    </Row>
  </div>
</template>

<script>
const Row = () => import('@/components/UI/Row/')
export default {
  name: 'TypedNumber',
  components: {
    Row
  },
  props: {
    number: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    margin: 15px 0;
    .number_link {
      color: $black;
      font-size: 15px;
      margin: 4px 0;
    }
  }
</style>
