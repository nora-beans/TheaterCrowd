import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { SearchScreenComponent } from './search-screen/search-screen.component';
import { PersonScreenComponent } from './person-screen/person-screen.component';
import { MovieScreenComponent } from './movie-screen/movie-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    SearchScreenComponent,
    PersonScreenComponent,
    MovieScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
