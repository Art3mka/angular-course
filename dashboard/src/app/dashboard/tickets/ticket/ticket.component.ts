import { Component, input, output, signal } from '@angular/core';

import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  close = output();
  detailsVisible = signal(false);

  onToggleDetails() {
    this.detailsVisible.set(!this.detailsVisible());
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
