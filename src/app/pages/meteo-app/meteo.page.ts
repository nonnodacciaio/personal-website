import { GraphComponent, RawChartData } from "./components/graph.component";
import { Component, OnDestroy } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { CityResponse, Geoname } from "./models/city-response.model";
import { MeteoResponse } from "./models/meteo-response.model";
import { CityService } from "./services/city.service";
import { MessageService } from "./services/message.service";
import { MeteoService } from "./services/meteo.service";

@Component({
	selector: "meteo-app",
	template: `<div class="sm:w-full md:w-1/2 mx-auto my-3 p-3 md:shadow rounded">
		<p>This is a small app I made where you can choose a city and it should give you the current weather and a graph showing the temperature</p>
		<input
			class="rounded p-1 text-black"
			matInput
			[(ngModel)]="userInput"
			placeholder="Enter your city"
		/><button
			[color]="'accent'"
			class="mx-3"
			mat-button
			(click)="getCity()"
		>
			<i class="fas fa-search"></i>
		</button>
		<div *ngIf="cityMeteo">
			<h2 class="text-amber-300">{{ city?.toponymName }}</h2>
			<p>Temperature: {{ cityMeteo.current_weather.temperature }}°C</p>
			<p>Weather: {{ meteoService.getWeatherString(cityMeteo.current_weather.weathercode) }}</p>
			<graph
				[rawChartData]="chartData"
				#graph
			></graph>
		</div>
	</div>`
})
export class MeteoPage implements OnDestroy {
	userInput: string = "";
	city: Geoname | null = null;
	cityMeteo: MeteoResponse | null = null;
	chartData: RawChartData = { data: [], timeStamps: [] };

	destroy$ = new Subject();

	constructor(private cityService: CityService, private messageService: MessageService, public meteoService: MeteoService) {}

	ngOnDestroy(): void {
		this.destroy$.next(null);
		this.destroy$.unsubscribe();
	}

	getCity(): void {
		this.cityService
			.getCity(this.userInput)
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: (result: CityResponse) => {
					this.city = result.geonames[0];
					this.getWeather(this.city.lat, this.city.lng);
				},
				complete: () => {
					if (!this.city) {
						this.messageService.error("No city found");
					}
				},
				error: (error: Response) => {
					this.messageService.error("Couldn't get city data");
				}
			});
	}

	getWeather(latitude: string, longitude: string): void {
		this.meteoService
			.getWeather(latitude, longitude)
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: (result: MeteoResponse) => {
					this.cityMeteo = result;
					this.chartData = { data: this.cityMeteo?.hourly.temperature_2m, timeStamps: this.cityMeteo?.hourly.time };
				},
				error: (error: Response) => {
					this.messageService.error(`Couldn't get meteo data ${error.statusText}`);
				}
			});
	}
}
