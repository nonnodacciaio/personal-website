import { NgModule } from "@angular/core";

import { HomePage } from "./home.page";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: "", component: HomePage }];

@NgModule({
	declarations: [HomePage],
	imports: [RouterModule.forChild(routes)],
	providers: []
})
export class HomeModule {}
