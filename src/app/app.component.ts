import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
  loading = true;

  constructor() {
    this.loadModule();
  }

  loadModule() {
    setTimeout(() => {
      this.loading = false;
    }, 5000); // Simulating async loading
  }
}
