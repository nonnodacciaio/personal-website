import { Component, OnDestroy } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { RawChartData } from "./components/graph.component";
import { CityResponse, Geoname } from "./models/city-response.model";
import { MeteoResponse } from "./models/meteo-response.model";
import { CityService } from "./services/city.service";
import { MessageService } from "./services/message.service";
import { MeteoService } from "./services/meteo.service";
import { TranslocoService } from "@ngneat/transloco";

@Component({
	selector: "meteo-app",
	template: `<div class="sm:w-full md:w-1/2 mx-auto my-3 p-3 md:shadow rounded">
		<p>{{ "meteo.intro" | transloco }}</p>
		<input
			class="rounded p-1 text-black"
			matInput
			[(ngModel)]="userInput"
			(keyup.enter)="getCity()"
			[placeholder]="translocoService.translate('meteo.chooseCity')" /><button
			[color]="'accent'"
			class="mx-3"
			mat-button
			(click)="getCity()">
			<i class="fas fa-search"></i>
		</button>
		<div *ngIf="cities">
			<div>
				<ng-container *ngFor="let city of cities">
					<div
						class="hover:opacity-25 cursor-pointer"
						(click)="selectCity(city)">
						<h2 class="text-amber-300">{{ city?.toponymName }}</h2>
						<p>{{ city.adminName1 }}</p>
					</div>
				</ng-container>
			</div>
		</div>
		<mat-divider></mat-divider>
		<div *ngIf="cityMeteo">
			<h2 class="text-amber-300">{{ selectedCity?.toponymName }}</h2>
			<p>Temperature: {{ cityMeteo?.current_weather?.temperature }}°C</p>
			<p>Weather: {{ meteoService.getWeatherString(cityMeteo.current_weather.weathercode) }}</p>
			<graph
				[rawChartData]="chartData"
				#graph></graph>
		</div>
	</div>`
})
export class MeteoPage implements OnDestroy {
	userInput: string = "";
	cities: Geoname[] = [];
	cityMeteo: MeteoResponse | null = null;
	selectedCity: Geoname | null = null;
	chartData: RawChartData = { data: [], timeStamps: [] };

	destroy$ = new Subject();

	constructor(private cityService: CityService, private messageService: MessageService, public meteoService: MeteoService, public translocoService: TranslocoService) {}

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
					this.cities = result.geonames;
				},
				complete: () => {
					if (!this.cities || this.cities.length == 0) {
						this.messageService.error(this.translocoService.translate("meteo.noCity"));
					}
				},
				error: (error: Response) => {
					this.messageService.error(`${this.translocoService.translate("meteo.errorCity")}: ${error.statusText}`);
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
					this.messageService.error(`${this.translocoService.translate("meteo.errorMeteo")}: ${error.statusText}`);
				}
			});
	}

	selectCity(city: Geoname): void {
		this.selectedCity = city;
		this.getWeather(city.lat, city.lng);
		this.scrollToBottom();
	}

	private scrollToBottom(): void {
		setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100);
	}
}
