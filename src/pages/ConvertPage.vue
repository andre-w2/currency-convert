<template>
  <CurrencyConverter :conversionRates="currencyStore.rates" :mainCurrency="currencyStore.mainCurrency" />
</template>

<script setup lang="ts">
import { useCurrencyStore } from "@/features/currency/hooks/useCurrencyStore";
import CurrencyConverter from "@/features/currency/components/CurrencyConverter.vue";

const currencyStore = useCurrencyStore();
</script>
