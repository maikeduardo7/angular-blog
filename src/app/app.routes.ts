import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentChild } from '@angular/core';
import { ContentComponent } from './pages/content/content.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'content/:id',
        component: ContentComponent
    }
];


