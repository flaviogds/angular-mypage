import { Component, EventEmitter, Output } from '@angular/core';
import { Icons } from 'src/app/shared/fontawesome/fontawesome';

@Component({
  selector: 'my-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  icons = Icons;

  @Output()
  theme = new EventEmitter<string>();

  dark = true;

  themeSelector(): void{
    this.dark = !this.dark;
    this.theme.emit(`${this.dark}`);
  }
}
