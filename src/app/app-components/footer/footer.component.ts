import { Component } from '@angular/core';
import { Icons } from 'src/app/shared/fontawesome/fontawesome';

@Component({
  selector: 'my-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  icons = Icons;
}
