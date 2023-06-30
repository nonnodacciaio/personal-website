import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { MeteoPage } from "./meteo.page";
import { CityService } from "./services/city.service";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MessageService } from "./services/message.service";
import { CommonModule } from "@angular/common";
import { MeteoService } from "./services/meteo.service";
import { GraphComponent } from "./components/graph.component";
import { NgChartsModule } from "ng2-charts";

const routes: Routes = [{ path: "", component: MeteoPage }];

@NgModule({
	declarations: [MeteoPage, GraphComponent],
	imports: [RouterModule.forChild(routes), HttpClientModule, MatInputModule, FormsModule, MatButtonModule, MatSnackBarModule, CommonModule, NgChartsModule],
	providers: [CityService, MessageService, MeteoService]
})
export class MeteoModule {}
