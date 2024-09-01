<template>
  <ScrollArea class="h-72 w-48 rounded-md border">
    <div class="p-4">
      <h4 class="mb-4 text-xl font-medium leading-none">Курсы валют</h4>

      <div v-if="!store.isLoading" class="ml-3 space-y-4">
        <div v-for="(rate, currency) in store.rates" :key="currency">
          <div class="text-base">
            1 {{ currency }} = {{ (rate as number).toFixed(2) }} {{ store.mainCurrency }}
          </div>
          <Separator class="my-2" />
        </div>
      </div>
      <div class="space-y-6" v-else>
        <Skeleton v-for="i in 15" :key="i" class="h-[25px] w-[350px]" />
      </div>
    </div>
  </ScrollArea>
</template>

<script setup lang="ts">
import { useCurrencyStore } from "@/store/currency";
import Skeleton from "./ui/skeleton/Skeleton.vue";

const store = useCurrencyStore()
</script>
