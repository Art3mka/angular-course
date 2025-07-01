import { Component, inject } from '@angular/core';
import { UserPlacesComponent } from './places/user-places/user-places.component';
import { AvailablePlacesComponent } from './places/available-places/available-places.component';
import { ErrorService } from './shared/error.service';
import { ErrorModalComponent } from './shared/modal/error-modal/error-modal.component';

@Component({
  selector: 'app-root',
  imports: [UserPlacesComponent, AvailablePlacesComponent, ErrorModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private errorService = inject(ErrorService);

  error = this.errorService.error;
}
