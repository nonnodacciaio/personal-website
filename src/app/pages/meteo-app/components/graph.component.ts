import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
	selector: "graph",
	template: `
		<div>
			<canvas
				baseChart
				[data]="lineData.data"
				[type]="lineData.type"></canvas>
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
		this.lineData = {
			type: "line",
			data: {
				datasets: [
					{
						data: this.rawChartData?.timeStamps?.flatMap((ts, tsIndex) => ({
							x: ts,
							y: this.rawChartData?.data?.[tsIndex]
						})),
						label: "Temperature"
					}
				]
			}
		};
	}
}

export class RawChartData {
	timeStamps: string[] | undefined;
	data: number[] | undefined;
}
