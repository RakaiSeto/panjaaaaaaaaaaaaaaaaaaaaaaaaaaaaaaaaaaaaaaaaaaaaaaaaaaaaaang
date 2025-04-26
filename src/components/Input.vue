<script setup lang="ts">
const modelValue = defineModel<string>()
</script>

<template>
  <fieldset
    class="input w-[70%] text-[#1671f9] px-6 pt-[.9rem] items-center justify-center bg-[#fff] border border-[#1671f9] rounded-xl border-dashed h-[9rem]"
  >
    <legend class="px-2 text-lg text-[#1671f9]">Input</legend>
    <input
      class="border border-[#1671f9] w-full mx-[-0.3rem] mt-[1rem] h-[4.5rem] p-[1rem] text-lg rounded-lg focus:ring-2 focus:ring-[#1671f9]"
      :value="modelValue"
      @input="(e) => modelValue = (e.target as HTMLInputElement).value"
      type="text"
      placeholder="https://www.yourlinkhere.com"
    />
  </fieldset>
</template>

<style scoped></style>
