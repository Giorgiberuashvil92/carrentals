import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DialogService } from 'src/app/core/services/dialog.service';
import { ItineraryService } from 'src/app/core/services/itinerary.service';
import { LoadItineraryAction, PostItinerarySolutionForTourAction } from 'src/app/store/actions';
import { AppState, ItinerarySolutionsForTourResponse } from 'src/app/store/models';
import { ItineraryState } from 'src/app/store/reducers';

@Component({
  selector: 'app-choose-new-activity',
  templateUrl: './choose-new-activity.component.html',
  styleUrls: ['./choose-new-activity.component.scss']
})
export class ChooseNewActivityComponent implements OnInit {

  result = [
    {
      img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Prague_Cover.jpg',
      title: 'Prague Castle',
      city: 'Prague',
      isSelfGuided: true
    },
    {
      img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Prague_Cover.jpg',
      title: 'Prague Castle',
      city: 'Prague',
      isSelfGuided: true
    },
    {
      img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Prague_Cover.jpg',
      title: 'Prague Castle',
      city: 'Prague',
      isSelfGuided: true
    }
  ]

  cities = ['PRAGUE', 'PARIS', 'VIENNA'];
  interests = ['PRAGUE1', 'PARIS1', 'VIENNA1', 'PRAGUE2', 'PARIS2', 'VIENNA2', 'PRAGUE3', 'PARIS3', 'VIENNA3', 'PRAGUE4', 'PARIS4', 'VIENNA4', 'PRAGUE5', 'PARIS5', 'VIENNA5', 'PRAGUE6', 'PARIS6', 'VIENNA6'];


  itineraryState: ItineraryState;
  tourSolutions: ItinerarySolutionsForTourResponse;

  priorityObj = {
    'compadre': 0,
    'component-group': 1,
    'new-day-group': 2,
    'new-day-component': 3
  }
  sortedArrayIndexes: number[] = [];
  activeSolutionIndex = 0;

  constructor(
    public dialogService: DialogService,
    private store: Store<AppState>,
    public itineraryService: ItineraryService
  ) { }

  ngOnInit(): void {
    this.store.select(store => store.itinerary).subscribe((itineraryState: ItineraryState) => {
      this.itineraryState = itineraryState;
      if(this.itineraryState.tourSolutions) {
        this.fillSortedArrayIndexes();
        console.log(this.itineraryState.tourSolutions.data);
      }
    });
  }

  onLeft() {
    if(this.activeSolutionIndex <= 0) return;
    this.activeSolutionIndex--;
  }

  onRight() {
    if(this.activeSolutionIndex >= this.sortedArrayIndexes.length - 1) return;
    this.activeSolutionIndex++;
  }

  fillSortedArrayIndexes() {
    this.sortedArrayIndexes = [];
    if(this.itineraryState.tourSolutions.data.length === 1 
      && this.itineraryState.tourSolutions.data[0].attributes.type === 'component-group') {
        this.activeSolutionIndex = 0;
        this.onYes();
    }
    for(const elem in this.priorityObj) {
      for(let i=0; i<this.itineraryState.tourSolutions.data.length; i++) {
        if(this.itineraryState.tourSolutions.data[i].attributes.type === elem) {
          this.sortedArrayIndexes.push(i);
        }
      }
    }
    
    if(!!this.itineraryState.tourSolutions.data.find(a => a.attributes.type === 'new-day-group')) {
      this.sortedArrayIndexes = this.sortedArrayIndexes.filter((n: number) => this.itineraryState.tourSolutions.data[n].attributes.type !== 'new-day-component');
    }
  }

  onYes() {
    this.store.dispatch(new PostItinerarySolutionForTourAction({ 
      itineraryId: this.itineraryState.data.data.id,
      body: {
        type: 'tours',
        attributes: {
          "solution-type": this.itineraryState.tourSolutions.data[this.sortedArrayIndexes[this.activeSolutionIndex]].attributes.type,
          "solution-id": this.itineraryState.tourSolutions.data[this.sortedArrayIndexes[this.activeSolutionIndex]].id,
          "day-id": this.itineraryState.tourSolutions.data[this.sortedArrayIndexes[this.activeSolutionIndex]].attributes["day-id"]
        }
      }
    }))
    this.dialogService.closeDialog();
  }
}
