import { Component, EventEmitter, Input, input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  imports: [],
  templateUrl: './search-panel.html',
  styleUrl: './search-panel.scss',
})
export class SearchPanel {
  readonly placeholder = input<string>('Search city or coordinates');
  protected readonly query = signal<string>('');
  readonly loading = input<boolean>(false);

  @Output() readonly querySubmitted = new EventEmitter<string>();


  onSubmit(event: Event) {
    event?.preventDefault();
  const trimmed = this.query().trim();
  if(!trimmed){
    return;
  }
  this.querySubmitted.emit(trimmed);
  }
  protected onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.query.set(value);
  }
}
