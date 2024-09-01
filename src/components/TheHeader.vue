<template>
  <header>
    <nav class="flex items-center justify-between p-4">
      <div class="flex items-center space-x-4">
        <router-link to="/">Главная</router-link>
        <router-link to="/convert">Конвертация</router-link>
      </div>

      <Select :model-value="currency" @update:modelValue="updateCurrency">
        <SelectTrigger class="w-[180px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent >
          <SelectGroup>
            <SelectItem value="RUB">RUB</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectItem value="USD">USD</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectItem value="EUR">EUR</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </nav>
  </header>
</template>

<script setup lang="ts">
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectItem,
  SelectTrigger,
  SelectContent,
} from "./ui/select";

const emit = defineEmits(["update-currency"]);
defineProps({
  currency: {
    required: true,
    type: String,
    default: () => "RUB"
  }
})

const updateCurrency = (val: string) => {
  emit("update-currency", val);
};
</script>
