<script setup lang="ts">
const { textToShow, disabled } = defineProps({
  textToShow: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: true,
  },
});

async function copyText() {
  try {
    await navigator.clipboard.writeText(textToShow);
  } catch (err) {
    console.error('Failed to copy:', err);
    alert('Failed to copy text');
  }
}
</script>

<template>
  <fieldset
    class="input w-[70%] flex flex-col gap-[1rem] text-[#1671f9] px-6 pt-[.9rem] items-center justify-center bg-[#fff] border border-[#1671f9] rounded-xl border-dashed h-[17rem]"
  >
    <legend class="px-2 text-lg text-[#1671f9]">Output</legend>
    <textarea
      class="border border-[#1671f9] w-full mx-[-0.3rem] mt-[1rem] h-[9rem] p-[1rem] text-lg rounded-lg focus:ring-2 focus:ring-[#1671f9] resize-none"
      :value="textToShow"
      readonly
      rows="6"
    />
    <button
      class="w-[6rem] flex text-[#1671f9] px-6 pt-[0rem] items-center justify-center bg-[#fff] border border-[#1671f9] rounded-xl border h-[3rem] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#4fd1a5] hover:text-white"
      id="copy-button"
      @click="copyText"
      :disabled="disabled"
    >
      Copy
    </button>
  </fieldset>
</template>

<style scoped></style>
