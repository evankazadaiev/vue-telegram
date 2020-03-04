<template>
  <div class="input">
    <span class="title">{{ title }}</span>
    <label class="label">
      <input v-bind="$attrs" :value="value" v-on="listeners" >
    </label>
    <span class="message">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: String | Number,
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    message: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$gray: rgba(216, 216, 216, 1);
$black: rgba(46, 46, 46, 0.87);
$error: rgba(197, 57, 94, 1);

@mixin shared() {
  display: block;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@mixin font() {
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0;
  color: $black;
}

.input {
  @include font;
  position: relative;
  margin-top: 24px;
  margin-bottom: 24px;
  .title {
    @include shared;
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 0;
    padding-bottom: 4px;
  }
  .label {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  .message {
    @include shared;
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 0;
    padding-top: 4px;
    color: $error;
  }
  input {
    @include font;
    @include shared;
    width: 100%;
    padding: 0 16px;
    border: 1px solid $gray;
    border-radius: 4px;
    height: 42px;
    @media screen and (max-width: 780px) {
      height: 35px;
    }
  }
}
</style>
