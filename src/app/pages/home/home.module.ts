import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { TranslocoModule } from "@ngneat/transloco";
import { HomePage } from "./home.page";

const routes: Routes = [{ path: "", component: HomePage }];

@NgModule({
	declarations: [HomePage],
	imports: [RouterModule.forChild(routes), TranslocoModule],

	providers: []
})
export class HomeModule {}
