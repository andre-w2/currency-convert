<template>
  <div class="p-4">
    <h2>Конвертировать валюту</h2>
    <div class="flex items-center mt-4 border">
      <Select :model-value="selectedCurrency1" @update:modelValue="(val: string) => selectedCurrency1 = val">
        <SelectTrigger class="w-[80px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup v-for="currency in currencies" :key="currency">
            <SelectItem :value="currency">{{ currency }}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input type="number" v-model.number="amount1" @input="convertCurrency1" />
    </div>
    <div class="flex items-center mt-2 border">
      <Select :model-value="selectedCurrency2" @update:modelValue="(val: string) => selectedCurrency2 = val">
        <SelectTrigger class="w-[80px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup v-for="currency in currencies" :key="currency">
            <SelectItem :value="currency">{{ currency }}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input type="number" v-model.number="amount2" @input="convertCurrency2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { Input } from "@/shared/components/ui/input";
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectItem,
  SelectTrigger,
  SelectContent,
} from "@/shared/components/ui/select";

const props = defineProps({
  conversionRates: {
    type: Object,
    required: true,
  },
  mainCurrency: {
    type: String,
    required: true,
  },
});

const currencies = ["USD", "EUR", "RUB"];
const selectedCurrency1 = ref("USD");
const selectedCurrency2 = ref("RUB");
const amount1 = ref(0);
const amount2 = ref(0);

watch(
  () => props.mainCurrency,
  (newVal) => {
    selectedCurrency1.value = newVal;
  }
);

const convertCurrency1 = () => {
  const fromRate = +props.conversionRates[selectedCurrency1.value];
  const toRate = +props.conversionRates[selectedCurrency2.value];
  console.log(fromRate)
  console.log(toRate)

  amount2.value = +(amount1.value * (toRate / fromRate)).toFixed(2);
};

const convertCurrency2 = () => {
  const fromRate = +props.conversionRates[selectedCurrency2.value];
  const toRate = +props.conversionRates[selectedCurrency1.value];
  amount1.value = +(amount2.value * (fromRate / toRate)).toFixed(2);
};
</script>
