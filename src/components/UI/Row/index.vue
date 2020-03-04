<script>
export default {
  name: 'Row',
  props: {
    ratio: {
      type: Array,
      required: false,
      default: () => [1, 1]
    }
  },
  render (createElement) {
    const isPropRatioPassed = this.$options.propsData.hasOwnProperty('ratio')
    const slotQuantity = this.$slots.default.length
    const slotWidthSet = isPropRatioPassed ? this.ratio : Array(slotQuantity).fill(100 / slotQuantity - 1)
    this.$slots.default.forEach((slot, index) => {
      if (!slot.data) {
        Object.assign(slot, { data: { attrs: { style: `flex-basis: ${slotWidthSet[index]}%;` } } })
      } else {
        slot.data.attrs = {
          ...slot.data.attrs,
          style: `flex-basis: ${slotWidthSet[index]}%;`
        }
      }
    })
    return createElement(
      'div',
      {
        scopedSlots: this.$scopedSlots,
        class: 'form-row'
      },
      [this.$slots.default]
    )
  }
}
</script>

<style lang="scss" scoped>
.form-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  &.no-margin {
    margin: 0;
  }
  &.centered {
    justify-content: center;
    text-align: center;
  }
  &.with-top-padding {
    padding-top: 20px;
  }
  &.with-bottom-padding {
    padding-bottom: 20px;
  }
}
</style>
