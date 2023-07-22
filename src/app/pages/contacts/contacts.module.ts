import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { ContactsPage } from "./contacts.component";
import { TranslocoModule } from "@ngneat/transloco";

const routes: Routes = [{ path: "", component: ContactsPage }];

@NgModule({
	declarations: [ContactsPage],
	imports: [RouterModule.forChild(routes), TranslocoModule],
	providers: []
})
export class ContactsModule {}
