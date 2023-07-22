import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { RouterModule, Routes } from "@angular/router";
import { SkillsPage } from "./skills.page";
import { TranslocoModule } from "@ngneat/transloco";

const routes: Routes = [{ path: "", component: SkillsPage }];

@NgModule({
	declarations: [SkillsPage],
	imports: [RouterModule.forChild(routes), MatButtonModule, TranslocoModule],
	providers: []
})
export class SkillsModule {}
