import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'designPatterns', children: [{ path: '**', component: ContentComponent }] },
  { path: 'refactorings', children: [{ path: '**', component: ContentComponent }] },
  { path: '', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
