import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CityEffects, InterestEffects, ItineraryAlternateToursEffects, ItineraryEffects, ItineraryToursSearchEffects, ItineraryToursSolutionsEffects, ProfileEffects, PutProfileEffects, SessionEffects } from './store/effects';
import { ItineraryReducer, ItineraryToursSearchReducer, ItineraryToursSolutionsReducer, ProfileReducer, PutProfileReducer, ItineraryAlternateToursReducer, AuthReducer, CityReducer, InterestReducer } from './store/reducers';
import { ApiPrefixInterceptor } from './core/interceptors/api-prefix.interceptor';
import { AuthEffects } from './store/effects/auth.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
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
      interest: InterestReducer

    }),
    EffectsModule.forRoot([
      ItineraryEffects,
      ItineraryAlternateToursEffects,
      ProfileEffects,
      ItineraryToursSearchEffects,
      ItineraryToursSolutionsEffects,
      SessionEffects,
      PutProfileEffects,
      AuthEffects,
      CityEffects,
      InterestEffects
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
