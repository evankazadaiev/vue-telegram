<template>
  <div
    v-if="isLoading"
    class="d-flex justify-content-center mb-3">
<!--    <b-spinner-->
<!--      :style="size"-->
<!--      :label="$t('sideEffects.loading')"-->
<!--      class="float-right"-->
<!--      variant="primary"/>-->
  </div>
</template>

<script>
const standardSize = { width: '3rem', height: '3rem' };

export default {
  name: 'SpinnerPrimaryCenter',
  props: {
    isLoading: {
      type: Boolean,
      required: true,
      default: false
    },
    size: {
      type: Object,
      required: false,
      default: () => standardSize
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
