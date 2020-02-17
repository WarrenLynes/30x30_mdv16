import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import { PhonesFacade } from './phones.facade';
import * as phonesActions from './phones.actions';
import { Phone, PhonesService, SnackbarService } from '@mdv16/core-data';
import { PhonesPartialState } from './phones.reducer';
import { AppFacade } from '../app/app.facade';

@Injectable()
export class PhonesEffects {
  loadPhones$ = createEffect(() =>
    this.dataPersistence.fetch(phonesActions.loadPhones, {
      run: (
        action: ReturnType<typeof phonesActions.loadPhones>,
        state: PhonesPartialState
      ) => {
        this.appFacade.addLoad('[TASKS][LOAD]');
        return this.phonesService.all().pipe(
          tap(() => this.notifyService.openSnackBar('Successfully Loaded Phone')),
          map((phones: Phone[]) => phonesActions.phonesLoaded({ phones })),
          tap(() => this.appFacade.removeLoad('[TASKS][LOAD]'))
        );
      },
      onError: (action: ReturnType<typeof phonesActions.loadPhones>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  addPhone$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(phonesActions.createPhone, {
      run: (
        action: ReturnType<typeof phonesActions.createPhone>,
        state: PhonesPartialState
      ) => {
        this.appFacade.addLoad('[TASKS][CREATE]');

        return this.phonesService.create(action.phone).pipe(
          map((phone: Phone) => phonesActions.phoneCreated({ phone })),
          tap(() => this.notifyService.openSnackBar('Successfully Added a Phone')),
          tap(() => this.appFacade.removeLoad('[TASKS][CREATE]'))
        );
      },
      onError: (action: ReturnType<typeof phonesActions.createPhone>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  updatePhone$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(phonesActions.updatePhone, {
      run: (
        action: ReturnType<typeof phonesActions.updatePhone>,
        state: PhonesPartialState
      ) => {
        this.appFacade.addLoad('[TASKS][UPDATE]');

        return this.phonesService.update(action.phone).pipe(
          map((phone: Phone) => phonesActions.phoneUpdated({ phone })),
          tap(() => this.notifyService.openSnackBar('Successfully Updated a Phone')),
          tap(() => this.appFacade.removeLoad('[TASKS][UPDATE]'))
        );
      },
      onError: (action: ReturnType<typeof phonesActions.updatePhone>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  deletePhone$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(phonesActions.deletePhone, {
      run: (
        action: ReturnType<typeof phonesActions.deletePhone>,
        state: PhonesPartialState
      ) => {
        this.appFacade.addLoad('[TASKS][DELETE]');
        return this.phonesService.delete(action.phone.id).pipe(
          map((phone: Phone) => phonesActions.phoneDeleted({ phone })),
          tap(() => this.notifyService.openSnackBar('Successfully Deleted a Phone')),
          tap(() => this.phonesFacade.loadPhones()),
          tap(() => this.appFacade.removeLoad('[TASKS][DELETE]'))
        );
      },
      onError: (action: ReturnType<typeof phonesActions.deletePhone>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PhonesPartialState>,
    private phonesService: PhonesService,
    private phonesFacade: PhonesFacade,
    private notifyService: SnackbarService,
    private appFacade: AppFacade
  ) {}
}
