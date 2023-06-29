import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { RouterModule, Routes } from "@angular/router";
import { PortfolioPage } from "./portfolio.page";

const routes: Routes = [{ path: "", component: PortfolioPage }];

@NgModule({
	declarations: [PortfolioPage],
	imports: [RouterModule.forChild(routes), MatButtonModule],
	providers: []
})
export class PortfolioModule {}
