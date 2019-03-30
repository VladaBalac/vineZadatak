import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HeaderComponent } from './core/header/header.component';
import { SearchComponent } from './wine/search/search.component';
import { TableComponent } from './wine/table/table.component';
import { WineListComponent } from './wine/wine-list/wine-list.component';
import { PaginationComponent } from './wine/pagination/pagination.component';
import { EditWineComponent } from './wine/edit-wine/edit-wine.component';
import { AboutComponent } from './wine/about/about.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SearchComponent,
    TableComponent,
    WineListComponent,
    PaginationComponent,
    EditWineComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
