import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BmiComponent } from './pages/bmi/bmi.component';
import { ProductsComponent } from './components/to-add-products/to-add-products.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Accueil'},
    { path: 'about', component: AboutComponent, title: 'A Propos'},
    { 
        path: 'bmi',
        component: BmiComponent,
        title: 'Calcul de BMI',
    },
    { path: 'to-add-products',
        component: ProductsComponent,
        title: 'List-Products',
    }
];
