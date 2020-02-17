import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@mdv16/material';
import { UiModule } from '@mdv16/ui';
import { CoreStateModule } from '@mdv16/core-state';
import { CoreDataModule } from '@mdv16/core-data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PhonesComponent } from './phones/phones.component';
import { ListComponent } from './phones/list/list.component';
import { FormComponent } from './phones/form/form.component';
import { DetailComponent } from './phones/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonesComponent,
    ListComponent,
    FormComponent,
    DetailComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    UiModule,
    CoreStateModule,
    CoreDataModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
