import {
  AfterViewInit,
  Component,
  ElementRef,
  output,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  private readonly form =
    viewChild.required<ElementRef<HTMLFormElement>>('form');

  // @Output add = new EventEmitter<{ title: string; text: string }>()
  enteredTitle = '';
  enteredText = '';
  add = output<{ title: string; text: string }>();

  ngAfterViewInit(): void {
    console.log('after view init');
  }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
