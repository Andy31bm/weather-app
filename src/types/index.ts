export interface GeoResult {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
}

export interface CurrentWeather {
  temperature_2m: number;
  windspeed_10m: number;
  weathercode: number;
}

export interface DailyForecast {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
}

export interface WeatherState {
    city: GeoResult | null;
    current: CurrentWeather | null;
    daily: DailyForecast | null;
    isLoading: boolean;
    error: string | null;
}