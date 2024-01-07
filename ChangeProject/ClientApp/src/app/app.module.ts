import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { ConvertComponent } from './convert/convert.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { KeyValuePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    ConvertComponent,
    AboutComponent
  ],
  imports: [
    TableModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    KeyValuePipe,
    AutoCompleteModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'convert', component: ConvertComponent },
      { path: 'about', component: AboutComponent },
    ])
  ],
  providers: [KeyValuePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
