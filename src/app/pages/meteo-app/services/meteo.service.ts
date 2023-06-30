import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MeteoResponse, WeatherCode } from "../models/meteo-response.model";

@Injectable()
export class MeteoService {
	private apiUrl = "https://api.open-meteo.com/v1/forecast";

	constructor(private http: HttpClient) {}

	getWeather(latitude: string, longitude: string): Observable<MeteoResponse> {
		let params = new HttpParams()
			.set("latitude", latitude)
			.set("longitude", longitude)
			.set("apikey", "deb071279e6996751f4cd63fbb7501fd")
			.set("current_weather", "true")
			.set("hourly", "temperature_2m");

		return this.http.get<MeteoResponse>(this.apiUrl, { params });
	}

	getWeatherString(code: number): string {
		switch (code) {
			case WeatherCode.ClearSky:
				return "Clear Sky";
			case WeatherCode.MainlyClear:
				return "Mainly Clear";
			case WeatherCode.PartlyCloudy:
				return "Partly Cloudy";
			case WeatherCode.Overcast:
				return "Overcast";
			case WeatherCode.Fog:
				return "Fog";
			case WeatherCode.RimeFog:
				return "Rime Fog";
			case WeatherCode.DrizzleLight:
				return "Light Drizzle";
			case WeatherCode.DrizzleModerate:
				return "Moderate Drizzle";
			case WeatherCode.DrizzleDense:
				return "Dense Drizzle";
			case WeatherCode.FreezingDrizzleLight:
				return "Light Freezing Drizzle";
			case WeatherCode.FreezingDrizzleDense:
				return "Dense Freezing Drizzle";
			case WeatherCode.RainSlight:
				return "Slight Rain";
			case WeatherCode.RainModerate:
				return "Moderate Rain";
			case WeatherCode.RainHeavy:
				return "Heavy Rain";
			case WeatherCode.FreezingRainLight:
				return "Light Freezing Rain";
			case WeatherCode.FreezingRainHeavy:
				return "Heavy Freezing Rain";
			case WeatherCode.SnowFallSlight:
				return "Slight Snowfall";
			case WeatherCode.SnowFallModerate:
				return "Moderate Snowfall";
			case WeatherCode.SnowFallHeavy:
				return "Heavy Snowfall";
			case WeatherCode.SnowGrains:
				return "Snow Grains";
			case WeatherCode.RainShowersSlight:
				return "Slight Rain Showers";
			case WeatherCode.RainShowersModerate:
				return "Moderate Rain Showers";
			case WeatherCode.RainShowersViolent:
				return "Violent Rain Showers";
			case WeatherCode.SnowShowersSlight:
				return "Slight Snow Showers";
			case WeatherCode.SnowShowersHeavy:
				return "Heavy Snow Showers";
			case WeatherCode.ThunderstormSlight:
				return "Slight Thunderstorm";
			case WeatherCode.ThunderstormSlightHail:
				return "Slight Thunderstorm with Hail";
			case WeatherCode.ThunderstormHeavyHail:
				return "Heavy Thunderstorm with Hail";
			default:
				return "Unknown Weather";
		}
	}
}
