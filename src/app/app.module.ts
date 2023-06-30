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
import { ThemeToggleComponent } from "./shared/components/theme-toggle/theme-toggle.component";

@NgModule({
	declarations: [AppComponent, NavigationComponent, ThemeToggleComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatSlideToggleModule, MatButtonModule, MatDividerModule, MatTabsModule, HomeModule, MatIconModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
