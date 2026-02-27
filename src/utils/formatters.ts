import { weatherDescriptions } from "../constants/weatherCodes";

export function getWeatherDescription(code:number):string {
    return weatherDescriptions[code] ?? "Desconocido";
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString + "T12:00:00")
    return date.toLocaleDateString("es-ES", {
        weekday: "short",
        day: "numeric",
        month: "short",
    });
}