import { URL_API } from "@/lib/constants";

export const fetchCurrencyRates = async () => {
  const response = await fetch(URL_API);
  return await response.json();
};