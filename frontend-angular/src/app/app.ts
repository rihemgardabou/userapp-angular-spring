import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RegisterComponent],
  template: `<app-register></app-register>`
})
export class AppComponent {}
