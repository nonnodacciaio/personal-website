import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CityResponse } from "../models/city-response.model";

@Injectable()
export class CityService {
	private apiUrl = "https://secure.geonames.org/search";

	constructor(private http: HttpClient) {}

	getCity(name: string): Observable<CityResponse> {
		const params = {
			username: "nonnodacciaio",
			type: "json",
			cities: "cities1000",
			name: name
		};

		return this.http.get<CityResponse>(this.apiUrl, { params });
	}
}
