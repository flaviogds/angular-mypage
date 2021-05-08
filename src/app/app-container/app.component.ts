import { Component, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'GitHub Profile';

  public constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  private darkTheme = true;

  @HostBinding('class')
  get themeMode(): string {
    return this.darkTheme ? 'theme-dark' : 'theme-light';
  }

  themeSelector(theme: string): void{
    this.darkTheme = theme === 'true';
  }
}
