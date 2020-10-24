import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-detail-itirenary',
  templateUrl: './detail-itirenary.component.html',
  styleUrls: ['./detail-itirenary.component.scss']
})
export class DetailItirenaryComponent implements OnInit {

  constructor(
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

}
