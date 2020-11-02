import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ItineraryAlternateToursEffects, ItineraryEffects, ItineraryToursSearchEffects, ItineraryToursSolutionsEffects, ProfileEffects } from './store/effects';
import { ItineraryReducer, ItineraryToursSearchReducer, ItineraryToursSolutionsReducer, ProfileReducer } from './store/reducers';
import { ApiPrefixInterceptor } from './core/interceptors/api-prefix.interceptor';
import { ItineraryAlternateToursReducer } from './store/reducers/itineraryAlternateTours.reducer';
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
      itineraryToursSolutions: ItineraryToursSolutionsReducer
    }),
    EffectsModule.forRoot([
      ItineraryEffects,
      ItineraryAlternateToursEffects,
      ProfileEffects,
      ItineraryToursSearchEffects,
      ItineraryToursSolutionsEffects
    ])
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
