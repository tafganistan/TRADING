import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';
import { ProfilComponent } from './profil/profil.component';
import { FormationsListComponent } from './formations-list/formations-list.component';
import { FormationsComponent } from './formations/formations.component';
import { HomeComponent } from './home/home.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursTradingComponent } from './cours-trading/cours-trading.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'formations', component: FormationsComponent},
  { path: 'formations/liste', component: FormationsListComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'about', component: AboutComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'trading/cours', component: CoursTradingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
