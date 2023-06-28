import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { PortfolioPage } from "./portfolio.page";

const routes: Routes = [{ path: "", component: PortfolioPage }];

@NgModule({
	declarations: [PortfolioPage],
	imports: [RouterModule.forChild(routes)],
	providers: []
})
export class PortfolioModule {}
