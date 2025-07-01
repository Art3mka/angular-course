import { Component } from '@angular/core';
import { UserPlacesComponent } from './places/user-places/user-places.component';
import { AvailablePlacesComponent } from './places/available-places/available-places.component';

@Component({
  selector: 'app-root',
  imports: [UserPlacesComponent, AvailablePlacesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
