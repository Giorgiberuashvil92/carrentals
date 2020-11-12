import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AffiliateEffects, CityEffects, InterestEffects, ItineraryAlternateToursEffects, ItineraryEffects, ItineraryToursSearchEffects, ItineraryToursSolutionsEffects, PasswordEffects, ProfileEffects, PutProfileEffects, SessionEffects } from './store/effects';
import { ItineraryReducer, ItineraryToursSearchReducer, ItineraryToursSolutionsReducer, ProfileReducer, PutProfileReducer, ItineraryAlternateToursReducer, AuthReducer, CityReducer, InterestReducer, AffiliateReducer } from './store/reducers';
import { ApiPrefixInterceptor } from './core/interceptors/api-prefix.interceptor';
import { AuthEffects } from './store/effects/auth.effect';
import { PasswordReducer } from './store/reducers/password.reducer';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
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
      password: PasswordReducer,
      affiliate: AffiliateReducer
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
      InterestEffects,
      PasswordEffects,
      AffiliateEffects
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
