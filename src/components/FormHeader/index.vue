<template>
  <div class="form-header">
    <Row>
      <TelegramLabel />
      <div />
      <CustomButton :disabled="disabled" class="transparent text-right">Next <i class="fa fa-angle-right" aria-hidden="true"></i></CustomButton>
    </Row>
  </div>
</template>

<script>
const TelegramLabel = () => import('@/components/TelegramLabel/')
const CustomButton = () => import('@/components/UI/CustomButton/')
const Row = () => import('@/components/UI/Row/')

export default {
  name: 'FormHeader',
  components: {
    TelegramLabel,
    CustomButton,
    Row
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
