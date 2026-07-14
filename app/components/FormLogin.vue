<script setup lang="ts">
const form = reactive({
  email: undefined,
  password: undefined,
})

function onSubmit() {
  console.log(form)
}
</script>

<template>
  <general-form @on-submit="onSubmit" class="w-[320px] space-y-2">
    <general-form-field>
      <general-input
        v-model="form.email"
        id="inputEmail"
        label="Email"
        type="email"
      />
    </general-form-field>

    <general-form-field>
      <general-input
        v-model="form.password"
        id="inputPassword"
        label="Password"
        type="password"
      />
    </general-form-field>

    <general-button type="submit"> Login </general-button>
  </general-form>
</template>
