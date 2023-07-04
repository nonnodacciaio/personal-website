import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { RouterModule, Routes } from "@angular/router";
import { NgChartsModule } from "ng2-charts";
import { GraphComponent } from "./components/graph.component";
import { MeteoPage } from "./meteo.page";
import { CityService } from "./services/city.service";
import { MessageService } from "./services/message.service";
import { MeteoService } from "./services/meteo.service";
import { MatDividerModule } from "@angular/material/divider";

const routes: Routes = [{ path: "", component: MeteoPage }];

@NgModule({
	declarations: [MeteoPage, GraphComponent],
	imports: [RouterModule.forChild(routes), HttpClientModule, MatInputModule, FormsModule, MatButtonModule, MatSnackBarModule, CommonModule, NgChartsModule, MatDividerModule],
	providers: [CityService, MessageService, MeteoService]
})
export class MeteoModule {}
