<template>
  <form class="form" @submit="onSubmit">
    <h1 class="form__title">Registration</h1>

    <div class="form__field" :class="getFieldClass(emailMeta)">
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        v-model="email"
        v-bind="emailAttrs"
        :class="getFieldClass(emailMeta)"
      />
      <span v-if="emailMeta.touched && emailError" class="form__error">{{ emailError }}</span>
    </div>

    <div class="form__field">
      <label for="password">Password</label>
      <div class="form__password-row">
        <div class="form__password-input">
          <input
            id="password"
            type="password"
            v-model="password"
            v-bind="passwordAttrs"
            :class="getFieldClass(passwordMeta)"
          />
          <span v-if="passwordMeta.touched && passwordError" class="form__error">{{ passwordError }}</span>
        </div>
        <ul class="criteria">
          <li
            v-for="criterion in criteria"
            :key="criterion.label"
            :class="criterion.valid ? 'criteria__item--valid' : 'criteria__item--invalid'"
          >
            {{ criterion.label }}
          </li>
        </ul>
      </div>
    </div>

    <div class="form__field form__field--checkbox">
      <input
        id="agree"
        type="checkbox"
        v-model="agree"
        v-bind="agreeAttrs"
      />
      <label for="agree">I agree with license agreement</label>
    </div>

    <button type="submit" class="form__button" :disabled="!meta.valid">Register</button>
  </form>
</template>

<script setup>
import { computed } from 'vue'
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'

const schema = toTypedSchema(
  yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
      .string()
      .min(8, 'At least 8 characters')
      .matches(/[0-9]/, 'Must contain digits')
      .matches(/[a-z]/, 'Must contain lowercase letters')
      .matches(/[A-Z]/, 'Must contain uppercase letters')
      .matches(/[^a-zA-Z0-9]/, 'Must contain special characters')
      .required('Password is required'),
    agree: yup.boolean().oneOf([true], 'You must agree').required(),
  })
)

const { defineField, handleSubmit, meta } = useForm({
  validationSchema: schema,
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const [agree, agreeAttrs] = defineField('agree')

const { errorMessage: emailError, meta: emailMeta } = useField('email')
const { errorMessage: passwordError, meta: passwordMeta } = useField('password')

const passwordValue = computed(() => password.value || '')

const criteria = computed(() => [
  { label: 'At least 8 characters', valid: passwordValue.value.length >= 8 },
  { label: 'Contains digits', valid: /[0-9]/.test(passwordValue.value) },
  { label: 'Contains lowercase letters', valid: /[a-z]/.test(passwordValue.value) },
  { label: 'Contains uppercase letters', valid: /[A-Z]/.test(passwordValue.value) },
  { label: 'Contains special characters', valid: /[^a-zA-Z0-9]/.test(passwordValue.value) },
])

function getFieldClass(fieldMeta) {
  if (!fieldMeta.touched) return ''
  return fieldMeta.valid ? 'field--valid' : 'field--invalid'
}

const onSubmit = handleSubmit((values) => {
  alert('Registration successful! Email: ' + values.email)
})
</script>

<style scoped>
.form {
  background: white;
  padding: 32px;
  border-radius: 8px;
  width: 480px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
}

.form__title {
  margin-bottom: 24px;
  font-size: 24px;
}

.form__field {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.form__field--checkbox {
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

input[type="email"],
input[type="password"] {
  padding: 8px 12px;
  border: 2px solid #ccc;
  border-radius: 4px;
}

.field--valid {
  border-color: green;
}

.field--invalid {
  border-color: red;
}

.form__error {
  color: red;
  font-size: 12px;
}

.form__password-row {
  display: flex;
  gap: 16px;
}

.form__password-input {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.criteria {
  list-style: none;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 180px;
}

.criteria__item--valid {
  color: green;
}

.criteria__item--invalid {
  color: red;
}

.form__button {
  width: 100%;
  padding: 10px;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 8px;
}

.form__button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>

