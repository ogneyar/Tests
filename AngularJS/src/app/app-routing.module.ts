import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { HouseKipreyComponent } from './house-kiprey/house-kiprey.component';
import { OrganiserComponent } from './organiser/organiser.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'organiser', component: OrganiserComponent},
  {path: 'calculator', component: CalculatorComponent},

  {path: 'house-kiprey', component: HouseKipreyComponent},
  
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
