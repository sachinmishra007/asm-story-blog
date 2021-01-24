import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'read/:partName',
    loadChildren: () => import(/* webpackChunkName:'main-module' */'../app/component/content-reading/content-reading.module').then((_mainC) => _mainC.ContentReadingModule),
  },
  {
    path: '',
    loadChildren: () => import(/* webpackChunkName:'main-module' */'../app/component/main-component/main-component.module').then((_mainC) => _mainC.MainModule),
  },
  {
    path: 'blogs/:name',
    loadChildren: () => import(/* webpackChunkName:'landing-story-module'*/'../app/component/landing-story/landing-story.module').then((_blogInfo) => _blogInfo.LandingStoryModule),
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import(/* webpackChunkName:'no-resource-found'*/'../app/component/no-resource-found/no-resource-found.module').then((_noRes) => _noRes.NoResourceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
