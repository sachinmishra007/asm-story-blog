import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(/* webpackChunkName:'main-module' */  '../app/component/main-component/main-component.module').then((_mainC) => _mainC.MainModule),
 
  },
  {
    path: 'blogs/:name',
    loadChildren: () => import(/* webpackChunkName:'landing-story-module' */'../app/component/landing-story/landing-story.module').then((_blogInfo) => _blogInfo.LandingStoryModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
