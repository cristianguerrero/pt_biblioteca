import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrestamoFormComponent } from './prestamo-form/prestamo-form.component';
import { PrestamoListComponent } from './prestamo-list/prestamo-list.component';
import { PrestamoIdComponent } from './prestamo-id/prestamo-id.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'prestamo-form', component: PrestamoFormComponent, canActivate: [AuthGuard]  },
  { path: 'prestamo-list', component: PrestamoListComponent, canActivate: [AuthGuard]  },
  { path: 'prestamo-id', component: PrestamoIdComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
