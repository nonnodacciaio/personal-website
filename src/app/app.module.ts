import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ThemeToggleComponent } from "./shared/components/theme-toggle/theme-toggle.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatTabsModule } from "@angular/material/tabs";
import { HomeModule } from "./pages/home/home.module";

@NgModule({
	declarations: [AppComponent, NavigationComponent, ThemeToggleComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatSlideToggleModule, MatButtonModule, MatDividerModule, MatTabsModule, HomeModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
