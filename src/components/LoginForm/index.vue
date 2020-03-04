<template>
  <div class="login-wrapper">
    <Form class="login-form" :handler="onSubmit">
      <FormHeader :disabled="loading"/>
      <div class="login-form-body">
        <Row><h1>Sign in</h1></Row>
        <Row class="login-form__instructions">
          <p>
            Please choose your country and enter your full phone number.
          </p>
        </Row>
        <Row class="no-margin">
          <FormSelect
            title="Country"
            v-model="country"
            :options="phoneCodes"
            placeholder="Country"
            name="country"
            label="name"
          />
        </Row>
        <Row class="no-margin">
          <FormSelect
            v-validate="'required'"
            :message="errors.first('code')"
            title="Code"
            v-model="code"
            :options="phoneCodes"
            placeholder="Code"
            name="code"
            label="code"
          />
          <FormInput
            v-validate="'required|min:9'"
            :message="errors.first('number')"
            title="Phone number"
            v-model="phone"
            v-mask="'#########'"
            placeholder="Number"
            name="number"
          />
        </Row>
      </div>
    </Form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mask } from 'vue-the-mask'
const FormHeader = () => import('../FormHeader/')
const Form = () => import('../UI/Form/')
const Row = () => import('../UI/Row/')
const FormSelect = () => import('../UI/FormSelect/')
const FormInput = () => import('../UI/FormInput/')

export default {
  name: 'LoginForm',
  directives: { mask },
  components: {
    Row,
    Form,
    FormSelect,
    FormInput,
    FormHeader
  },
  data: () => ({
    country: '',
    code: '',
    phone: ''
  }),
  watch: {
    country (v) {
      this.code = v
    },
    code (v) {
      this.country = v
    }
  },
  computed: {
    ...mapGetters({
      phoneSent: 'auth/phoneSent',
      countriesAndCodes: 'staticModule/countriesAndCodes',
      isPhoneRegistered: 'auth/isPhoneRegistered',
      loading: 'auth/loading'
    }),
    phoneCodes () {
      return this.countriesAndCodes.map(z => {
        const { name, callingCodes } = z
        return { name, code: `+${callingCodes[0]}` }
      })
    },
    testPhone () {
      return '9996615432'
    },
    phoneNumber () {
      const { code } = this.code
      return code.concat(this.phone)
    }
  },
  created () {
    return this.getCountries()
  },
  methods: {
    ...mapActions({
      sendCode: 'auth/sendCode',
      getCountries: 'staticModule/getCountriesAndCodes',
      checkPhone: 'auth/checkPhone'
    }),
    onSubmit () {
      if (this.loading) return
      this.$validator.validate().then(async result => {
        if (!result) {
          return
        }
        const { code } = this.code
        const params = {
          phoneNumber: this.phoneNumber,
          phone: this.phone,
          phoneCode: code,
          timeout: 2000
        }
        try {
          const isRegistered = await this.checkPhone(this.phoneNumber)
          if (!isRegistered) return
          await this.sendCode(params)
          await this.$router.push({ name: 'SendCode' })
        } catch (error) {}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
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
}
</style>
