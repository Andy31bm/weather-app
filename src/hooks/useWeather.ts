import { useState } from "react";
import type { WeatherState } from "../types";
import { searchCity, fetchWeather } from "../api/weather";

export function useWeather() {
  const [state, setState] = useState<WeatherState>({
    city: null,
    current: null,
    daily: null,
    isLoading: false,
    error: null,
  });

  async function search(cityName: string) {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const results = await searchCity(cityName);

      if (results.length === 0) {
        setState(prev => ({ ...prev, isLoading: false, error: "Ciudad no encontrada." }));
        return;
      }

      const city = results[0];
      const weather = await fetchWeather(city.latitude, city.longitude);

      setState({
        city: city,
        current: weather.current,
        daily: weather.daily,
        isLoading: false,
        error: null,
      });

    } catch {
      setState(prev => ({ ...prev, isLoading: false, error: "Algo salió mal, intenta de nuevo." }));
    }
  }

  return { state, search };
}