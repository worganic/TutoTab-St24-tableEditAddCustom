/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// DELETE import { AppModule } from './app/app.module';

import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
      path: '',
      loadComponent: () => import("./app/component/home/home.component").then(module => module.HomeComponent)
  },
  {
      path: 'design',
      loadComponent: () => import("./app/component/design/design.component").then(module => module.DesignComponent)
  },
  {
      path: 'abouts',
      loadComponent: () => import("./app/component/abouts/abouts.component").then(module => module.AboutsComponent)
  },
  {
      path: 'users',
      loadComponent: () => import("./app/component/users/users.component").then(module => module.UsersComponent)
  },
  {
      path: 'injected',
      loadComponent: () => import("./app/component/injected/injected.component").then(module => module.InjectedComponent)
  },
  {
    path: 'multiple',
    loadComponent: () => import("./app/component/multiple/multiple.component").then(module => module.MultipleComponent)
  },
  {
    path: 'ngbootstrap',
    loadComponent: () => import("./app/component/ngbootstrap/ngbootstrap.component").then(module => module.NgbootstrapComponent)
  },
  {
      path: '**',
      loadComponent: () => import("./app/component/pagenotfound/pagenotfound.component").then(module => module.PagenotfoundComponent)
  },
 
 



  
];

// DELETE platformBrowserDynamic().bootstrapModule(AppModule)
// DELETE   .catch(err => console.error(err));

 bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule,),
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(routes)
    ]
  })
  .catch(err => console.error(err));