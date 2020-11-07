import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CityEffects, InterestEffects, ItineraryAlternateToursEffects, ItineraryEffects, ItineraryToursSearchEffects, ItineraryToursSolutionsEffects, PasswordEffects, ProfileEffects, PutProfileEffects, SessionEffects } from './store/effects';
import { ItineraryReducer, ItineraryToursSearchReducer, ItineraryToursSolutionsReducer, ProfileReducer, PutProfileReducer, ItineraryAlternateToursReducer, AuthReducer, CityReducer, InterestReducer } from './store/reducers';
import { ApiPrefixInterceptor } from './core/interceptors/api-prefix.interceptor';
import { AuthEffects } from './store/effects/auth.effect';
<<<<<<< HEAD
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { PasswordReducer } from './store/reducers/password.reducer';
=======
import { PasswordReducer } from './store/reducers/password.reducer';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
>>>>>>> c94d0055986d160adc5ed7ab87090ec1b7d2452c
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
      itinerary: ItineraryReducer,
      profile: ProfileReducer,
      itineraryTours: ItineraryAlternateToursReducer,
      itineraryToursSearch: ItineraryToursSearchReducer,
      itineraryToursSolutions: ItineraryToursSolutionsReducer,
      putProfile: PutProfileReducer,
      auth: AuthReducer,
      city: CityReducer,
      interest: InterestReducer,
      password: PasswordReducer
    }),
    EffectsModule.forRoot([
      ItineraryEffects,
      ItineraryAlternateToursEffects,
      ProfileEffects,
      ItineraryToursSearchEffects,
      ItineraryToursSolutionsEffects,
      SessionEffects,
      PutProfileEffects,
<<<<<<< HEAD
      AuthEffects
=======
      AuthEffects,
      CityEffects,
      InterestEffects,
      PasswordEffects
>>>>>>> c94d0055986d160adc5ed7ab87090ec1b7d2452c
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
