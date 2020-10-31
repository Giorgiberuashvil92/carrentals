import { ItineraryState } from '../reducers/itinerary.reducer';
import { ProfileState } from '../reducers/profile.reducer';

export interface AppState {
    readonly itinerary: ItineraryState;
    readonly profile: ProfileState;
}
