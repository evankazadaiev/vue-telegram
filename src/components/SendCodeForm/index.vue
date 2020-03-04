<template>
  <div class="login-wrapper">
    <Form class="send-code-form"  :handler="onSubmit">
      <FormHeader :disabled="loading"/>
      <div class="send-code-form-body">
        <TypedNumber :number="userPhone"/>
        <Row class="no-margin centered send-code-form__instructions">
          <p>We've sent the code to the Telegram app on your other device. <br>Please enter the code below.</p>
        </Row>
        <Row class="timer no-margin centered">
          <p>You will be able to request SMS in {{ remainingTime }}</p>
        </Row>
        <Row class="centered">
          <FormInput v-model="code" v-validate="'required'" title="Enter your code"/>
        </Row>
      </div>
    </Form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mask } from 'vue-the-mask'
const FormHeader = () => import('../FormHeader/')
const TypedNumber = () => import('../TypedNumber/')
const Form = () => import('../UI/Form/')
const Row = () => import('../UI/Row/')
const FormInput = () => import('../UI/FormInput/')

export default {
  name: 'SendCodeForm',
  directives: { mask },
  components: {
    FormHeader,
    TypedNumber,
    Row,
    Form,
    FormInput
  },
  data: () => ({
    code: '',
    time: 3600,
    timer: null
  }),
  computed: {
    ...mapGetters({
      userInitialInfo: 'auth/userInitialInfo',
      loading: 'auth/loading'
    }),
    userPhone () {
      return this.userInitialInfo?.phoneNumber ?? ''
    },
    remainingTime () {
      const minutes = Math.floor(this.time / 60)
      const seconds = Math.floor(this.time % 60)
      return `${minutes}:${seconds}`
    }
  },
  created () {
    this.countDownTimer()
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn'
    }),
    countDownTimer () {
      if (this.time > 0) {
        this.timer = setTimeout(() => {
          this.time -= 1
          this.countDownTimer()
        }, 1000)
      }
    },
    onSubmit () {
      this.$validator.validate().then(async result => {
        if (!result) {
          return
        }
        const params = {
          ...this.userInitialInfo,
          phoneCode: this.code
        }
        try {
          const user = await this.signIn(params)
          console.log(user)
          await this.$router.push('/')
        } catch (error) {
          console.error(error)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .send-code-form {
    position: relative;
    .loading {
      &:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
    &-body {
      box-shadow: $form-shadow;
      border-radius: 2px;
      border: 0;
      margin: 0;
      max-width: none;
      background: $white;
      padding: 44px 65px;
    }
    &__instructions {
      color: $grey;
      margin: 15px 0 30px;
      font-size: 13px;
      line-height: 160%;
    }
    .timer {
      ::v-deep p {
        color: $grey;
        margin: 15px 0;
        font-size: 13px;
      }
    }
  }
</style>
