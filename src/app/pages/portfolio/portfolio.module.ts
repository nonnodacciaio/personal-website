import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { RouterModule, Routes } from "@angular/router";
import { PortfolioPage } from "./portfolio.page";
import { TranslocoModule } from "@ngneat/transloco";

const routes: Routes = [{ path: "", component: PortfolioPage }];

@NgModule({
	declarations: [PortfolioPage],
	imports: [RouterModule.forChild(routes), MatButtonModule, TranslocoModule],
	providers: []
})
export class PortfolioModule {}
