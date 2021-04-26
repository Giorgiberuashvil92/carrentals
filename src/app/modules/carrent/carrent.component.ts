import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-carrent',
  templateUrl: './carrent.component.html',
  styleUrls: ['./carrent.component.scss']
})


export class CarrentComponent implements OnInit {
  width;
  image = document.getElementsByClassName('carDetailing')
  p: number = 1;
  cars = [
    {name:'pajero', price:'$46', image:'../assets/carebi.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi2.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi2.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi2.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi2.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi2.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi2.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi2.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi2.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi2.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi2.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi2.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi2.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi.svg', transmision:'manual', seats:'5 seats', oil: '5L'},
    {name:'pajero', price:'$46', image:'../assets/carebi.svg', transmision:'manual', seats:'5 seats', oil: '5L'},

  ]

  constructor(public authService: AuthService){

  }
  ngOnInit(): void {
  }

  pageChanged() {
    console.log('bero')
  }
}
