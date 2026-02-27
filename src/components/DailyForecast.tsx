import { DayCard } from "./DayCard";
import type { DailyForecast as DailyForecastType } from "../types";

interface DailyForecastProps {
  daily: DailyForecastType;
  isLoading?: boolean;
}

export function DailyForecast({ daily, isLoading }: DailyForecastProps) {
  if (isLoading) {
    return (
      <div>
        <h3 className="text-2xl font-bold mb-6">Pronóstico para 7 días</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-100 rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Pronóstico para 7 días</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {daily.time.map((date, index) => (
          <DayCard
            key={index}
            date={date}
            tempMax={daily.temperature_2m_max[index]}
            tempMin={daily.temperature_2m_min[index]}
            weathercode={daily.weathercode[index]}
          />
        ))}
      </div>
    </div>
  );
}