<script setup lang="ts">
import { ref, watch } from 'vue';
import { stringToBinary, isValidUrl } from './tools';
import Input from './components/Input.vue'
import Output from './components/Output.vue'
import Footer from './components/footer.vue'

const text = ref('')
const textToShow = ref('')
const isCopyDisabled = ref(true)

watch(text, () => {
  expandLink()
})

function expandLink() {
  if (text.value === '') {
    textToShow.value = ''
    isCopyDisabled.value = true
    return
  }
  if (isValidUrl(text.value)) {
    textToShow.value = 'panjaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaang.rakaiseto.com/redirect/panj' + stringToBinary(text.value) + 'ng'
    isCopyDisabled.value = false
  } else {
    textToShow.value = 'Invalid URL'
    isCopyDisabled.value = true
  }
}

</script>

<template>
  <header class="mb-4">

    <div class="wrapper">
      <h1 class="text-4xl font-semibold">panjaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaang</h1>
      <br>
      <br>
      <h4 class="text-xl font-semibold">Link Expander</h4>
      <br>
      <br>
      <br>
    </div>
  </header>

  <main class="flex flex-col gap-4 items-center justify-center w-full mx-4 my-2 min-h-[calc(30vh-2rem)]">
    <Input v-model="text" />
    <Output :textToShow="textToShow" :disabled="isCopyDisabled" />
  </main>

  <Footer />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    justify-content: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    text-align:center;
    /* display: flex; */
    /* flex-wrap: wrap; */
  }
}
</style>
