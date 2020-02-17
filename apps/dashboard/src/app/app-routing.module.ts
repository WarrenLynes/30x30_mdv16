import { NgModule } from '@angular/core';
import { LoginComponent, NotFoundComponent, UiModule } from '@mdv16/ui';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PhonesComponent } from './phones/phones.component';

@NgModule({
  imports: [
    UiModule,
    RouterModule.forRoot([
      { path: '404', component: NotFoundComponent },
      { path: 'login', component: LoginComponent },
      {path: '', canActivate: [AuthGuard], component: PhonesComponent},
      { path: '**', redirectTo: '404', pathMatch: 'full' }
    ], { initialNavigation: 'enabled' })
  ]
})
export class AppRoutingModule {}
