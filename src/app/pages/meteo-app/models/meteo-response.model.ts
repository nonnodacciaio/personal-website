export interface MeteoResponse {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	elevation: number;
	current_weather: CurrentWeather;
	hourly_units: HourlyUnits;
	hourly: Hourly;
}

export interface CurrentWeather {
	temperature: number;
	windspeed: number;
	winddirection: number;
	weathercode: number;
	is_day: number;
	time: string;
}

export interface HourlyUnits {
	time: string;
	temperature_2m: string;
}

export interface Hourly {
	time: string[];
	temperature_2m: number[];
}

export enum WeatherCode {
	ClearSky = 0,
	MainlyClear = 1,
	PartlyCloudy = 2,
	Overcast = 3,
	Fog = 45,
	RimeFog = 48,
	DrizzleLight = 51,
	DrizzleModerate = 53,
	DrizzleDense = 55,
	FreezingDrizzleLight = 56,
	FreezingDrizzleDense = 57,
	RainSlight = 61,
	RainModerate = 63,
	RainHeavy = 65,
	FreezingRainLight = 66,
	FreezingRainHeavy = 67,
	SnowFallSlight = 71,
	SnowFallModerate = 73,
	SnowFallHeavy = 75,
	SnowGrains = 77,
	RainShowersSlight = 80,
	RainShowersModerate = 81,
	RainShowersViolent = 82,
	SnowShowersSlight = 85,
	SnowShowersHeavy = 86,
	ThunderstormSlight = 95,
	ThunderstormSlightHail = 96,
	ThunderstormHeavyHail = 99
}
