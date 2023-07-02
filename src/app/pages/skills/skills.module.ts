import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { RouterModule, Routes } from "@angular/router";
import { SkillsPage } from "./skills.page";

const routes: Routes = [{ path: "", component: SkillsPage }];

@NgModule({
	declarations: [SkillsPage],
	imports: [RouterModule.forChild(routes), MatButtonModule],
	providers: []
})
export class SkillsModule {}
