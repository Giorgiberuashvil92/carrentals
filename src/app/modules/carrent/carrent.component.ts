import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carrent',
  templateUrl: './carrent.component.html',
  styleUrls: ['./carrent.component.scss']
})


export class CarrentComponent implements OnInit {
  width;
  image = document.getElementsByClassName('carDetailing')
  cars = [
    {name:'pajero', price:'$46', image:'../assets/carebi.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi2.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi2.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi2.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi2.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi2.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi2.svg', transmision:'manual', seats:'5 seats', oil: '5L'},

  ]
  ngOnInit(): void {
  }
  // sizeAction(){
  //   document.getElementById('changwidth').style.width="300px"
  //   document.getElementById('changwidth').style.transition = 'all 3s ease'
  // }
}
