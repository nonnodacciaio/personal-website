import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { ChartConfiguration, ChartData, ChartOptions, ChartType } from "chart.js";

@Component({
	selector: "graph",
	template: `
		<div>
			<canvas
				baseChart
				[data]="chartData"
				[options]="chartOptions"></canvas>
		</div>
	`
})
export class GraphComponent implements OnInit {
	@Input() rawChartData: { date: string[]; temperature: string[] } | null = null;
	chartData: any = null;

	chartOptions: ChartOptions = {};

	ngOnInit(): void {
		this.rawDataToChartData();
	}

	rawDataToChartData(): void {
		if (this.rawChartData) {
			let dateTemp: { date: string; temp: string }[] = [];

			this.rawChartData.date.forEach((date, dateIndex) => {
				dateTemp.push({ date: date, temp: this.rawChartData?.temperature[dateIndex] ?? "" });
			});

			this.chartData.data.labels = dateTemp.map(date => date.date);
			this.chartData.data.datasets[0] = { label: "Temperature", data: dateTemp.map(temp => temp.temp) };
		}
	}
}
