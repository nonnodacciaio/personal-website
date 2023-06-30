import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class MessageService {
	constructor(private snackBar: MatSnackBar) {}
	error(error: string) {
		this.snackBar.open(error, "Close");
	}
}
