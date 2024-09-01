<template>
  <div id="app">
    <Header :currency="store.mainCurrency" @update-currency="store.updateCurrency" />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Header from "./components/TheHeader.vue";
import { useCurrencyStore } from "./store/currency";

const store = useCurrencyStore()

onMounted(() => {
  store.init()
  store.fetchInit()
});
</script>
