<template>
  <div class="form">
    <form
      action="POST"
      @submit.prevent="handler"
    >
      <slot />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    handler: {
      required: true,
      type: Function
    }
  }
}
</script>
