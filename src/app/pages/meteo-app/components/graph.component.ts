import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import * as moment from "moment";

@Component({
	selector: "graph",
	template: `
		<div>
			<canvas
				baseChart
				[data]="lineData.data"
				[type]="lineData.type"
				[options]="lineData.options"></canvas>
		</div>
	`
})
export class GraphComponent implements OnChanges {
	@Input() rawChartData: RawChartData | null = null;
	lineData: any;

	ngOnChanges(changes: SimpleChanges): void {
		this.setChartData();
	}

	setChartData(): void {
		const formattedTimeStamps = this.rawChartData?.timeStamps?.map(ts => moment(ts).format("DD/MM HH:mm"));

		this.lineData = {
			type: "line",
			data: {
				datasets: [
					{
						data: this.rawChartData?.timeStamps?.flatMap((ts, tsIndex) => ({
							x: formattedTimeStamps?.[tsIndex],
							y: this.rawChartData?.data?.[tsIndex]
						})),
						label: "Temperature"
					}
				]
			},
			options: {
				responsive: true
			}
		};
	}
}

export class RawChartData {
	timeStamps: string[] | undefined;
	data: number[] | undefined;
}
