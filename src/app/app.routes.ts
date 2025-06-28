import { Routes } from '@angular/router';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    {path: '',component:HomePageComponent},
    {path: 'categories',component:CategoriesPageComponent},
    {path: 'product/:id', component:ProductPageComponent},
    {path: 'login', component:LoginPageComponent}
];
