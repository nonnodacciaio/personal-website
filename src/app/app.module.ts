import { MatSelectModule } from "@angular/material/select";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HomeModule } from "./pages/home/home.module";
import { NgChartsModule, ThemeService } from "ng2-charts";
import { ThemeToggleComponent } from "./navigation/theme-toggle.component";
import { HttpClientModule } from "@angular/common/http";
import { TranslocoRootModule } from "./transloco-root.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { LanguageSelectorComponent } from "./navigation/language-selector.component";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [AppComponent, NavigationComponent, ThemeToggleComponent, LanguageSelectorComponent],
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
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
