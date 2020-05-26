import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./screen/home/home.module').then(m => m.HomeModule) },
  { path: 'home', loadChildren: () => import('./screen/home/home.module').then(m => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./screen/about/about.module').then(m => m.AboutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
