import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{ path: "home", loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule) },
	{ path: "contacts", loadChildren: () => import("./pages/contacts/contacts.module").then(m => m.ContactsModule) },
	{ path: "portfolio", loadChildren: () => import("./pages/portfolio/portfolio.module").then(m => m.PortfolioModule) },
	{ path: "portfolio/meteo", loadChildren: () => import("./pages/meteo-app/meteo.module").then(m => m.MeteoModule) },
	{ path: "skills", loadChildren: () => import("./pages/skills/skills.module").then(m => m.SkillsModule) }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
