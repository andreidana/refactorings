import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  { path: 'designPatterns', children: [{ path: '**', component: ContentComponent }] },
  { path: 'refactorings', children: [{ path: '**', component: ContentComponent }] },
  { path: '', pathMatch: 'full', component: DefaultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
