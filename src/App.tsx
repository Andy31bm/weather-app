import { useWeather } from "./hooks/useWeather";
import { SearchBar } from "./components/SearchBar";
import { CurrentWeather } from "./components/CurrentWeather";
import { DailyForecast } from "./components/DailyForecast";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { Cloud } from "lucide-react";

function App() {
  const { state, search } = useWeather();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-50" />
      </div>

      <main className="relative z-10">
        <div className="px-4 py-8 sm:px-6 lg:px-8 max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Cloud className="w-10 h-10 text-blue-600" />
              <h1 className="text-5xl font-bold text-blue-800">
                Climate
              </h1>
            </div>
            <p className="text-lg text-gray-500">
              Tu pronóstico del tiempo en tiempo real
            </p>
          </div>

          {/* Buscador */}
          <div className="mb-12">
            <SearchBar onSearch={search} isLoading={state.isLoading} />
          </div>

          {/* Error */}
          {state.error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-center">
              {state.error}
            </div>
          )}

          {/* Loading */}
          {state.isLoading && <LoadingSpinner />}

          {/* Clima actual */}
          {state.current && state.city && !state.isLoading && (
            <div className="mb-12">
              <CurrentWeather current={state.current} city={state.city} />
            </div>
          )}

          {/* Pronóstico 7 días */}
          {state.daily && !state.isLoading && (
            <DailyForecast daily={state.daily} />
          )}

        </div>
      </main>
    </div>
  );
}

export default App;