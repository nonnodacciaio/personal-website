import { TranslocoService } from "@ngneat/transloco";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class MessageService {
	constructor(private snackBar: MatSnackBar, private translocoService: TranslocoService) {}

	error(error: string) {
		this.snackBar.open(error, this.translocoService.translate("messageService.close"), { duration: 5000 });
	}
}
