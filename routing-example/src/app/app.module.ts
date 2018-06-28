import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app.routing.module";
import {DataBaseService} from "./data-base.service";
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AuthService} from "./auth/auth.service";
import {AuthGuardsService} from "./auth/auth-guards.service";
import {SharedModule} from "./shared/shared.module";

const config = {
  apiKey: "AIzaSyBT1TV_SRNkVROrIbIJ-AUh84BtVSv-WCg",
  authDomain: "auth-a9d3c.firebaseapp.com",
  databaseURL: "https://auth-a9d3c.firebaseio.com",
  projectId: "auth-a9d3c",
  storageBucket: "auth-a9d3c.appspot.com",
  messagingSenderId: "1063261811464"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    SharedModule
  ],
  providers: [DataBaseService, AuthService, AuthGuardsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
