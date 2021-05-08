import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { ProjectsPage } from './projects/projects.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'projects', component: ProjectsPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

