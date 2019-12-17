import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {HttpClientModule} from '@angular/common/http'
import {AngularFireDatabaseModule, AngularFireDatabase} from '@angular/fire/database';
import {environment} from '../environments/environment'
import { home } from './home';

@NgModule({
  declarations: [
    AppComponent,home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,"angular-firebase-77788"),
    HttpClientModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent,home]
})
export class AppModule { }
