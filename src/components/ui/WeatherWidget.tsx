"use client";

import { useEffect, useState } from "react";
import { Cloud, Sun, Wind, Thermometer } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for class merging (inline simple version or use lib)
function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

interface WeatherData {
    temperature: number;
    windspeed: number;
    description: string;
}

export default function WeatherWidget({ className }: { className?: string }) {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch weather for Jens, Bern (47.116, 7.233)
        async function fetchWeather() {
            try {
                const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=47.116&longitude=7.233&current_weather=true");
                const data = await res.json();
                setWeather({
                    temperature: data.current_weather.temperature,
                    windspeed: data.current_weather.windspeed,
                    description: "Alpine Calm" // Static for now, open-meteo codes are numbers
                });
            } catch (e) {
                console.error("Weather fetch failed", e);
            } finally {
                setLoading(false);
            }
        }
        fetchWeather();
    }, []);

    // Placeholder data for SSR/Loading to avoid layout shift
    const display = weather || { temperature: 12, windspeed: 5, description: "Loading..." };

    return (
        <div className={cn("bg-white p-6 rounded-2xl shadow-sm border border-ink/5 space-y-4", className)}>
            <div className="flex items-center gap-3 text-accent-nature">
                <Cloud size={20} />
                <h3 className="font-semibold uppercase tracking-wider text-xs">Live Weather (Jens)</h3>
            </div>

            <div className="flex items-end justify-between">
                <div>
                    <p className="font-serif text-4xl">{Math.round(display.temperature)}°</p>
                    <p className="text-sm text-ink/60">{display.description}</p>
                </div>
                <div className="text-right space-y-1">
                    <div className="flex items-center gap-2 text-xs text-ink/40">
                        <Wind size={12} /> {display.windspeed} km/h
                    </div>
                    <div className="flex items-center gap-2 text-xs text-ink/40">
                        <Thermometer size={12} /> Feels like {Math.round(display.temperature - 1)}°
                    </div>
                </div>
            </div>
            {/* Status bar */}
            <div className="h-1 w-full bg-paper rounded-full overflow-hidden mt-4">
                <div
                    className="h-full bg-accent-nature transition-all duration-1000"
                    style={{ width: `${Math.min(display.temperature * 3, 100)}%` }}
                />
            </div>
        </div>
    );
}
