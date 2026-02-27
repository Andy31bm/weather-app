import type { GeoResult, CurrentWeather, DailyForecast } from "../types";

export async function searchCity(name: string): Promise<GeoResult[]>{

    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=5&language=es&format=json`;

    const response = await fetch(url);
    
    const data = await response.json();

    if (!data.results) return [];

    return data.results as GeoResult[];
}

export async function fetchWeather(lat: number, lon: number): Promise<{ current: CurrentWeather, daily: DailyForecast }>{

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,windspeed_10m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=7`;
    const response = await fetch(url);
    
    const data = await response.json();

    return {
        current: data.current as CurrentWeather,
        daily: data.daily as DailyForecast,
    };
}

