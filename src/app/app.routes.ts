import { Routes } from "@angular/router";
import { DetalleComponent } from './components/detalle/detalle.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

export const ROUTES:Routes = [
    {path:'home', component:HomeComponent},
    {path:'search', component:SearchComponent},
    {path:'detalle/:id', component:DetalleComponent},
    {path:'', pathMatch:'full', redirectTo:'home'},
    {path:'**', pathMatch:'full', redirectTo:'home'}
];



