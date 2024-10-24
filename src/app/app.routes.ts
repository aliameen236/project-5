import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {path: '',component: LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'products/:id',component:ProductsComponent}


];
