<template>
  <div class="h-dvh py-10 px-40 bg-gray-50">
    <div class="border bg-white px-10 py-8 space-y-4 rounded-lg shadow-sm">
      <h1 class="font-semibold text-2xl">Form Validation</h1>

      <hr />

      <div class="space-y-4">
        <p class="text-lg font-semibold">Zod Validation</p>

        <form-login :schema="zodLoginSchema" class="max-w-[320px]" />

        <hr />

        <form-product :schema="zodProductSchema" class="max-w-[320px]" />
      </div>

      <hr />

      <div class="space-y-4">
        <p class="text-lg font-semibold">Yup Validation</p>

        <form-login :schema="yupLoginSchema" class="max-w-[320px]" />

        <hr />

        <form-product :schema="yupProductSchema" class="max-w-[320px]" />
      </div>
    </div>
  </div>
</template>
