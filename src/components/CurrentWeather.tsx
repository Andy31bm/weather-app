import { Cloud, CloudRain, Sun, Wind } from "lucide-react";
import type { CurrentWeather as CurrentWeatherType, GeoResult } from "../types";
import { getWeatherDescription } from "../utils/formatters";

interface CurrentWeatherProps {
  current: CurrentWeatherType;
  city: GeoResult;
  isLoading?: boolean;
}

function getWeatherIcon(code: number, size: number = 64) {
  if (code === 0 || code === 1) return <Sun size={size} className="text-yellow-400" />;
  if (code >= 51 && code <= 67) return <CloudRain size={size} className="text-blue-400" />;
  if (code >= 80 && code <= 82) return <CloudRain size={size} className="text-blue-600" />;
  if (code === 95 || code === 96 || code === 99) return <CloudRain size={size} className="text-purple-400" />;
  return <Cloud size={size} className="text-gray-400" />;
}

export function CurrentWeather({ current, city, isLoading }: CurrentWeatherProps) {
  if (isLoading) {
    return (
      <div className="p-8 animate-pulse rounded-xl bg-gray-100">
        <div className="h-12 bg-gray-200 rounded mb-4 w-1/3" />
        <div className="h-24 bg-gray-200 rounded mb-4" />
      </div>
    );
  }

  const description = getWeatherDescription(current.weathercode);

  return (
    <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-sky-100 border border-blue-200">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-4xl font-bold mb-2">
            {city.name}, {city.country}
          </h2>
          <p className="text-gray-500 capitalize">{description}</p>
        </div>
        <div className="flex-shrink-0">
          {getWeatherIcon(current.weathercode, 80)}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 pt-6 border-t border-blue-200">
        <div>
          <p className="text-sm text-gray-500">Temperatura</p>
          <p className="text-4xl font-bold text-blue-600">
            {Math.round(current.temperature_2m)}°C
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Wind className="w-4 h-4 text-blue-400" />
            <p className="text-sm text-gray-500">Viento</p>
          </div>
          <p className="text-2xl font-semibold">
            {Math.round(current.windspeed_10m)} km/h
          </p>
        </div>
      </div>
    </div>
  );
}