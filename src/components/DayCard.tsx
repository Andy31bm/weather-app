import { Cloud, CloudRain, Sun } from "lucide-react";
import { getWeatherDescription, formatDate } from "../utils/formatters";

interface DayCardProps {
  date: string;
  tempMax: number;
  tempMin: number;
  weathercode: number;
}

function getWeatherIcon(code: number) {
  if (code === 0 || code === 1) return <Sun className="w-8 h-8 text-yellow-400" />;
  if (code >= 51 && code <= 67) return <CloudRain className="w-8 h-8 text-blue-400" />;
  if (code >= 80 && code <= 82) return <CloudRain className="w-8 h-8 text-blue-600" />;
  if (code === 95 || code === 96 || code === 99) return <CloudRain className="w-8 h-8 text-purple-400" />;
  return <Cloud className="w-8 h-8 text-gray-400" />;
}

export function DayCard({ date, tempMax, tempMin, weathercode }: DayCardProps) {
  const description = getWeatherDescription(weathercode);

  return (
    <div className="p-6 flex flex-col items-center text-center rounded-xl border border-blue-100 bg-white/50 hover:shadow-lg transition-shadow duration-300">
      <p className="text-sm font-medium text-gray-500 mb-3">
        {formatDate(date)}
      </p>

      <div className="mb-4">
        {getWeatherIcon(weathercode)}
      </div>

      <p className="text-xs text-gray-500 capitalize mb-4 min-h-8">
        {description}
      </p>

      <div className="flex gap-4 items-center justify-center w-full">
        <div>
          <p className="text-xs text-gray-500">Máxima</p>
          <p className="text-xl font-bold text-blue-600">
            {Math.round(tempMax)}°
          </p>
        </div>
        <div className="h-6 w-px bg-gray-200" />
        <div>
          <p className="text-xs text-gray-500">Mínima</p>
          <p className="text-xl font-bold text-sky-400">
            {Math.round(tempMin)}°
          </p>
        </div>
      </div>
    </div>
  );
}