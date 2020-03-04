<template>
  <div class="select">
    <span class="title">{{ title }}</span>
    <label
      :for="getUniqueComponentKey"
      class="label">
      <v-select
        ref="select"
        v-bind="$attrs"
        :value="value"
        :id="getUniqueComponentKey"
        class="input"
        v-on="listeners"
      />
    </label>
    <span class="message">{{ message }}</span>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'FormSelect',
  components: { vSelect },
  props: {
    value: {
      type: String | Object,
      required: false,
      default: () => {}
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
        input: event => {
          this.$emit('input', event)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$gray: rgba(216, 216, 216, 1);
$black: rgba(46, 46, 46, 0.87);
$error: rgba(197, 57, 94, 1);
$blue: rgba(56, 183, 234, 1);
$white: rgba(255, 255, 255, 1);

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

.select {
  @include font;
  position: relative;
  margin-top: 24px;
  margin-bottom: 24px;
  min-width: 120px;
  .title {
    @include shared;
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 0;
    padding-bottom: 4px;
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
  .label {
    margin: 0;
    padding: 0;
    width: 100%;
    /* Multi-select input field items */
    &[multiple='multiple'] ::v-deep .selected-tag {
      background: none;
      border: solid 1px $blue;
      padding: 3px 9px 3px 13px;
      border-radius: 15px;
      margin-right: 10px;
      font-size: 12px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: 0;
      color: rgba(46, 46, 46, 0.87);
    }
  }
  .input {
    @include shared;
    width: 100%;
    padding: 0;
    border: 1px solid $gray;
    border-radius: 4px;
    height: 42px;
    background-color: $white;
    /* Update vSelect styles to match general form styles */
    ::v-deep .dropdown-toggle {
      position: relative;
      width: 100%;
      border: none;
      height: 100%;
      padding: 4px;
    }
    ::v-deep .dropdown-menu {
      border: 1px solid $gray;
      border-radius: 4px;
      background-color: $white;
      box-sizing: border-box;
      width: auto;
      min-width: 100%;
      max-width: none;
      max-height: 200px !important;
    }
    ::v-deep button.clear {
      display: none;
    }
    ::v-deep .vs__actions {
      display: none;
      position: absolute;
      z-index: 1;
      top: 50%;
      right: 4px;
      transform: translateY(-50%);
      padding: 0;
    }
    ::v-deep .open-indicator:before {
      border-color: $gray;
      border-width: 2px 2px 0 0;
      height: 8px;
      width: 8px;
    }
    ::v-deep &.v-select.disabled .dropdown-toggle,
    ::v-deep &.v-select.disabled .dropdown-toggle input,
    ::v-deep &.v-select .open-indicator {
      background-color: white;
    }
    ::v-deep .vs__selected-options {
      flex-wrap: nowrap;
    }
    ::v-deep .selected-tag {
      margin-top: 0;
    }
  }
}
</style>
