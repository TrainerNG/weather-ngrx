export type TemperatureUnit = 'c' | 'f';

export interface LocationSearchResult {
    id: number;
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    url: string;
}

export interface WeatherCondition {
    text: string;
    icon: string;
}

export interface WeatherLocation{
    name: string;
    region: string;
    country: string;
    localtime: string;
}

export interface CurrentWeather {
    temp_c: number;
    temp_f: number;
    feelslike_c: number;
    feelslike_f: number;
    condition: WeatherCondition;
    is_day: number;
}

export interface WeatherResponse{
    location: WeatherLocation;
    current: CurrentWeather;
    forecast:{
        forecastday:any
    }
}