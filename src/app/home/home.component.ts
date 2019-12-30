import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Result: any;
  Rawdata: any;

  constructor(private service: ApiServiceService) { }

  ngOnInit() {
    this.get_Data()
  }
  //Fetch data from backend_Ai and update data 10 seconds
  get_Data() {
    timer(0, 10000).subscribe(() => {
      this.service.feachserice().subscribe((Resp: any[]) => {
        this.Result = Resp['hits']
      })
    })
  }
  //Modelpopup Method
  modelData(data) {
    this.Rawdata = data
  }
}
