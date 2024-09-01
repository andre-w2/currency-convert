<template>
  <CurrencyConverter :conversionRates="store.rates" :mainCurrency="store.mainCurrency" />
</template>

<script setup lang="ts">
import { useCurrencyStore } from "@/store/currency";
import CurrencyConverter from "../components/CurrencyConverter.vue";

const store = useCurrencyStore()
</script>

