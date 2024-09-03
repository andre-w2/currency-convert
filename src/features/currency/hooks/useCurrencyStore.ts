import { fetchCurrencyRates } from "@/entities/currency/currencyApi";
import { defineStore } from "pinia";
import { ref } from "vue";

type currencyType = "RUB" | "USD" | "EUR";

export const useCurrencyStore = defineStore("currency", () => {
  const mainCurrency = ref<currencyType>("RUB");
  const rates = ref({});
  const isLoading = ref(false);

  const init = () => {
    const storedCurrency = (localStorage.getItem("mainCurrency") || mainCurrency.value) as currencyType;
    mainCurrency.value = storedCurrency;
  };

  const fetchInit = async () => {
    isLoading.value = true;
    try {
      const fetchedRates = await fetchCurrencyRates();
      
      if (mainCurrency.value === "RUB") {
        rates.value = {
          "USD": 1 / fetchedRates["rub-usd"], // 1 USD = x RUB
          "EUR": 1 / fetchedRates["rub-eur"], // 1 EUR = y RUB
          "RUB": 1 // 1 RUB = 1 RUB
        };
      } else if (mainCurrency.value === "EUR") {
        rates.value = {
          "USD": fetchedRates["eur-usd"], // 1 EUR = x USD
          "EUR": 1, // 1 EUR = 1 EUR
          "RUB": fetchedRates["eur-rub"] // 1 EUR = y RUB
        };
      } else if (mainCurrency.value === "USD") {
        rates.value = {
          "USD": 1, // 1 USD = 1 USD
          "EUR": fetchedRates["usd-eur"], // 1 USD = x EUR
          "RUB": fetchedRates["usd-rub"] // 1 USD = y RUB
        };
      }
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  const updateCurrency = (selectedCurrency: currencyType) => {
    mainCurrency.value = selectedCurrency;
    localStorage.setItem("mainCurrency", selectedCurrency);
    fetchInit();
  };

  return { mainCurrency, init, updateCurrency, rates, isLoading, fetchInit };
});
