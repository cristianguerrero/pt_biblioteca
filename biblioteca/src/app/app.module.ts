import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrestamoFormComponent } from './prestamo-form/prestamo-form.component';
import { PrestamoListComponent } from './prestamo-list/prestamo-list.component';
import { PrestamoIdComponent } from './prestamo-id/prestamo-id.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrestamoFormComponent,
    PrestamoListComponent,
    PrestamoIdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
