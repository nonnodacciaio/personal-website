import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { MeteoPage } from "./meteo.page";

const routes: Routes = [{ path: "", component: MeteoPage }];

@NgModule({
	declarations: [MeteoPage],
	imports: [RouterModule.forChild(routes)],
	providers: []
})
export class MeteoModule {}
