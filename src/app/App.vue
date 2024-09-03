<template>
  <div id="app">
    <TheHeader :currency="currencyStore.mainCurrency" @update-currency="currencyStore.updateCurrency" />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import TheHeader from "@/features/currency/components/TheHeader.vue";
import { useCurrencyStore } from "@/features/currency/hooks/useCurrencyStore";

const currencyStore = useCurrencyStore();

onMounted(() => {
  currencyStore.init();
  currencyStore.fetchInit();
});
</script>
