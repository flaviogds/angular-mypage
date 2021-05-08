import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../material/material.module';
import { HomePage } from './home/home.page';
import { ProjectsPage } from './projects/projects.page';


@NgModule({
  declarations: [HomePage, ProjectsPage],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FontAwesomeModule,
    MaterialModule,
  ]
})
export class PagesModule { }
