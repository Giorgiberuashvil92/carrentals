import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-city-cards',
  templateUrl: './city-cards.component.html',
  styleUrls: ['./city-cards.component.scss']
})
export class CityCardsComponent implements OnInit {
ngOnInit(){}

array = [
  {
  image: '../../../../assets/paris.svg',
  name:'Paris PassLib 2,3,4 days',
  description:'Enjoy Paris at its fullest with the PassLib sightseeing package including unlimited transportation, access to over 50 museums, a Seine River...',
  validity:'validity',
  flexible:'Flexible',
  enhance: 'Enhance Tickets',
  money: '€ 45'
},
{
  image: '../../../../assets/paris.svg',
  name:'Paris PassLib 2,3,4 days',
  description:'Enjoy Paris at its fullest with the PassLib sightseeing package including unlimited transportation, access to over 50 museums, a Seine River...',
  validity: 'duration',
  flexible: '9HRS',
  enhance: 'Enhance Guids',
  money:'€ 145'
},
]
}
