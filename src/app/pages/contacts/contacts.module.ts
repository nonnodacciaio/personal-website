import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { ContactsPage } from "./contacts.component";

const routes: Routes = [{ path: "", component: ContactsPage }];

@NgModule({
	declarations: [ContactsPage],
	imports: [RouterModule.forChild(routes)],
	providers: []
})
export class ContactsModule {}
