import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar.component';

@Injectable({providedIn: 'root'})
export class SnackbarService {

  snackbarRefs: MatSnackBarRef<SnackbarComponent>[] = [];

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    this.snackbarRefs.push(this._snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: 2000
    }));
  }
}
