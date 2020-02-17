import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@mdv16/material';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [MaterialModule, CommonModule, RouterModule],
  declarations: [ LoginComponent, NotFoundComponent, ToolbarComponent, ToolbarComponent ],
  exports: [ LoginComponent,  NotFoundComponent, ToolbarComponent ]
})
export class UiModule {}
