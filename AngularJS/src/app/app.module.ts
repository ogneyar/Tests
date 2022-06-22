import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { OrganiserComponent } from './organiser/organiser.component';
import { CalendarComponent } from './organiser/calendar/calendar.component';
import { OrganiseComponent } from './organiser/organise/organise.component';
import { SelectorComponent } from './organiser/selector/selector.component';
import { MomentPipe } from './shared/moment.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CalculatorComponent } from './calculator/calculator.component';
import { HouseKipreyComponent } from './house-kiprey/house-kiprey.component';
import { HeaderComponent } from './house-kiprey/header/header.component';
import { FooterComponent } from './house-kiprey/footer/footer.component';
import { HomeTopComponent } from './house-kiprey/home-top/home-top.component';
import { HomeFormComponent } from './house-kiprey/home-form/home-form.component';
import { HomeAboutComponent } from './house-kiprey/home-about/home-about.component';
import { HomeCoOpComponent } from './house-kiprey/home-co-op/home-co-op.component';
import { HomePurposeComponent } from './house-kiprey/home-purpose/home-purpose.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    OrganiserComponent,
    CalendarComponent,
    OrganiseComponent,
    SelectorComponent,
    MomentPipe,
    CalculatorComponent,
    HouseKipreyComponent,
    HeaderComponent,
    FooterComponent,
    HomeTopComponent,
    HomeFormComponent,
    HomeAboutComponent,
    HomeCoOpComponent,
    HomePurposeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
