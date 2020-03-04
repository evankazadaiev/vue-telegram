<template>
  <button class="btn">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'CustomButton'
}
</script>

<style lang="scss" scoped>
.btn {
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 2px;
  width: auto;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: 1.3px;
  text-align: center;
  background: #38b7ea;
  color: #fff;
  text-transform: uppercase;
  height: 36px;
  &:disabled {
    color: #ccc;
  }
  &.transparent {
    background: none;
  }
  &.text-right {
    text-align: right;
  }
  &[disabled='disabled'] {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &.green {
    background-color: #59c202;
  }
  &.grey {
    background-color: #798c90;
  }
  &.blue {
    background-color: #38b7ea;
  }
  &.blue-light {
    background-color: #3caddafc;
  }
  &.red {
    background-color: #c5395e;
  }
  &.ml-auto {
    margin-left: auto;
  }
  &.br-0 {
    border-radius: 0;
  }
  &.mr-20 {
    margin-right: 20px !important;
  }
  &.ml-20 {
    margin-left: 20px !important;
  }
  &.md.height-md {
    padding: 10px 19px;
  }
  &.card-button {
    width: 100%;
    &.btn-high {
      height: 50px;
      padding: 5px;
    }
  }
  &.btn-height-md {
    height: 42px;
    padding: 5px;
  }
  &.flex-50 {
    flex: 1 1 50%;
  }
  &.truncate-text {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  &.md {
    color: #fff;
    text-align: center;
    vertical-align: middle;
    height: auto;
    min-width: 100px;
    text-transform: uppercase;
    border-radius: 2px;
    padding: 6px 19px;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 600;
    letter-spacing: 1.3px;
  }
  &.md.table-button {
    background-color: #38b9ea;
    font-size: 12px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: 1.07px;
    text-align: center;
    color: #ffffff;
    outline: none;
    height: auto;
    border: 0;
    border-radius: 2px;
    padding: 7px 16.4px;
    text-transform: uppercase;
  }
}
</style>
