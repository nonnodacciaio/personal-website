import { NgModule } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgChartsModule } from "ng2-charts";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LanguageSelectorComponent } from "./navigation/language-selector.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { TranslocoRootModule } from "./transloco-root.module";
import { HaloCursorDirective } from "./directives/halo-cursor.directive";

@NgModule({
	declarations: [AppComponent, NavigationComponent, LanguageSelectorComponent, HaloCursorDirective],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatSlideToggleModule,
		MatButtonModule,
		MatDividerModule,
		MatIconModule,
		NgChartsModule,
		HttpClientModule,
		TranslocoRootModule,
		MatFormFieldModule,
		MatSelectModule,
		FormsModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
