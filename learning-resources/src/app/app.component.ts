import { Component, computed, inject } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import { AuthDirective } from './auth/auth.directive';
import { LogDirective } from './log.directive';

@Component({
  selector: 'app-root',
  imports: [
    AuthComponent,
    LearningResourcesComponent,
    AuthDirective,
    LogDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly authService = inject(AuthService);

  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
